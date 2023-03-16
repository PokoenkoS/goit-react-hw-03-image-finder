import React from "react";
import ImageGallaryItem from "./ImageGalleryItem";
import  "./styles.css"

const ImageGallary = ({images})=>{
    return(
        <ul className="Gallery">
  <ImageGallaryItem value={images}/>
</ul>
    )
}

export default ImageGallary;