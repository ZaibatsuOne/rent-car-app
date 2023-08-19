"use client";

import * as z from "zod";
import { FC } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { carType } from "@/data/data";

const FormSchema = z.object({
  items: z.array(z.string()).refine((value) => value.some((item) => item), {
    message: "You have to select at least one item.",
  }),
});
interface Props {
  selectedTypes: string[];
  onTypeChange: (type: string) => void;
}
const TypeFilter: FC<Props> = ({ selectedTypes, onTypeChange }) => {
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      items: ["recents", "home"],
    },
  });
  const handleCheckboxChange = (type: string) => {
    onTypeChange(type);
  };
  return (
    <Form {...form}>
      <form className="space-y-8">
        <FormField
          control={form.control}
          name="items"
          render={() => (
            <FormItem>
              <div className="mb-4">
                <FormLabel className="text-sm text-secondary300">
                  TYPE
                </FormLabel>
              </div>
              {carType.map((item) => (
                <FormField
                  key={item.id}
                  control={form.control}
                  name="items"
                  render={({ field }) => {
                    return (
                      <FormItem
                        key={item.id}
                        className="flex flex-row items-center gap-2 space-y-0"
                      >
                        <FormControl>
                          <Checkbox
                            checked={
                              selectedTypes && selectedTypes.includes(item.name)
                            }
                            onCheckedChange={() =>
                              handleCheckboxChange(item.name)
                            }
                          />
                        </FormControl>
                        <FormLabel className="text-secondary400 text-lg font-semibold capitalize">
                          {item.name}
                        </FormLabel>
                      </FormItem>
                    );
                  }}
                />
              ))}
              <FormMessage />
            </FormItem>
          )}
        />
      </form>
    </Form>
  );
};

export default TypeFilter;
