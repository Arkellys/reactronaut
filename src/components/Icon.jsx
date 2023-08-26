import PropTypes from "prop-types";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faRocket } from "@fortawesome/free-solid-svg-icons";

const ICONS = {
  plus: faPlus,
  rocket: faRocket
}

/**
 * @typedef {object} IconProps
 * @property {string} name - Name of the icon
 */

/**
 * Displays an icon.
 * @param {IconProps} props - Props of the component 
 */

const Icon = ({ name }) => <FontAwesomeIcon icon={ICONS[name]} />;

Icon.propTypes = {
  name: PropTypes.oneOf(Object.keys(ICONS)).isRequired
};

export default Icon;