import RedesInputs from "./RedesInputs";

export default function Formulario({
  handleSubmit,
  onSubmit,
  errors,
  rules,
  handleRadio,
  isHours,
  handleCheckbox,
  isChecked,
  clearErrors,
  control,
  rulesInputs,
}) {
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <h2>Información</h2>

      <div>
        <div>
          <label>
            <span>Correo electrónico</span>
            <input type="email" placeholder="Correo" {...rules.correo} />
          </label>

          {errors.correo ? <span>{errors.correo.message}</span> : null}
        </div>

        <div>
          <label>
            <span>Edad</span>

            <select {...rules.edad}>
              <option value="">Seleccionar</option>
              <option value="18-25">Entre 18 y 25 años</option>
              <option value="26-33">Entre 26 y 33 años</option>
              <option value="34-40">Entre 34 y 40 años</option>
              <option value="40+">Más de 40 años</option>
            </select>
          </label>

          {errors.edad ? <span>{errors.edad.message}</span> : null}
        </div>

        <div>
          <label>
            <span>Sexo</span>

            <select {...rules.sexo}>
              <option value="">Seleccionar</option>
              <option value="masculino">Masculino</option>
              <option value="femenino">Femenino</option>
              <option value="otro">Otro</option>
            </select>
          </label>

          {errors.sexo ? <span>{errors.sexo.message}</span> : null}
        </div>
      </div>

      <h2>Redes Sociales</h2>

      <div>
        <div>
          <label>
            <span>Red social favorita</span>

            <select {...rules.favorita}>
              <option value="">Seleccionar</option>
              <option value="fb">Facebook</option>
              <option value="ig">Instagram</option>
              <option value="twitter">Twitter</option>
              <option value="wa">WhatsApp</option>
              <option value="tiktok">TikTok</option>
              <option value="otra">Otra</option>
            </select>
          </label>

          {errors.favorita ? <span>{errors.favorita.message}</span> : null}
        </div>

        <h3>¿Cuanto tiempo usas cada red social durante el día?</h3>

        <RedesInputs
          title="Facebook"
          red="fb"
          text="Facebook"
          handleRadio={handleRadio}
          isHours={isHours}
          handleCheckbox={handleCheckbox}
          isChecked={isChecked}
          clearErrors={clearErrors}
          control={control}
          rules={rules}
          rulesInputs={rulesInputs}
          errors={errors}
        />
        <RedesInputs
          title="Instagram"
          red="ig"
          text="Instagram"
          handleRadio={handleRadio}
          isHours={isHours}
          handleCheckbox={handleCheckbox}
          isChecked={isChecked}
          clearErrors={clearErrors}
          control={control}
          rules={rules}
          rulesInputs={rulesInputs}
          errors={errors}
        />
        <RedesInputs
          title="Twitter"
          red="twitter"
          text="Twitter"
          handleRadio={handleRadio}
          isHours={isHours}
          handleCheckbox={handleCheckbox}
          isChecked={isChecked}
          clearErrors={clearErrors}
          control={control}
          rules={rules}
          rulesInputs={rulesInputs}
          errors={errors}
        />
        <RedesInputs
          title="WhatsApp"
          red="wa"
          text="WhatsApp"
          handleRadio={handleRadio}
          isHours={isHours}
          handleCheckbox={handleCheckbox}
          isChecked={isChecked}
          clearErrors={clearErrors}
          control={control}
          rules={rules}
          rulesInputs={rulesInputs}
          errors={errors}
        />
        <RedesInputs
          title="TikTok"
          red="tiktok"
          text="TikTok"
          handleRadio={handleRadio}
          isHours={isHours}
          handleCheckbox={handleCheckbox}
          isChecked={isChecked}
          clearErrors={clearErrors}
          control={control}
          rules={rules}
          rulesInputs={rulesInputs}
          errors={errors}
        />
        <RedesInputs
          title="Otras"
          red="otras"
          text="otras redes sociales"
          handleRadio={handleRadio}
          isHours={isHours}
          handleCheckbox={handleCheckbox}
          isChecked={isChecked}
          clearErrors={clearErrors}
          control={control}
          rules={rules}
          rulesInputs={rulesInputs}
          errors={errors}
        />
      </div>

      <button type="submit">Terminar</button>
    </form>
  );
}
