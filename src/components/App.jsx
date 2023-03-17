import React, { Component } from "react";
import Searchbar from './Searchbar';
import ImageGallary from './ImageGallery';
import imagesApi from './ImageApi'
import Button from "./Button";
import  Audio  from "./Loader";
// import Modal from "./Modal";

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
const {formValue, page} = this.state;
if(prevState.formValue!==formValue || prevState.page!== page){
  this.setState({ status: Status.PENDING });
  imagesApi
  .fetchImages(formValue,page)
  .then(r=>this.setState({image:r.hits, status: Status.RESOLVED}))
  .catch(error => this.setState({ error, status: Status.REJECTED  }))
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
    {this.state.status === 'pending'&&
      (<Audio/>)
    }
    <ImageGallary images={this.state.image} onImg={this.imageHendler} />
    {this.state.image.length > 0 &&
      (<Button/>)
    }
   
   
    </div>
  );
}

 
};
