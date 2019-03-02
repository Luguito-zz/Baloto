import React from 'react';

const Buttons = (props) =>{
    return(
        <div className={props.className}>
            <button
            onClick={props.onClick}
            disabled={props.i >= props.numberLimit} 
            className="btn w-boton m-bottom waves-effect waves-light">
                {props.name}
            </button>
        </div>
    )
}
export default Buttons;