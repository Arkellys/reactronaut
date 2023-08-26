import PropTypes from "prop-types";

/**
 * @typedef {object} ButtonProps
 * @property {string} [variant="contained"] - Style of the button
 * @property {string} [color="primary"] - Color of the button
 * @property {string} label - Label of the button
 * @property {...any} [rest] - Native button config
 */

/**
 * @param {ButtonProps} props - Props of the component 
 */

const Button = ({
	variant = "contained",
	color = "primary",
	label,
	...rest
}) => (
	<button
		className={`${variant} ${color}`}
		{...rest}
	>
		{label}
	</button>
);

Button.propTypes = {
	variant: PropTypes.oneOf(["contained", "lined"]),
	color: PropTypes.oneOf(["primary", "danger"]),
	label: PropTypes.string.isRequired
};

export default Button;