"use client";

import { useLeaveFeedback } from "@/utils/store";
import { Button } from "./ui/button";

const LeaveFeedback = () => {
  const setOpenForm = useLeaveFeedback((state) => state.setOpenForm);
  return (
    <Button size="md" variant="minimal" onClick={setOpenForm}>
      Leave feedback
    </Button>
  );
};

export default LeaveFeedback;
