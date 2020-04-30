import React from 'react'

export default function TextFieldArea(props) {
  const { forLabel, id, onChange, name, value } = props;
  return (
    <div className="form-group">
      <label htmlFor={forLabel}>{forLabel}</label>
      <textarea className="form-control" id={id} rows="3" onChange={onChange} name={name} value={value}></textarea>
    </div>
  )
}
