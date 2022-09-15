import React from 'react';
import PropTypes from 'prop-types';


const Alert = (props) => {
  return (
    <>

{props.alert!==null &&
<div onChange={props.handleOnChange} className={`alert   alert-${props.alert.Type} alert-dismissible fade show `} role="alert">
  <strong >{props.alert.msg}</strong> 
</div>
}

    </>
  )
}

export default Alert;