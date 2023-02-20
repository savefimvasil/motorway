import { BaseInput } from "../shared/BaseInput";
import { useForm } from "react-hook-form";
import {useEffect} from "react";
import {BaseCalendar} from "../shared/BaseCalendar";
import {BaseColorPicker} from "../shared/BaseColorPicker";
import {BaseRangeInput} from "../shared/BaseRangeInput";

export const BlockForm = () => {
  const { handleSubmit, register, formState: { errors } } = useForm();

  const onSubmit = data => console.log(data);

  useEffect(() => {
    console.log('errors', errors)
  }, [errors])

  return (
    <div className="block-form">
      <form onSubmit={handleSubmit(onSubmit)}>
        <BaseInput
          register={register}
          errors={errors}
          name="name"
          config={{ required: 'This field is required' }}
        />
        <BaseInput
          register={register}
          errors={errors}
          name="email"
          config={{
            required: "This field is required",
            pattern: {
              value: /\S+@\S+\.\S+/,
              message: "Entered value does not match email format"
            }
          }}
        />
        <BaseCalendar
          register={register}
          errors={errors}
          name="birthdate"
          config={{ required: 'This field is required' }}
        />
        <BaseColorPicker
          register={register}
          errors={errors}
          name="color"
          config={{ required: 'This field is required' }}
        />
        <BaseRangeInput
          register={register}
          errors={errors}
          name="salary"
          min={10000}
          max={100000}
          config={{ required: 'This field is required' }}
        />
        <input type="submit" />
      </form>
    </div>
  )
}
