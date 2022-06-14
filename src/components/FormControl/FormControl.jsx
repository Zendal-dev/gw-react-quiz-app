import { Field } from "react-final-form";
import { Select } from "mui-rff";
import { Box, InputLabel, MenuItem, TextField } from "@mui/material";
import { isValidElement } from "react";

export default function FormControl({
  label,
  type,
  name,
  component = "input",
  onChange,
  variant,
  items,
  boxSx = {},
  ...props
}) {
  const handleChange = (event, input) => {
    input.onChange(event);
    onChange && onChange(event.target.value);
  };

  return (
    <Box sx={{ display: "inline-flex", flexDirection: "column", ...boxSx }}>
      <Field type={type} name={name} component={component} {...props}>
        {({ input }) => {
          if (variant === "multiselect" || variant === "select") {
            return (
              <Select
                name={name}
                label={label}
                multiple={variant === "multiselect"}
                sx={{ mb: 2 }}
              >
                {isValidElement(items)
                  ? items
                  : (items ?? []).map((item) => (
                      <MenuItem value={item.value}>{item.label}</MenuItem>
                    ))}
              </Select>
            );
          }

          return (
            <>
              <InputLabel htmlFor={name}>{label}</InputLabel>
              <TextField
                {...props}
                {...input}
                onChange={(event) => handleChange(event, input)}
                id={name}
                sx={{ mt: 0, mb: 2 }}
              />
            </>
          );
        }}
      </Field>
    </Box>
  );
}
