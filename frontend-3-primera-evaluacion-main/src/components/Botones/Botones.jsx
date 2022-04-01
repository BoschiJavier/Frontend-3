import React, {Component} from 'react';

export default class Botones extends Component{
    render(){
        const {opcionA, opcionB, handleClick, valorA, valorB} = this.props;
        return(
            <div className='opciones'>
            <div className='opcion'>
                <button id='A' className='botones'  onClick={handleClick} value={valorA}>A</button>
                <h2>{opcionA}</h2>
            </div> 
            <div className='opcion'>
                <button id='B' className='botones'  onClick={handleClick} value={valorB}>B</button>
                <h2>{opcionB}</h2>
            </div>

            </div>
        )
    }
}