import React from 'react';

const printNumber = (props) =>{
    return(
        <div className="row m-top">
            <div className="col s12 flex">
                <div className="w-number b-s-number">
                    <h1>{props.numberLimit > props.i ? props.loteria[props.i]: props.loteria[props.i - 1]}</h1>  
                </div>
            </div>
        </div>
    )
}

export default printNumber;