import PropTypes from 'prop-types';
import { useState } from 'react';

import CloseBtn from '../CloseBtn';

import defaultImage from '../images/image.jpg';

const ImageGalleryItem = ({ image, onImageClick, handleClickBtn }) => {
  const [hover, setHover] = useState(false);

  const { webformatURL, largeImageURL, id, tags } = image;

  const handleClick = e => {
    onImageClick(e.target.srcset);
  };

  const handleClickDelBtn = e => {
    handleClickBtn(e.target.id);
  };

  const showBtn = () => {
    setHover(true);
  };

  const hideBtn = () => {
    setHover(false);
  };

  return (
    <li
      className="ImageGalleryItem"
      key={id}
      id={id}
      onMouseOver={showBtn}
      onMouseLeave={hideBtn}
    >
      <div className="ImgGallery-overlay">
        <img
          src={webformatURL}
          srcSet={largeImageURL}
          alt={tags}
          className="ImageGalleryItem-image"
          onClick={handleClick}
        />
        {hover && (
          <CloseBtn
            className="close_modal_btn"
            id={id}
            handleClickBtn={handleClickDelBtn}
          />
        )}
      </div>
    </li>
  );
};

ImageGalleryItem.defaultProps = {
  images: [],
  src: defaultImage,
  srcSet: defaultImage,
  alt: 'photo',
};

ImageGalleryItem.protoType = {
  images: PropTypes.arrayOf(
    PropTypes.exact({
      src: PropTypes.string.isRequired,
      srcSet: PropTypes.string.isRequired,
      tags: PropTypes.string.isRequired,
    }),
  ),
  onImageClick: PropTypes.func.isRequired,
};

export default ImageGalleryItem;
