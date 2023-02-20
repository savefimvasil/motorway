export const BaseRangeInput = ({ name, errors, register, config, min, max }) => {
  return (
    <>
      <input type="range" min={min} max={max} {...register(name, { ...config })}/>
      <p className="form-error">{errors[name] && <span>{errors[name].message}</span>}</p>
    </>
  )
}
