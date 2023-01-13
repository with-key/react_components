import React, { createContext, useContext, useEffect, useState } from "react";
import ReactDOM from "react-dom";

const SelectContext = createContext({});

/*--------------------------------------------------------*
 * Select Root
 *--------------------------------------------------------*/
const SelectRoot = ({ children }) => {
  const [open, setOpen] = useState(false);
  const [selected, setSelected] = useState("1");
  const [options, setOptions] = useState([]);

  return (
    <SelectContext.Provider
      value={{
        open,
        selected,
        options,
        setOpen,
        setSelected,
        setOptions,
      }}
    >
      <div style={{ position: "relative" }}>{children}</div>
    </SelectContext.Provider>
  );
};

/*--------------------------------------------------------*
 * Select Trigger
 *--------------------------------------------------------*/

const SelectTrigger = ({ children, ...rest }) => {
  const { setOpen, selected, options } = useContext(SelectContext);
  const [value] = options.filter((o) => o.value === selected);

  return (
    <button
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        padding: "0 28px",
      }}
      {...rest}
      onBlur={() => setOpen(false)}
      onClick={() => setOpen((pre) => !pre)}
    >
      <div>{value?.label}</div>
      <div>▼</div>
    </button>
  );
};

/*--------------------------------------------------------*
 * Select List
 *--------------------------------------------------------*/

const SelectList = ({ children, ...rest }) => {
  const { open, setOptions } = useContext(SelectContext);

  useEffect(() => {
    setOptions(
      React.Children.toArray(children)
        .map((c) => c.props)
        .map(({ value, children: label }) => ({
          value,
          label,
        }))
    );
  }, []);

  return open ? <div {...rest}>{children}</div> : <></>;
};

/*--------------------------------------------------------*
 * Select Option
 *--------------------------------------------------------*/

const SelectOption = ({ children, value, ...rest }) => {
  const { setSelected } = useContext(SelectContext);
  return (
    <div {...rest} onMouseDown={(e) => setSelected(value)}>
      {children}
    </div>
  );
};

/*--------------------------------------------------------*
 * Select Portal
 *--------------------------------------------------------*/

const SelectPortal = ({ children }) => {
  const portalTarget = document.getElementById("portal-target");

  if (!portalTarget) {
    return null;
  }

  return ReactDOM.createPortal(children, portalTarget);
};

/*--------------------------------------------------------*
 * Result
 *--------------------------------------------------------*/

const Root = SelectRoot;
const Trigger = SelectTrigger;
const List = SelectList;
const Option = SelectOption;
const Portal = SelectPortal;

export { Root, Trigger, List, Option, Portal };
