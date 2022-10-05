import React, { useState } from "react";
import Button from "./components/Button";
import Input from "./components/Input";

const App = () => {
  const [value, setValue] = useState("");
  console.log(value);
  return (
    <div>
      {/* <Input
        ph="입력해주세요"
        value={value}
        type="text"
        onChange={(e) => {
          const { value } = e.target;
          setValue(value);
        }}
      /> */}
      <Button
        variant="small"
        onClick={() => {
          console.log("클릭했다.");
        }}
        type="button"
      >
        전송하기
      </Button>
      <Button
        variant="big"
        onClick={() => {
          console.log("전송하기 클릭했다.");
        }}
      >
        취소하기
      </Button>
    </div>
  );
};

export default App;
