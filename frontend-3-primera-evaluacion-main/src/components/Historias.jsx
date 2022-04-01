import React, { Component } from "react";

export default class Historias extends Component {
    
    render(){
        const {historia1}=this.props;
        return(
            
    <>
    <h1 className="historia" alt="historias">
            {historia1}
    </h1>
    </>
    
    
        )
    }
    
    }