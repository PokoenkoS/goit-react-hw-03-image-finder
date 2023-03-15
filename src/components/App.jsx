import React, { Component } from "react";
import Searchbar from './Searchbar';


export class App extends Component {
  state ={
    formValue : '',
  }
  formSubmitHendler =data=> {
    this.setState( ({
      formValue: data.value,
    }))
  }
render () {
  return (
    <div>
    <Searchbar onSubmit={this.formSubmitHendler} />
    </div>
  );
}

 
};
