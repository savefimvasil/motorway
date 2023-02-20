export const BaseInput = ({ name, errors, register, config }) => {
  return (
    <>
      <input type="text" {...register(name, { ...config })}/>
      <p className="form-error">{errors[name] && <span>{errors[name].message}</span>}</p>
    </>
  )
}
