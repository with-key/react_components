import React from "react";
import Input from "./components/input/Input";
import FeatureButton from "./features/Button";
import FeatureModal from "./features/Modal";
import FeatureSelect from "./features/Select";

const App = () => {
  return (
    <>
      <FeatureButton />
      <div>
        <h1>Price Format Input</h1>
        <Input />
      </div>
      <FeatureModal />
      <FeatureSelect />
    </>
  );
};

export default App;
