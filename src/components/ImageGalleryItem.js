import React from "react";
import  "./styles.css"

   const ImageGallaryItem =(images) =>  {
         
    return( <div>
                <li className="Gallery-item" >
                <img src={images.webformatURL} alt="" />
              </li>
            
                 </div>)
          
      
         
        }
  
export default ImageGallaryItem;