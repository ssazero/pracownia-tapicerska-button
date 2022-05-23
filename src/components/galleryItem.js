import React from "react"

const GalleryItem = props => (
  <div className="gallery__item">
    <a href={props.src} data-attribute="SRL">
      <img className="gallery__item-image" src={props.thumbnail} alt={props.caption} />
    </a>
  </div>
)

export default GalleryItem
