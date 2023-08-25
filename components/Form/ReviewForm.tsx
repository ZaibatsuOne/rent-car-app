"use client";

import CustomInput from "@/components/Form/CustomInput";
import CustomTextarea from "@/components/Form/CustomTextarea";
import reviewService from "@/services/review.service";
import { useLeaveFeedback } from "@/utils/store";
import { Flex } from "@radix-ui/themes";
import { Button } from "../ui/button";
import { useForm, SubmitHandler } from "react-hook-form";
import { FC } from "react";
import {
  QueryClient,
  useMutation,
  useQueryClient,
} from "@tanstack/react-query";

interface FormValues {
  role: string;
  review: string;
}

interface Props {
  name: string | null | undefined;
  avatar: string | null | undefined;
}
const ReviewForm: FC<Props> = ({ name, avatar }) => {
  const { openForm, setOpenForm } = useLeaveFeedback();
  const { register, handleSubmit } = useForm();
  const currentDate = Math.floor(Date.now() / 1000);

  const queryClient = useQueryClient();

  //Отправка на сервер
  const { mutate } = useMutation(
    ["create review"],
    (review) => reviewService.create(review),
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
      role: data.role,
      review: data.review,
      date: currentDate,
      name: name,
      avatar: avatar,
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
