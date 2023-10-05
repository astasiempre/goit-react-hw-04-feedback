import css from './Statistics.module.css'
const Statistics = ({ good, neutral, bad, total, positivePercentage }) => (
    <div className={css.statisticsWrap}>
    <p className={css.statisticsItem}>Good: {good}</p>
    <p className={css.statisticsItem}>Neutral: {neutral}</p>
    <p className={css.statisticsItem}>Bad: {bad}</p>
    <p className={css.statisticsItem}>Total: {total}</p>
    <p className={css.statisticsItem}>Positive feedback: {positivePercentage}%</p>
  </div>
);

export default Statistics;