import { Controller } from "react-hook-form";
import Select from 'react-select'
import { countries } from "../../../../assets/countries";

const SelectCountry = ({ control, name, rules }) => {

  return (
      <Controller 
        control={control}
        name={ name }
        rules={ rules }
        render={({
          field: { onChange, value,  ref },
          fieldState: { invalid, isTouched, isDirty, error },
          }) => (
            <Select
              tabSelectsValue
              options={ countries }
              onChange={ onChange } // send value to hook form
              value={ value }
              inputRef={ ref }
            />
          )}
      />
  )
}

export default SelectCountry