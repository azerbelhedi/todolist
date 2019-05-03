import React , { Component } from "react" 

import TopBar from '../TopBar/TopBar' 
import SideMenu from '../SideMenu/SideMenu' 
import ActionList from '../ActionsList/ActionList' 


class App extends Component{

    constructor(props){
        super(props)  ;
        this.state = {
            displayMenu : "none" ,
            todo : [
            ]
        }

        this.addTodo = this.addTodo.bind(this) 
        this.addDoing = this.addDoing.bind(this) 
        this.addDone = this.addDone.bind(this) 

        this.removeTodo = this.removeTodo.bind(this)
        this.removeDoing = this.removeDoing.bind(this) 
        this.removeDone = this.removeDone.bind(this) 

        this.menuDisplay = this.menuDisplay.bind(this) 
        this.correct = this.correct.bind(this)
    }

    addTodo(data){
        let state = this.state 
        state.todo.push(data) 
        this.setState(state) 
    }
    
    addDoing(data){
        let state = this.state 
        state.doing.push(data) 
        this.setState(state)
    }
    
    addDone(data){
        let state = this.state 
        state.done.push(data) 
        this.setState(state)
    }

    removeTodo(index){
        let state = this.state 
        state.todo.splice(index , 1 ) 
        this.setState(state) ;
    }

    removeDoing(index){
        let state = this.state 
        state.doing.splice(index , 1 ) 
        this.setState(state) ;
    }

    removeDone(index){
        let state = this.state 
        state.done.splice(index , 1 ) 
        this.setState(state) ;
    }

    menuDisplay(display){
        let state = this.state ;
        state.displayMenu = display ;
        this.setState(state) ;
    }

    correct(){
        let i = 0 ;
        let state = this.state ;
        state.todo.map(action => {
            action.index = i ;
            i++ ;
        }) ;
        this.setState(state) ;
    }

    render(){
        console.log(this.state) 
        return(
            <div>
                <TopBar data = {{menuDisplay : this.menuDisplay}}/>
                <SideMenu data = {{display : this.state.displayMenu , menuDisplay : this.menuDisplay}}/>
                <ActionList data = {{
                    addTodo : this.addTodo , 
                    actions : this.state.todo , 
                    removeTodo : this.removeTodo ,
                    correct : this.correct
                    }} />
            </div>
        )
    }

}

export default App ;