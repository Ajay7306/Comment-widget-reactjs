import { useState } from "react";

const CommentForm = ({
  handleSubmit,
  submitLabel,
  hasCancelButton = false,
  handleCancel,
  initialText = "",
}) => {
  const [text, setText] = useState(initialText);
  const isTextareaDisabled = text.length === 0;
  const onSubmit = (event) => {
    event.preventDefault();
    handleSubmit(text);
    setText("");
  };
  return (
    <form onSubmit={onSubmit} className='container'>
      <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIYAAACGCAMAAAAvpwKjAAAAM1BMVEXk5ueutLfKzc/n6eqrsbTh4+S6v8KorrK0uby9wsS3vL/d3+HO0tTa3d7U19nq7O3Dx8oi6WswAAADIklEQVR4nO2a627kIAyFQ2wChEB4/6ddkrk0nc0QzGC6W3F+VWqlfjq2cbAZhq6urq6urq6urq6urq5fK3j+AKk/42VYBx/MNOt5MqOD9SdIAFxAhShuQqX0KNfmEF6LB8JDKCbb1BFwsxInQgxDQ5BwCnED8Y04wOrXcHwDCW0o3F9J8cKhG/gB7m1AviS5QbIoUEtmCnsNsXHMzHZc5MWTI3ByQMijEEIx1i34jMS4izM9dDZFDAtXg4ExNyR7WLjsAAIEX5bCQjEjcvDYAYTM2DFGFjtsfpncpDkoaAm62+E4MGYiBU9UJJVCiInh6HDUmETVd4OeGiwlm9/VDhj1+9s6kSkELvUxyIXCUior8QzlwqBT/GY3SnKDIUVLKqV+wRadG/V7G/WjZ8dg+PD5N3pKQYdFw9BhgZyjDIVSkhxo61PEqFAxeO7T1KiwxCTKE+8pLBDkWxvPNWW70FPs4DIjitDe2MzYRk6E+QbjuCf/8xxZx9Yw53EopmJ9KK+zsHSToyCHAw37nBiuz3ScuCF2jquZOXdEHiAmVbe4tNoxwfLWENTsY/sDhwzqDARjV2265lplEC8kiHpsv32EwU/b/75LaONa7tkOIDC4ZQzGmDB6C623n18c60E/4AQASOv8Ep2Yd22GLM7J7TetEAY3mvmRFs/8vCdI8JJ9TR5N8EEfduInNauUMIvlMwUGuWy1kTrIn9bo0bLUDUCsz9Mz61wKp6U6CMhRUCf3Qilja1YxWJPIhoQQZ18rS2IDKYO4gUxVRj4wfACxS02fN13wmQvgpCMfvuqAwXwMsYNo9wHHWsGKu1T5Ja5k+PdWWLx5qxOQJ4cou8hlXtAIIPQEideR2hQlzxhk8hlRqcjTaxYKalyAiYI2v65aqS/Kr1vKoxWy8t9TWD4vRP4EBiZWjMz0oI0dSzDywlKw26NJZVRtyRaJqKyZFLsZORsO9szYMS7HUmv1vnrKceUGeXdThnHR4hok6I5xkaSc3eSbLjAa1MmmqweDjcy4+A4jv3QrVHrpE1s8tlE6R93YSEs6N6CR0hRdXV1dXf+j/gBDuydTlyyg3QAAAABJRU5ErkJggg==" className="image" />
      <textarea
        className="comment-form-textarea"
        value={text}
        onChange={(e) => setText(e.target.value)}
        maxLength="200"
      />
      <button className="comment-form-button" disabled={isTextareaDisabled}>
        {submitLabel}
      </button>
    </form>
  );
};

export default CommentForm;
