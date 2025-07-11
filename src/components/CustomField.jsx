import React from 'react'

export default function CustomField({placeholder, value, onChange}) {
  return (
    <input 
    type="text" 
    value={value}
    placeholder={placeholder}
    onChange={onChange}
    />
  )
}
