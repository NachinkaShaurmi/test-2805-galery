import React, { useState } from "react";
import bg from "../../img/amc_loading.gif";
import "./imageEl.scss";

const ImageEl = ({ el, setSelectImg }) => {
  const [load, setLoad] = useState(false);
  return (
    <div className="image" onClick={() => setSelectImg(el)}>
      <img
        src={!load ? bg : el.url}
        className="image__source"
        alt=""
        onLoad={() => setLoad(true)}
      />
    </div>
  );
};

export default ImageEl;
