import React, {Component} from "react";
import  "./styles.css"
import imagesApi from './ImageApi'

const Status = {
  
    IDLE: 'idle',
    PENDING: 'pending',
    RESOLVED: 'resolved',
    REJECTED: 'rejected',
  };

  export class ImageGallaryItem extends Component {

state ={
    image: null,
    error: null,
    status: Status.IDLE,
}

componentDidUpdate(prevProps, prevState) {
    const prevValue = prevProps.value;
    const nextValue = this.props.value;

    console.log(`prev`,prevValue);
    console.log(`next`,nextValue);
    if (prevValue !== nextValue) {
      this.setState({ status: Status.PENDING });
   
    }
    imagesApi
        .fetchImages(nextValue)
        .then(r =>this.setState({image:r, status: Status.RESOLVED}))
        .catch(error => this.setState({ error, status: Status.REJECTED }))
        console.log(this.setState);
}
render() {
    const { image, error, status } = this.state;
    
       

        if (status === 'idle') {
            return <div>Введите имя картинки.</div>;
          }
      
          if (status === 'pending') {
           <div>
            {/* {image.map((item)=>{ return (<li className="Gallery-item" key ={item.id}>
            <img src={item.webformatURL} alt="" />
          </li>
          )})}  */}
             </div>}
      
         
        }
    }
    
    

   


export default ImageGallaryItem;