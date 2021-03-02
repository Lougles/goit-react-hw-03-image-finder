import React from 'react';
import ImageGalleryItem from '../ImageGalleryItem/ImageGalleryItem';

const ImageGallery = ({ data, onClick, getLargeImg }) => {
  if (data.length === 0) {
    return null;
  }
  return (
    <ul className="ImageGallery">
      {data.map(item => <ImageGalleryItem image={item.largeImageURL} getLargeImg={getLargeImg} onClick={onClick} largeImageUrl={item.largeImageURL} tag={item.tags} key={item.id} />)}
    </ul>
  )
}

export default ImageGallery;