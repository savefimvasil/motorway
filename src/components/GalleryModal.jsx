import Modal from 'react-modal';
import {BaseImage} from "../shared/BaseImage";
import {useEffect, useState} from "react";

export const GalleryModal = ({isOpen, closeModal, customStyles, selectedImage}) => {
  Modal.setAppElement('body');

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={closeModal}
      style={{ background: 'transparent' }}
      contentLabel="Example Modal"
    >
      <BaseImage
        url={selectedImage.url}
        alt={selectedImage.alt_description}
        title={selectedImage.description}
        objectFit="contain"
      />
    </Modal>
  )
}
