"use client";

import { SubmitHandler, useForm } from "react-hook-form";
import { useMutation, useQueryClient } from "@tanstack/react-query";

import { Button } from "../ui/button";
import CustomInput from "@/components/Form/CustomInput";
import CustomTextarea from "@/components/Form/CustomTextarea";
import { FC } from "react";
import { Flex } from "@radix-ui/themes";
import { IReview } from "@/types/types";
import { reviewSchema } from "@/types/validate";
import reviewService from "@/services/review.service";
import { useLeaveFeedback } from "@/utils/store";
import { yupResolver } from "@hookform/resolvers/yup";

interface FormValues {
  role?: string | undefined;
  review: string;
  date?: number;
  name?: string;
  avatar?: string;
}

interface Props {
  name: string | null | undefined;
  avatar: string | null | undefined;
}
const ReviewForm: FC<Props> = ({ name, avatar }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(reviewSchema),
  });

  const { openForm, setOpenForm } = useLeaveFeedback();
  const currentDate = Math.floor(Date.now() / 1000);

  const queryClient = useQueryClient();

  //Отправка на сервер
  const { mutate } = useMutation(
    ["create review"],
    (review: IReview) => reviewService.create(review),
    {
      onSuccess() {
        setOpenForm();
        queryClient.invalidateQueries(["reviews"]);
      },
    }
  );

  //Получение данных формы
  const onSubmit: SubmitHandler<FormValues> = async (data) => {
    const review = {
      role: data.role || "",
      review: data.review,
      date: currentDate,
      name: name || "",
      avatar: avatar || "",
    };

    mutate(review);
  };

  return (
    <>
      {openForm && (
        <form onSubmit={handleSubmit(onSubmit)}>
          <Flex gap="6" direction="column">
            <CustomInput
              register={{ ...register("role") }}
              labelFor="job"
              placeholder="Job title"
              label="Your job title"
              errorMessage={errors.role?.message}
            />
            <CustomTextarea
              register={{ ...register("review") }}
              labelFor="feedback"
              placeholder="Feedback"
              label="Your feedback"
            />
          </Flex>
          <Button className="mt-10" type="submit">
            Leave Feedback
          </Button>
        </form>
      )}
    </>
  );
};

export default ReviewForm;
