import React, { Component } from "react";
import Searchbar from './Searchbar';
import ImageGallary from './ImageGallery';
import imagesApi from './ImageApi'

const Status = {
  
  IDLE: 'idle',
  PENDING: 'pending',
  RESOLVED: 'resolved',
  REJECTED: 'rejected',
};

export class App extends Component {
  state ={
    formValue : '',
    image: [],
    error: null,
    status: Status.IDLE,
    page:1,
    
  }

  componentDidUpdate(prevProps, prevState) {
const {formValue, page, image} = this.state;
if(prevState.formValue!==formValue || prevState.page!== page){
  imagesApi
  .fetchImages(formValue)
  .then(r=>this.setState({image:r.hits, status: Status.RESOLVED}))
  .catch(error => this.setState({ error }))
}
    
}

  formSubmitHendler =data=> {
    this.setState( ({
      formValue: data.value,
    }))
  }
render () {
  return (
    <div >
    <Searchbar onSubmit={this.formSubmitHendler} />
    <ImageGallary images={this.state.image}  />
    
    </div>
  );
}

 
};
