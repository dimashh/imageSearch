import React from 'react';
import './ImageComponent.css';
import ImageHolderComponent from './ImageHolderComponent';

const ImageComponent = (props) => {
  const images = props.images.map(item => {
    return <ImageHolderComponent key={item.id} image={item} />
  });

  return (
    <div className="image_list">{images}</div>
  )
};

export default ImageComponent;
