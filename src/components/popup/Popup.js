import React from "react";
import CommentArea from "../commentArea/CommentArea";
import LikeHeart from "../likeHeart/LikeHeart";
import "./popup.scss";

const Popup = ({ selectImg, setSelectImg, setGallery, gallery }) => {

  const activeClass = selectImg ? "active" : null;

  return (
    <div className={`popup ${activeClass}`} onClick={() => setSelectImg(null)}>
      <div
        className={`popup__content ${activeClass}`}
        onClick={(e) => e.stopPropagation()}
      >
        <div className={`popup__image-wrapper`}>
          <img className="popup__image" src={selectImg?.url} alt="" />
        </div>
        <div className="popup__interactive">
          <LikeHeart selectImg={selectImg} setSelectImg={setSelectImg}/>
          <CommentArea selectImg={selectImg} setSelectImg={setSelectImg}/>
        </div>
      </div>
    </div>
  );
};

export default Popup;
