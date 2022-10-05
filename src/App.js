import React, { useState } from "react";
import { Button, GreenButton } from "./components/button";
import Input from "./components/input/Input";
import useInput from "./hooks/useInput";

const App = () => {
  const { values, onChangeHandler } = useInput({
    title: "",
    body: "",
  });

  return (
    <div>
      <Button></Button>
      <Input
        ph="입력해주세요"
        value={values.title}
        type="text"
        name="title"
        onChange={onChangeHandler}
      />
      <Input
        ph="입력해주세요"
        value={values.body}
        type="text"
        name="body"
        onChange={onChangeHandler}
      />
    </div>
  );
};

export default App;
