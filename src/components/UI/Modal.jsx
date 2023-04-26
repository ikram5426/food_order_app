import React from "react";
import ReactDOM from "react-dom";
import styles from './Modal.module.css'

const Backdrop=()=>{
  return <div className={styles.backdrop}/>
}

const Overlay=(props)=>{
  return <div className={styles.modal}>
    <div className={styles.content}>{props.children}</div>
  </div>
}

const portalEl=document.getElementById('overlay')

const Modal = (props) => {
  return (
    <React.Fragment>
      {ReactDOM.createPortal(<Backdrop />, portalEl)}
      {ReactDOM.createPortal(<Overlay >{props.children}</Overlay>, portalEl)}
    </React.Fragment>
  );
};

export default Modal;
