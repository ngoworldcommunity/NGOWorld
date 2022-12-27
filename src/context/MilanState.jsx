import react from "react";
import MilanContext from "./MilanContext";

const MilanState = (props) => {
  const [drawerOpen, setDrawerOpen] = react.useState(true);
  const anchor = "left";
  const [state, setState] = react.useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });

  return (
    <MilanContext.Provider
      value={{
        drawerOpen,
        setDrawerOpen,
        anchor,
        state,
        setState,
      }}
    >
      {props.children}
    </MilanContext.Provider>
  );
};

export default MilanState;
