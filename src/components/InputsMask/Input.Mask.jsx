import { TextField } from '@mui/material';
import { forwardRef } from 'react';
import { Controller } from 'react-hook-form';
import { PatternFormat } from 'react-number-format';

function getFormatByType(typeInput) {
  switch (typeInput) {
    case 'cpf':
      return '###.###.###-##';
    case 'cnpj':
      return '##.###.###/####-##';
    case 'cep':
      return '#####-###';
    case 'phone':
      return '(##) ####-####';
    case 'celPhone':
      return '(##) #####-####';
    case 'text':
      return '';
    default:
      return '';
  }
}

const InputBase = ({ name, label, typeInput, control, ...rest }, ref) => {
  const format = getFormatByType(typeInput);
  return (
    <Controller
      name={name}
      control={control}
      defaultValue=""
      render={({ field, fieldState: { error } }) => {
        return (
          <PatternFormat
            {...field}
            {...rest}
            name={name}
            label={label}
            customInput={TextField}
            ref={ref}
            value={field.value || ''}
            fullWidth
            mask={'_'}
            format={format}
            error={!!error}
            helperText={error?.message}
            onChange={(event) => {
              const val = event.target.value;
              field.onChange(val);
              rest?.onChange?.(event);
            }}
          />
        );
      }}
    />
  );
};
export const InputMask = forwardRef(InputBase);
