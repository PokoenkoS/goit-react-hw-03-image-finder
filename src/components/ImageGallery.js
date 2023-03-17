import React from "react";
import ImageGallaryItem from "./ImageGalleryItem";
import  "./styles.css"

const ImageGallary = ({images})=>{
 
    return(
        <ul className="ImageGallery">
            {images.map(item => <ImageGallaryItem key = {item.id} item={item}/>)}
  
 
</ul>
    )
    
}

export default ImageGallary;