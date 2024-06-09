import { MenuItem, TextField } from '@mui/material';
import { Controller } from 'react-hook-form';

const InputBase = ({
  name,
  label,
  control,
  options,
  defaultValue,
  ...rest
}) => {
  return (
    <Controller
      name={name}
      control={control}
      defaultValue={defaultValue ?? ''}
      render={({ field, fieldState: { error } }) => (
        <TextField
          {...field}
          {...rest}
          id={`outlined-select-${name}`}
          label={label}
          name={name}
          value={field?.value}
          select
          fullWidth
          error={!!error}
          helperText={error?.message}
          InputLabelProps={{ shrink: !!field?.value }}
        >
          {options.map((option, index) => (
            <MenuItem key={index} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </TextField>
      )}
    />
  );
};

export const InputSelect = InputBase;
