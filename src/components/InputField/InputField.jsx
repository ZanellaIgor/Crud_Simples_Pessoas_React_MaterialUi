import { TextField } from '@mui/material';
import { Controller } from 'react-hook-form';

const inputBase = ({ name, label, control, ...rest }) => {
  return (
    <Controller
      name={name}
      control={control}
      defaultValue=""
      render={({ field, fieldState: { error } }) => {
        return (
          <TextField
            {...field}
            {...rest}
            name={name}
            label={label}
            value={field?.value}
            error={!!error}
            helperText={error?.message}
            InputLabelProps={{
              shrink: !!field?.value,
            }}
          />
        );
      }}
    />
  );
};

export const InputField = inputBase;
