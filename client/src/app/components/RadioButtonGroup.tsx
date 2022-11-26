import {
  FormControl,
  FormControlLabel,
  Radio,
  RadioGroup,
} from "@mui/material";

interface RadioButtonGroupProps {
  options: any[];
  selectedValue: string;
  onChange: (event: any) => void;
}

export const RadioButtonGroup = ({
  options,
  selectedValue,
  onChange,
}: RadioButtonGroupProps) => {
  return (
    <FormControl>
      <RadioGroup onChange={onChange} value={selectedValue}>
        {options.map(({ value, label }) => (
          <FormControlLabel
            control={<Radio />}
            value={value}
            label={label}
            key={value}
          />
        ))}
      </RadioGroup>
    </FormControl>
  );
};
