import React, { useState } from "react";

const useInput = (initialValues) => {
  const [values, setValue] = useState(initialValues);

  const onChangeHandler = (e) => {
    const { name, value } = e.target;
    setValue({
      ...values,
      [name]: value,
    });
  };

  return { values, onChangeHandler };
};

export default useInput;
