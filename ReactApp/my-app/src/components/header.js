import React, { Component } from 'react';
import '../css/styles.css'

class Header extends Component {
    constructor(props){
    super(props)

    this.state = {
        keywords:''
    }
}

    inputChangeHandler = (event) => {
        this.setState({
            keywords: event.target.value
        });
    }

render(){
        return (
            <header>
                <div className="logo">News</div>
                <input type="text" onChange={this.inputChangeHandler}></input>
            </header>
        )
    }   
}

export default Header;