import React from "react";
import FeatureButton from "./features/Button";
import FeatureModal from "./features/Modal";
import FeatureSelect from "./features/Select";
import FeatureInput from "./features/Input";

const App = () => {
  return (
    <>
      <FeatureButton />
      <FeatureInput />
      <FeatureModal />
      <FeatureSelect />
    </>
  );
};

export default App;
