//
import React from "react";

export const GlobalForm = React.forwardRef((props) => {
  const onSubmit = (event) => {
    event.preventDefault();
    props.onSubmit(event);
  };

  // console.log(props);
  return (
    <>
      {props && props !== "" && (
        <form {...props} onSubmit={(e) => onSubmit(e)}>
          {props.children}
        </form>
      )}
    </>
  );
});
GlobalForm.displayName = "GlobalForm";
