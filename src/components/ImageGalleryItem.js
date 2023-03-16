import React from "react";
import  "./styles.css"

   const ImageGallaryItem =({value}) =>  {
       
    return( <div>
        {value.map((item)=> {return(
             <li className="ImageGalleryItem" key={item.id} ><a href={item.largeImageURL}>
                <img src={item.webformatURL} alt="" className="ImageGalleryItem-image"/></a>
              </li>
        )})}                
            
                 </div>)
          
        }
  
export default ImageGallaryItem;

