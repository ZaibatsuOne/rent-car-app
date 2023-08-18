"use client";

import { FC } from "react";
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

interface Props {
  selectedCapacity: number[];
  handleCapacityChange: (capacity: number) => void;
}
const CapacityFilter: FC<Props> = ({
  selectedCapacity,
  handleCapacityChange,
}) => {
  const form = useForm({
    defaultValues: {
      items: [2],
    },
  });

  const capacity = [2, 4, 6, 8];
  return (
    <Form {...form}>
      <form className="space-y-8">
        <FormField
          control={form.control}
          name="items"
          render={() => (
            <FormItem>
              <div className="mb-4">
                <FormLabel className="text-sm text-secondary300 uppercase">
                  capacity
                </FormLabel>
              </div>
              {capacity.map((item, index) => (
                <FormField
                  key={index}
                  control={form.control}
                  name="items"
                  render={({ field }) => {
                    return (
                      <FormItem
                        key={index}
                        className="flex flex-row items-center gap-2 space-y-0"
                      >
                        <FormControl>
                          <Checkbox
                            checked={selectedCapacity.includes(item)}
                            onCheckedChange={() => handleCapacityChange(item)}
                          />
                        </FormControl>
                        <FormLabel className="text-secondary400 text-lg font-semibold capitalize">
                          {item} Person
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

export default CapacityFilter;
