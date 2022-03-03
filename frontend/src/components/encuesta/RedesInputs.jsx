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
    <div className="redesInputs">
      <h4>{title}</h4>

      <label>
        <input
          className="me-2"
          type="checkbox"
          name={`${red}-check`}
          onChange={handleCheckbox}
          checked={isChecked[`${red}-check`] ? true : false}
        />

        <span>No uso {text}</span>
      </label>

      <div className="my-2">
        <label className="me-2">
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
      </div>

      <label>
        <input
          className="me-2"
          type="number"
          disabled={isChecked[`${red}-check`] ? true : false}
          defaultValue="0"
          {...rulesInputs(`${red}-input`)}
        />

        <span>{isHours[`${red}-units`] ? "horas" : "minutos"}</span>
      </label>

      {errors[`${red}-input`] ? (
        <span className="errorSpan">{errors[`${red}-input`].message}</span>
      ) : null}
    </div>
  );
}
