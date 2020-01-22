import React from 'react';
function Button({label}){
    return(
        <button type="button" className="btn btn-success" data-testid="button">{label}</button>
    )
}
export default Button