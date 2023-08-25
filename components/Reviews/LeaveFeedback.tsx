"use client";

import { useLeaveFeedback } from "@/utils/store";
import { Button } from "@/components/ui/button";
import { FC } from "react";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { Text } from "@radix-ui/themes";

interface Props {
  userData: string | null | undefined;
}

const LeaveFeedback: FC<Props> = ({ userData }) => {
  const { openForm, setOpenForm } = useLeaveFeedback();
  return (
    <>
      {userData ? (
        <Button size="md" variant="minimal" onClick={setOpenForm}>
          {openForm ? "Close Form" : "Leave Feedback"}
        </Button>
      ) : (
        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger>
              <Button size="md" variant="minimal" disabled>
                Leave Feedback
              </Button>
            </TooltipTrigger>
            <TooltipContent>
              <Text>To leave a Feedback - Login</Text>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
      )}
    </>
  );
};

export default LeaveFeedback;
