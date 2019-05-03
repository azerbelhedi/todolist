import React , { Component } from 'react'

import './ActionBox.css' 

class ActionBox extends Component{
    constructor(props){
        super(props)
    }

    deleteAction(){
        this.props.data.removeTodo(this.props.data.action.index) ;
        this.props.data.correct() ;
    }

    render(){
        return(
            <div className="action-box">
                <h1>{this.props.data.action.name}</h1>
                <img onClick = {() => {this.deleteAction()}} className = "x-icon" src="https://img.icons8.com/metro/26/000000/x.png"/>
                <div className="content">
                    <h3>{this.props.data.action.details}</h3>
                </div>
            </div>
        )
    }

} 

export default ActionBox ;