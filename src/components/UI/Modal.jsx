import React from "react";
import ReactDOM from "react-dom";
import styles from "./Modal.module.css";

const Backdrop = (props) => {
  const cartHandler = () => {
    props.onModalClick();
  };
  return <div className={styles.backdrop} onClick={cartHandler} />;
};

const Overlay = (props) => {
  return (
    <div className={styles.modal}>
      <div className={styles.content}>{props.children}</div>
    </div>
  );
};

const portalEl = document.getElementById("overlay");

const Modal = (props) => {
  return (
    <React.Fragment>
      {ReactDOM.createPortal(
        <Backdrop onModalClick={props.onModalClick} />,
        portalEl
      )}
      {ReactDOM.createPortal(<Overlay>{props.children}</Overlay>, portalEl)}
    </React.Fragment>
  );
};

export default Modal;
