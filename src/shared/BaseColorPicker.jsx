export const BaseColorPicker = ({ name, errors, register, config }) => {
  return (
    <>
      <input type="color" {...register(name, { ...config })}/>
      <p className="form-error">{errors[name] && <span>{errors[name].message}</span>}</p>
    </>
  )
}
