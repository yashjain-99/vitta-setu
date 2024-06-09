import React from "react";
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Control, FieldPath } from "react-hook-form";
import { authFormSchema } from "@/lib/utils";
import { z } from "zod";

const formSchema = authFormSchema("register");

interface CustomInputProps {
  control: Control<z.infer<typeof formSchema>>;
  name: FieldPath<z.infer<typeof formSchema>>;
  label: string;
  placeholder: string;
}

const CustomInput = ({
  control,
  name,
  label,
  placeholder,
}: CustomInputProps) => {
  return (
    <FormField
      control={control}
      name={name}
      render={({ field }) => (
        <div className="flex flex-col gap-1 w-full">
          <FormLabel className="text-sm font-medium font-inter text-[#344054]">
            {label}
          </FormLabel>
          <FormControl>
            <Input
              placeholder={placeholder}
              type={name === "password" ? "password" : "text"}
              className=" min-w-fit text-base placeholder:text-base font-normal font-inter text-[#667085] rounded-lg border border-gray-300 focus:border-blue-500"
              {...field}
            />
          </FormControl>

          <FormMessage className="text-xs text-red-500 mt-2" />
        </div>
      )}
    />
  );
};

export default CustomInput;
