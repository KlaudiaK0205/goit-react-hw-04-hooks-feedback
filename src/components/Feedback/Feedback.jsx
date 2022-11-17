import PropTypes from 'prop-types';
import style from './Feedback.module.css'
    
export const Feedback = ({ options, onLeaveFeedback }) => {
    return (
        <div>
            {options.map(option => {
            return (
                <button
                className={style.btn}
                type="button"
                onClick={() => onLeaveFeedback(option)}
                key={option}
                >
                    {option}
                </button>
            );
            })}
        </div>
    );
};

Feedback.propTypes = {
    options: PropTypes.string.isRequired,
    onLeaveFeedback: PropTypes.func.isRequired
}