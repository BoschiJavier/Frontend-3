import React, { Component } from "react";
import Botones from "../Botones/Botones";
import data from "../data.json"
import Historias from "../Historia/Historias";
import Historial from "../Historial/Historial";



const historial = [];

class Diseño extends Component {
    constructor(props) {
        super(props);
        this.state = {
            contador: 1,
            historia: data[0].historia,
            opciones: data[0].opciones,
            seleccionAnterior:""

        };

    }

    componentDidUpdate(estadoPrevio) {
        if (estadoPrevio.contador !== this.state.contador) {
          historial.push(this.state.seleccionAnterior);
        }
      }


    handleClick = (e) => {
        //const id = e.target.id;
        const contador = this.state.contador; //??
        console.log(contador);
       // const anterior = this.state.seleccionAnterior;
        if (contador >= 5) {
            alert("FIN.");
        } else {
            this.setState({ contador: this.state.contador + 1 });
            this.setState({seleccionAnterior: e.target.id})
          
            { console.log((data[0])) }
            { console.log((data[2]["historia"])) }

            function myFunction(item) { 
                
                return item.id == e.target.value
            }
            // this.setState({ id: data.filter(myFunction)[0].id })

            //this.setState({id: e.target.value})
            this.setState({ historia: data.filter(myFunction)[0].historia })
            this.setState({ opciones: data.filter(myFunction)[0].opciones })

            { console.log((data.filter(myFunction)[0].historia)) }
            { console.log(e.target.value) }
        }
    }


    render() {
        return (
            <>


                <Historias
                    historia1={this.state.historia}
                />

                <Botones
                    handleClick={this.handleClick}
                    opcionA={this.state.opciones.a}
                    opcionB={this.state.opciones.b}
                    valorA={this.state.contador + 1 + "a"}
                    valorB={this.state.contador + 1 + "b"}
                />
                 <Historial
          seleccionAnterior={this.state.seleccionAnterior}
          historial={historial.map(
            (historial, i) => (
              <li key={i}>{historial}</li>
            ),
             )}
        />
            </>
        );
    }
}

export default Diseño;


