import React from "react";
import { Component } from "react";
import {FaUnlock} from 'react-icons/fa';
import  "./styles.css"



class Searchbar extends Component{
    state = {
     value: "",
    
    }
handleChange = e => {
   
    this.setState({value: e.currentTarget.value})
   
}

handleSubmit = e => {
    e.preventDefault();
    if(this.state.value.trim() ===""){
        return alert('Введите название картинки')
    }
    this.props.onSubmit(this.state);
    this.setState({value: ""})
  
}

    render(){
        return (
<header className="Searchbar">
  <form onSubmit={this.handleSubmit} className="SearchForm">
    <button type="submit" className="SearchForm-button">
      <span className="SearchForm-button-label "><FaUnlock/>Search</span>
    </button>

    <input
      className="SearchForm-input "
      type="text"
      autoComplete="off"
      autoFocus
      placeholder="Search images and photos"
      onChange={this.handleChange}
    />
  </form>
</header>
        )
    }
}

export default Searchbar