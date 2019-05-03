import React , { Component } from 'react' 

import './ActionList.css'   
import ActionBox from '../ActionsBox/ActionBox'

class ActionList extends Component{
    constructor(props){
        super(props) 
    }

    render(){
        return(
            <div className = "action-list">
                <div className = "head">
                    <h1>To Do List</h1>
                </div>
                <div className="add-item">
                    <input type="text" placeholder = "Action Name " />
                    <textarea placeholder = "details" name="" id="" cols="30" rows="5"></textarea>
                    <button>Add To List</button>
                </div>
                <div className="content">
                    <ActionBox/>
                    <ActionBox/>
                    <ActionBox/>
                </div>
            </div>
        )
    }
}

export default ActionList ;