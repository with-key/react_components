import React, { useState } from "react";
import Stack from "../components/@elem/Stack";
import Button from "../components/button/Button";
import * as Input from "../components/input/Input";

const FeatureInput = () => {
  const [form, setForm] = useState({
    name: "",
    price: "",
  });

  const onSubmitHandler = (e) => {
    e.preventDefault();

    Object.values(form).filter((el) => el !== "").length === 0
      ? window.alert("이름과 가격 모두 입력해주세요.")
      : window.alert(`{ name: ${form.name}, price: ${form.price} }`);
  };

  return (
    <>
      <h1>Price Format Input</h1>
      <form onSubmit={onSubmitHandler}>
        <Stack gap={30}>
          <div>
            <label>이름</label>
            <Input.Normal
              getValues={(v) => setForm((pre) => ({ ...pre, name: v }))}
            />
          </div>
          <div>
            <label>가격</label>
            <Input.Price
              getValues={(v) => setForm((pre) => ({ ...pre, price: v.raw }))}
            />
          </div>

          <Button.Primary size="small">저장</Button.Primary>
        </Stack>
      </form>
    </>
  );
};

export default FeatureInput;
