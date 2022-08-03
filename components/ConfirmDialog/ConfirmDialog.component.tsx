import React from "react";
import { Dialog, Transition } from "@headlessui/react";
import { Fragment } from "react";
import { AiOutlineClose } from "react-icons/ai";

import style from "./ConfirmDialog.module.scss";
import Button from "@components/Button/Button.component";

type Props = {
  isOpen: boolean;
  closeModal: () => void;
  title?: string;
  body?: string;
  confirm: () => void;
};

const ConfirmDialog: React.FC<Props> = ({
  isOpen,
  closeModal,
  title,
  body,
  confirm,
}) => {
  const confirmFunction = () => {
    confirm();
    closeModal();
  };

  return (
    <Transition appear show={isOpen} as={Fragment}>
      <Dialog as="div" className={style.mainContainer} onClose={closeModal}>
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className={style.blurBackground} />
        </Transition.Child>

        <div className={style.panelContainer}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0 scale-95"
            enterTo="opacity-100 scale-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100 scale-100"
            leaveTo="opacity-0 scale-95"
          >
            <Dialog.Panel className={style.panel}>
              <Dialog.Title className={style.header}>
                <span>{title ? title : "Title"}</span>
                <span className={style.closeIconContainer} onClick={closeModal}>
                  <AiOutlineClose size={22} className={style.closeIcon} />
                </span>
              </Dialog.Title>
              <div className={style.body}>
                <p>{body ? body : "alert body message"}</p>
              </div>

              <div className={style.btnContainer}>
                <div className={style.btn}>
                  <Button
                    name="Cancel"
                    type="outlined"
                    variant="danger"
                    onClick={closeModal}
                  />
                  <Button
                    type="contained"
                    variant="danger"
                    name="Confirm"
                    onClick={confirmFunction}
                  />
                </div>
              </div>
            </Dialog.Panel>
          </Transition.Child>
        </div>
      </Dialog>
    </Transition>
  );
};

export default ConfirmDialog;
