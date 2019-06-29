import React from 'react'

interface SelectProps {
  values: string[]
  onChange(value: string): any
  disabled?: boolean
  selected?: string
}

export const Select: React.FC<SelectProps> = ({
  values = [],
  onChange,
  disabled = false,
  selected,
}) => (
  <select
    disabled={disabled}
    onChange={({ target: { value } }) => onChange(value)}
    defaultValue={selected}
  >
    {values.map((value, index) => (
      <option key={`${value}-${index}`} value={value}>
        {value}
      </option>
    ))}
  </select>
)
