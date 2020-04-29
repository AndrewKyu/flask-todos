import React from 'react'

export default function InputTextField(props) {
  const { forLabel, placeholder, type, id, onChange, name } = props;
  let input;

  if(type === 'text'){
    input = (
      <div>
        <label htmlFor={forLabel}>{forLabel}</label>
        <input type={type} id={id} placeholder={placeholder} className="form-control" onChange={onChange} name={name}/>
      </div>
    );
  }else if(type ==='checkbox'){
    input = (
        <div>
          <input className="form-check-input" type={type} value="" id={id} onChange={onChange} name={name}/>
          <label className="form-check-label" htmlFor={forLabel}>
            {forLabel}
          </label>
        </div>
    );
  }
  return (
    <div className={type === 'checkbox' ? 'form-check' : 'form-group'}>
      {input}
    </div>
  )
}

