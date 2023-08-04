import React, { useEffect } from "react";

export default function ClickAwayListener(props) {
  const { children, onClickAway } = props;

  useEffect(() => {
    function handleClick(event) {
      // Check if the clicked element is inside the component
      if (!event.target.closest(".click-away-listener")) {
        // If it's not, call the onClickAway function
        onClickAway();
      }
    }

    document.addEventListener("mousedown", handleClick);

    return () => {
      document.removeEventListener("mousedown", handleClick);
    };
  }, [onClickAway]);

  return <div className="click-away-listener">{children}</div>;
}
