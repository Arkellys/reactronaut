import PropTypes from "prop-types";

/**
 * @callback onChange
 * @param {boolean} checked - New state of the toggle switch
 */

/**
 * @typedef {object} ToggleProps
 * @property {string} checked - Whether the toggle is checked
 * @property {Function} onChange - Callback fired on input change
 * @property {string} labelFalse - Label displayed to the left of the button ("off" state)
 * @property {string} labelTrue - Label displayed to the right of the button ("on" state)
 */

/**
 * @param {ToggleProps} props - Props of the component 
 */

const ToggleSwitch = ({ checked, onChange, labelFalse, labelTrue }) => (
	<label className="toggleSwitch">
		{labelFalse}
		<span className="inputWrapper">
			<input
				type="checkbox"
				checked={checked}
				onChange={() => onChange(!checked)}
			/>
			<span></span>
		</span>
		{labelTrue}
	</label>
);

ToggleSwitch.propTypes = {
	checked: PropTypes.bool.isRequired,
	onChange: PropTypes.func.isRequired,
	labelFalse: PropTypes.string.isRequired,
	labelTrue: PropTypes.string.isRequired
};

export default ToggleSwitch;