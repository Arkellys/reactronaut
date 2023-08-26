import PropTypes from "prop-types";

import images from "@config/images";

/**
 * @typedef {object} ImageProps
 * @property {string} name - Name of the image
 */

/**
 * Displays an image.
 * @param {ImageProps} props - Props of the component 
 */

const Image = ({ name }) => <img src={images[name]} alt={name} />;

Image.propTypes = {
  name: PropTypes.oneOf(Object.keys(images)).isRequired
};

export default Image;