import React from "react";
import  "./styles.css"

   const ImageGallaryItem =({value}) =>  {
       
    return( <div>
        {value.map((item)=> {return(
            <li className="ImageGalleryItem" key={item.id} >
                <img src={item.webformatURL} alt="" className="ImageGalleryItem-image"/>
              </li>
        )})}                
            
                 </div>)
          
      
         
        }
  
export default ImageGallaryItem;