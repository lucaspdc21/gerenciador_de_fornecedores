import React from 'react';
import { Flex } from "antd";

interface FormButtonProps {
  text: string;
}

const FormButton: React.FC<FormButtonProps> = ({ text }) => {
  return (
    <Flex className="items-center w-full justify-center">
      <button
        type="submit"
        className={`
          bg-blue-950 h-14 w-full md:w-1/4 rounded-md bg-primary text-lg font-bold text-white
          hover:bg-blue-600
        shadow focus:outline-none focus:ring
        `}
      >
        {text}
      </button>
    </Flex>
  );
};

export default FormButton;