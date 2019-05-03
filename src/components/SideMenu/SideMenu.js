import React , { Component } from 'react'

import './SideMenu.css'

class SideMenu extends Component{
    constructor(props){
        super(props) 

    }
    
    render(){
        return(
            <div className = "side-menu" style = {{display : this.props.data.display}}>
                <div className = "menu">
                    <img className = "icon" src="https://img.icons8.com/ios/50/000000/menu-filled.png" onClick = {e => {
                        this.props.data.menuDisplay("none")
                    }}/>
                    <h1 className = "title">
                        Settings
                    </h1>
                </div>
            </div>
        )
    }
}

export default SideMenu ;