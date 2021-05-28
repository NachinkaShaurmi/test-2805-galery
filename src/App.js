import React, { useState } from "react";
import { galleryImages } from "./gallery-images";
import ImgGridArea from "./components/imgGridArea/ImgGridArea";
import Popup from "./components/popup/Popup";
import "./app.scss";

function App() {
  const [gallery, setGallery] = useState(galleryImages);
  const [selectImg, setSelectImg] = useState(null);

  return (
    <div className="App">
      <ImgGridArea gallery={gallery} setSelectImg={setSelectImg} />
      <Popup selectImg={selectImg} setSelectImg={setSelectImg} setGallery={setGallery} gallery={gallery}/>
    </div>
  );
}

export default App;
