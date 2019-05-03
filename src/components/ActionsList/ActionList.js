import React , { Component } from 'react' 

import './ActionList.css'   
import ActionBox from '../ActionsBox/ActionBox'

class ActionList extends Component{
    constructor(props){
        super(props) 
        this.state = {
            name : "" ,
            details : "" ,
            index : 0
        }
    }

    handleNameChange(e){
        let state = this.state 
        state.name = e.target.value 
        this.setState(state)
    }

    handleDetailsChange(e){
        let state = this.state 
        state.details = e.target.value 
        this.setState(state)
    }

    render(){
        return(
            <div className = "action-list">
                <div className = "head">
                    <h1>To Do List</h1>
                </div>
                <div className="add-item">
                    <input type="text" placeholder = "Action Name " onChange = {e => {
                        this.handleNameChange(e)
                    }} />
                    <textarea placeholder = "details" name="" id="" cols="30" rows="5" onChange = {e => {
                        this.handleDetailsChange(e)    
                    }}></textarea>
                    <button onClick = {
                       () => { 
                           let index = this.props.data.actions.length ;
                           let state = this.state ;
                           state.index = index ;
                           this.setState(state) ;
                           this.props.data.addTodo(this.state)
                           }
                    } >Add To List</button>
                </div>
                <div className="content">
                    {this.props.data.actions.map(action => {
                        return (
                            <ActionBox data = {{
                                action : action , 
                                removeTodo : this.props.data.removeTodo , 
                                correct : this.props.data.correct
                            }}/>
                        )
                    })}
                </div>
            </div>
        )
    }
}

export default ActionList ;