import React from 'react';


const ImageGalleryItem = ({image, tags, onClick, getLargeImg}) => {
  return (
    <li className="ImageGalleryItem">
      <img src={image} alt={tags} onClick={() => { getLargeImg(image); onClick() }} className="ImageGalleryItem-image"/>
    </li>
  )
}

export default ImageGalleryItem;