import React from "react";
import Modal from "@material-ui/core/Modal";
import Backdrop from "@material-ui/core/Backdrop";
import Fade from "@material-ui/core/Fade";
import classNames from "classnames/bind";
import styles from "./styles.module.scss";
const cx = classNames.bind(styles);

export default ({ btnComponent, contentComponent }) => {
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      {btnComponent(handleOpen)}
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        className={cx("modal")}
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500
        }}
      >
        <Fade in={open}>
          <div className={cx("paper")}>
            {contentComponent &&
              contentComponent({ onCancel: handleClose, onUpload: handleClose })
            }
          </div>
        </Fade>
      </Modal>
    </div>
  );
};
