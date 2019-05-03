import React , { Component } from 'react' 
import './TopBar.css'

class TopBar extends Component{
    constructor(props){
        super(props) 

    }

    render(){
        return(
            <div className = "top-bar">
                <img className = "icon" src="https://img.icons8.com/ios/50/000000/menu-filled.png" onClick = {e => {
                    this.props.data.menuDisplay("block") 
                }} />
                <input className = "input" type="text"/>
            </div>
        )
    }
}

export default TopBar ;