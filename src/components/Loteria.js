import React ,{useState,useEffect} from 'react';

//Components
import Buttons from './Buttons';
import Resultados from './Resultados';
import PrintNumber from './printNumber';

//Css
import '../css/Loteria.css'

const RifaRenovada = () =>  {
    let [loteria,setLoteria] = useState([]);
    let [numberLimit, setLimit] = useState(10);
    let [i, setI] = useState(0);
    let [resultados, setResultados] = useState([]);

    useEffect( ()=>{
       Sorteo()
    },[numberLimit])

    const Sorteo = () => {
        const n = numberLimit;
        const arr = new Array(n);

        for (let i = 0; i < n; i++) {
            arr[i] = i + 1;
        }
        
        arr.sort(() => Math.random() > 0.5 ? 1 : -1);
        const rifa = arr.slice(0, numberLimit);

        setLoteria(rifa)
        setI(i = 0);
        setResultados([]);
    }

    const nextNumber = () =>{
        setI(i + 1);
        setResultados(resultados+loteria[i]+'-')
    }

    const changeNumberLimit = (e) =>{
        if(e.target.checked){
            setLimit(30);
        }else{
            setLimit(10);
        }
    }

    return(
        <div className="row">
            <div className="col s12">

                <h4>Bienvenido al Baloto</h4>

                <PrintNumber 
                i={i}
                loteria={loteria}
                numberLimit={numberLimit}/>

                <label>
                    <input type="checkbox" onClick={changeNumberLimit}/>
                    <span>30 numbers</span>
                </label>

                <div className="row">
                    <Buttons 
                        className="col s6 m-boton right-align" 
                        onClick={nextNumber} 
                        i={i}
                        numberLimit={numberLimit}
                        name="Siguiente"/>

                    <Buttons
                        className="col s6 m-boton left-align"
                        onClick={Sorteo}
                        name="Reiniciar"/>
                </div>

                <Resultados resultados={resultados} />
            </div>
        </div>
    ) 
}
export default RifaRenovada;