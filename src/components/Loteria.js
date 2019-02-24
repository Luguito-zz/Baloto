import React ,{Component} from 'react';

/*
Primero generemos un array al crear el componente
luego usaremos ese array para ir imprimiendo los numero uno a uno
----
para el caso de reiniciar la loteria, se podria simplemente limpiar todo
y que dispare alguna accion para generar otro array.

*/

class Rifa extends Component{
    constructor(props){
        super(props);

        this.state={
            loteria: [],
            i: 0,
            resultados: []
        }

        this.handleButton = this.handleButton.bind(this)
        this.generarIndexe = this.generarIndexe.bind(this)
    }

    handleButton(){
        const n = 10;
        const arr = new Array(n);
        for (let i = 0; i < n; i++) {
            arr[i] = i + 1;
        }

        //Aqui ordeno el array
        arr.sort(() => Math.random() > 0.5 ? 1 : -1);
        const rifa = arr.slice(0, 10);
        //Imprimo en consola para verificar
        this.setState({
            loteria: rifa,
            i: 0,
            resultados: []
        })
    }

    componentDidMount(){
        const n = 10;
        const arr = new Array(n);
        for (let i = 0; i < n; i++) {
            arr[i] = i + 1;
        }

        //Aqui ordeno el array
        arr.sort(() => Math.random() > 0.5 ? 1 : -1);
        const rifa = arr.slice(0, 10);
        //Imprimo en consola para verificar
        this.setState({
            loteria: rifa,
            i: 0
        })
    }

    generarIndexe(){
        this.setState({
            i: this.state.i + 1,
            resultados: [...this.state.resultados,this.state.loteria[this.state.i]]
        })
        if(this.state.i === 11){
            this.setState({
                i: 11  
            })
        }
    }
    
    render(){
        return(
            <div> 
                <h1>{ this.state.i === 10 ? `El Numero ganador es ${this.state.loteria[9]}` : " "}</h1>
                <h1>{ this.state.i === 11 ? "Gracias por Jugar. Reinicie el Baloto": " "}</h1>
                <h1>{this.state.loteria[this.state.i]}</h1>
                <button onClick={this.generarIndexe} className="btn waves-effect waves-light">Siguiente numero</button>
                <button onClick={this.handleButton} className="btn waves-effect waves-light">Reiniciar</button>
                <h4>Los numeros jugados son :</h4>
                <h4>-{this.state.resultados}-</h4>
            </div>
        )
    }
}


export default Rifa;