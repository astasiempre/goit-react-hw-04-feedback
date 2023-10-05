import css from './FeedbackOptions.module.css'
const FeedbackOptions = ({ options, onLeaveFeedback }) => (
  <div>
    {options.map((option) => (
        <button className={css.button} key={option} onClick={() => onLeaveFeedback(option)}>
        {option}
      </button>
    ))}
  </div>
);

export default FeedbackOptions;
