import React from "react";
import { Button } from "./ui/button";
import Spinner from "./Spinner";
import { useFormStatus } from "react-dom";

const SubmitButton = ({ isValid }: { isValid: boolean }) => {
  const { pending } = useFormStatus();

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    if (pending) {
      event.preventDefault();
    }
  };

  return (
    <Button
      type="submit"
      className="w-full border rounded-lg text-white font-semibold text-base bg-gradient-to-r from-[#0179FE] to-[#4893FF] hover:from-[#0056D2] hover:to-[#3678D2] hover:border-[#0056D2] hover:shadow-lg"
      disabled={pending || !isValid}
      onClick={handleClick}
      aria-disabled={pending}
    >
      {pending && (
        <div className="w-4 h-4 mr-2">
          <Spinner />
        </div>
      )}
      Submit
    </Button>
  );
};

export default SubmitButton;
