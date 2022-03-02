export default function RedesInputs({
  title,
  red,
  text,
  handleRadio,
  isHours,
  handleCheckbox,
  isChecked,
  errors,
  rulesInputs,
}) {
  return (
    <div>
      <h4>{title}</h4>

      <label>
        <input
          type="checkbox"
          name={`${red}-check`}
          onChange={handleCheckbox}
          checked={isChecked[`${red}-check`] ? true : false}
        />
        No uso {text}
      </label>

      <label>
        <input
          type="radio"
          name={`${red}-units`}
          disabled={isChecked[`${red}-check`] ? true : false}
          checked={isHours[`${red}-units`] ? false : true}
          value="minutes"
          onChange={handleRadio}
        />
        <span>Minutos</span>
      </label>

      <label>
        <input
          type="radio"
          name={`${red}-units`}
          disabled={isChecked[`${red}-check`] ? true : false}
          checked={isHours[`${red}-units`] ? true : false}
          value="hours"
          onChange={handleRadio}
        />
        <span>Horas</span>
      </label>

      <label>
        <input
          type="number"
          disabled={isChecked[`${red}-check`] ? true : false}
          {...rulesInputs(`${red}-input`)}
        />
      </label>

      {errors[`${red}-input`] ? (
        <span>{errors[`${red}-input`].message}</span>
      ) : null}
    </div>
  );
}