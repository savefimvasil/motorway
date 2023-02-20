import React, { useEffect, useState } from 'react';
import './App.css';
import { Gallery } from "./components/Gallery";
import { GalleryModal } from "./components/GalleryModal";
import {BlockForm} from "./components/BlockForm";

const App = () => {
  const [images, setImages] = useState();
  const [selectedImage, setSelectedImage] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(true)

  useEffect(() => {
    fetch('/images?limit=10')
      .then(res => res.json())
      .then(data => {
        console.log('Success:', data);
        setImages(data);
      })
      .catch(error => {
        console.error('Error:', error);
      });
  }, []);

  function toggleSelectedImage (image) {
    setIsModalOpen(true)
    setSelectedImage(image)
  }

  return (
    <div className='app'>
      <BlockForm />
      <Gallery images={images} openInModal={toggleSelectedImage} />
      { selectedImage &&
        <GalleryModal
          selectedImage={selectedImage}
          isOpen={isModalOpen}
          closeModal={() => setIsModalOpen(false)}
        />
      }
    </div>
  );
}

export default App;
