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
    image: null,
    error: null,
    status: Status.IDLE,
    
  }

  componentDidUpdate(prevProps, prevState) {
    const prevValue = prevProps.formValue;
    const nextValue = this.props.formValue;
   
    console.log(`Попередній`,prevValue);
    console.log(`Наступний`,nextValue);
    if (prevValue !== nextValue ) {
      this.setState({ status: Status.PENDING });
   console.log(`ok`);
    }
    imagesApi
        .fetchImages(nextValue)
        .then(r=>this.setState({image: r.hits}))
        .catch(error => this.setState({ error }))
     
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
