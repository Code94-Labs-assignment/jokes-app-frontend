"use client"; // Mark this file as a Client Component

import React from "react";
import CustomButton from "@/components/shared/CustomButton";
import { toast } from "react-toastify";

const Page = () => {
  const handleClick = () => {
    toast.success("Joke submitted successfully");
  };
  return (
    <div>
      <CustomButton
        onClick={() => handleClick()}
        text="Submit Joke"
        variant="contained"
        backgroundColor="#437EF7"
      />
    </div>
  );
};

export default Page;
