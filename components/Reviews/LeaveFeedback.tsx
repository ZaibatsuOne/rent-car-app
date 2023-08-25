"use client";

import { useLeaveFeedback } from "@/utils/store";
import { Button } from "@/components/ui/button";

const LeaveFeedback = () => {
  const { openForm, setOpenForm } = useLeaveFeedback();
  return (
    <Button size="md" variant="minimal" onClick={setOpenForm}>
      {openForm ? "Close Form" : "Leave Feedback"}
    </Button>
  );
};

export default LeaveFeedback;
