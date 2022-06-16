import React, {useEffect, useState} from "react";
import {createPortal} from "react-dom";
import CloseIcon from "Assets/icons/x.svg";
import {ImageIcon} from "elv-components-js";

const Modal = ({
  children,
  Toggle,
  closable=true,
  noFade=false,
  id="",
  className=""
}) => {
  const [scrolled, setScrolled] = useState(false);

  const Close = (event) => {
    if(!closable) { return; }

    if(event && (event.key || "").toLowerCase() !== "escape") { return; }

    document.removeEventListener("keydown", Close);
    document.body.style.overflowY = "scroll";

    Toggle(false);
  };

  useEffect(() => {
    document.addEventListener("keydown", Close);
    document.body.style.overflowY = "hidden";

    return () => {
      document.removeEventListener("keydown", Close);
      document.body.style.overflowY = "scroll";

    };
  }, []);

  return (
    <div id={id} className={`modal ${noFade ? "modal--no-fade" : ""} ${className || ""}`} onClick={() => Close()}>
      {
        Toggle ?
          <div className="modal__header">
            <button className="modal__close-button">
              <ImageIcon
                key={"back-icon-Close Modal"}
                className={"modal__close-icon"}
                title={"Close Modal"}
                icon={CloseIcon}
                onClick={() => Close()}
              />
            </button>
          </div> :
          null
      }
      <div
        className="modal__content"
        onClick={event => event.stopPropagation()}
        ref={element => {
          // Ensure content is scrolled to top on first render
          if(!element || scrolled) { return; }

          element.scrollTo(0, 0);

          setScrolled(true);
        }}
      >
        { children }
      </div>
    </div>
  );
};

const ModalPortal = (args) => {
  return (
    createPortal(
      <Modal {...args} />,
      document.getElementById("app")
    )
  );
};

export default ModalPortal;
