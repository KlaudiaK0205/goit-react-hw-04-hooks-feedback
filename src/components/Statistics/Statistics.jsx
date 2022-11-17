import PropTypes from 'prop-types';
import style from './Statistics.module.css'

export const Statistics = ({ good, neutral, bad, total, positivePercentage }) => {
    return (
    <>
        <div className={style.good}>Good: {good}</div>
        <div className={style.neutral}>Neutral: {neutral}</div>
        <div className={style.bad}>Bad: {bad}</div>
        <div className={style.option}>Total: {total}</div>
        <div className={style.positive}>Positive Feedback: {positivePercentage}%</div>
    </>
        
    )
}

Statistics.prototype = {
    good: PropTypes.number.isRequired,
    neutral: PropTypes.number.isRequired,
    bad: PropTypes.number.isRequired,
    total: PropTypes.number.isRequired,
    positivePercentage: PropTypes.number.isRequired,
};
