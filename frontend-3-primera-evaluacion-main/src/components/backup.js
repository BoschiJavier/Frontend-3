
/*import React, { Component } from "react";
import data from "./data.json"

//props para las historia? y el cliclo de vida al ultimo o ver ocmo hace feli



    class Historia extends Component {
        //Este es el constructor base y el estado inicial
        constructor(props) {
          super(props);
          this.state = {
        contador: 1,
        id: 0,
       // historia: "1",
       parrafo: data[0].historia,
        opciones: ""
    };
       
}



//No guiarme por contador si no por id? y despues armar la de feli tipo por contador o quizá solo entenderlo
    
handleClick = (e) => {
        const tipo = e.target.id;
        this.setState({ contador: this.state.contador + 1});

        this.setState({ id: this.state.contador+1+tipo});
        this.setState({ historia: e.target.value });
        //push 
        { console.log((data[0])) }
        { console.log((data[2]["historia"])) }

        function myFunction(item) {
            return item.id == e.target.value
        }
          // this.setState({ id: data.filter(myFunction)[0].id })

       //this.setState({id: e.target.value})
        this.setState({ parrafo: data.filter(myFunction)[0].historia })
        this.setState({opciones:data.filter(myFunction)[0].opciones})

        { console.log((data.filter(myFunction)[0].historia)) }
        

    }


    render() {
        return (
            <>
                 

               <h3 class="historia">{this.state.parrafo}{this.state.contador}  </h3>
               
                <Botones
                handleClick={this.handleClick}
                opcionA={data[this.state.contador].opciones.a}
                opcionB={data[this.state.contador].opciones.b}
                valorA=
                valorB=
                />
                <button class="botones" id="a" onClick={this.handleClick} value={this.state.contador + 1 + "a"} >Opcion A Contador {this.state.contador}
                    id:
                    {this.state.id}
                    <h2>{this.state.opciones.a}</h2>
                </button>
                <button class="botones" id="b" onClick={this.handleClick} value={this.state.contador + 1 + "b"} >Opcion B Contador {this.state.contador}
                    id:
                    {this.state.id}
                    <h2>{this.state.opciones.b}</h2>
                </button>
            </>
        );
    }
}

export default Historia;*/
