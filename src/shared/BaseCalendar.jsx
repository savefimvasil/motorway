export const BaseCalendar = ({ name, errors, register, config }) => {
  return (
    <>
      <input type="date" {...register(name, { ...config })}/>
      <p className="form-error">{errors[name] && <span>{errors[name].message}</span>}</p>
    </>
  )
}
