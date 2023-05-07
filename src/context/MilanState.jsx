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
  const [isSignUpModalOpen, setIsSignUpModalOpen] = react.useState(false);

  const toggleSignUpModal = () => {
    if (isSignUpModalOpen) {
      setIsSignUpModalOpen(false);
      document.body.style.overflow = "unset";
      return;
    }
    setIsSignUpModalOpen(true);
    document.body.style.overflow = "hidden";
  };

  return (
    // eslint-disable-next-line react/react-in-jsx-scope
    <MilanContext.Provider
      value={{
        drawerOpen,
        setDrawerOpen,
        anchor,
        state,
        setState,
        isSignUpModalOpen,
        toggleSignUpModal,
      }}
    >
      {props.children}
    </MilanContext.Provider>
  );
};

export default MilanState;
