import React , { Component } from 'react'

import './ActionBox.css' 

class ActionBox extends Component{
    constructor(props){
        super(props)
    }

    render(){
        return(
            <div className="action-box">
                <h1>Eat Food</h1>
                <img className = "x-icon" src="https://img.icons8.com/metro/26/000000/x.png"/>
                <div className="content">
                    <h3>you should prepare rice then eat it while watching big bang theory</h3>
                </div>
            </div>
        )
    }

} 

export default ActionBox ;