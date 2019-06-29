import React from 'react'

interface SelectProps {
  values: string[]
  onChange(value: string): any
  label: string
  disabled?: boolean
}

export const Select: React.FC<SelectProps> = ({
  values = [],
  onChange,
  disabled = false,
  label,
}) => (
  <select
    disabled={disabled}
    onChange={({ target: { value } }) => onChange(value)}
    defaultValue={label}
  >
    <option disabled>{label}</option>
    {values.map((value, index) => (
      <option key={`${value}-${index}`} value={value}>
        {value}
      </option>
    ))}
  </select>
)
