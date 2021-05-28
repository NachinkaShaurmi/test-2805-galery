import React from 'react'
import ImageEl from "../imageEl/ImageEl";
import "./imgGridArea.scss"

const ImgGridArea = ({gallery, setSelectImg}) => {

  const galleryView = gallery.map((el) => (
    <ImageEl el={el} key={el.url} setSelectImg={setSelectImg} />
  ));

  return (
    <div className="gallery-view">
      {galleryView}
    </div>
  )
}

export default ImgGridArea
