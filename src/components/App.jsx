import React, { Component } from "react";
import Searchbar from './Searchbar';
import ImageGallary from './ImageGallery'



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
    <ImageGallary images={this.state.formValue}  />
    </div>
  );
}

 
};
