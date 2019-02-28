import React ,{useState,useEffect} from 'react';

/*
Primero generemos un array al crear el componente
luego usaremos ese array para ir imprimiendo los numero uno a uno
----
para el caso de reiniciar la loteria, se podria simplemente limpiar todo
y que dispare alguna accion para generar otro array.

*/
const RifaRenovada = () =>  {
    let [loteria,setLoteria] = useState([]);
    let [i, setI] = useState(0);
    let [resultados, setResultados] = useState([]);

    useEffect( ()=>{
        const baloto = setInterval(Sorteo,10);

        function stopBaloto(){
            clearInterval(baloto)
        }

        setTimeout(stopBaloto,1000)

    },[])

    function Sorteo(){
        const n = 10;
        const arr = new Array(n);

        for (let i = 0; i < n; i++) {
            arr[i] = i + 1;
        }
        
        arr.sort(() => Math.random() > 0.5 ? 1 : -1);
        const rifa = arr.slice(0, 10);

        setLoteria(rifa)
        setI(i = 0);
        setResultados([]);
    }

    function nextNumber(){
        setI(i + 1);
        setResultados(resultados+loteria[i] +'-')
    }

    return(
        <div>

            <h1>{i === 10 ? `Gano el numero "${loteria[9]}"`: loteria[i]}</h1><br/>
            <button onClick={nextNumber} disabled={i === 10} className="btn waves-effect waves-light" >Siguiente Numero</button>
            <button onClick={Sorteo} className="btn waves-effect waves-light">Reiniciar</button> <br/>
            <h6>Numeros Jugados en esta ronda</h6><br/>
            <h2>{resultados}</h2>
        </div>
    ) 
}

export default RifaRenovada;