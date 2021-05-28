import React from "react";
import "./likeHeart.scss";

const LikeHeart = ({ selectImg, setSelectImg }) => {
  const isLike = selectImg?.isLike;
  const handleClick = () => {
    setSelectImg({ ...selectImg, isLike: !isLike });
  };

  return (
    <div
      className={`like-heart${isLike ? " like-heart_active" : ""}`}
      onClick={handleClick}
    >
      <svg className="like-heart__st0" version="1.1" viewBox="0 0 48 48">
        <path
          className="like-heart__st1"
          d="M12.27063,25.74658l11.30768,11.30769c0.23524,0.23524,0.61667,0.23517,0.85183-0.00016l11.29923-11.30753 l0.83566-0.82704c1.61101-1.61101,2.41221-3.74754,2.41221-5.86684c0-2.12791-0.8012-4.25583-2.41221-5.86684 c-3.22202-3.22202-8.50304-3.22202-11.73368,0l-0.82704,0.83566l-0.83566-0.83566c-3.22202-3.22202-8.50304-3.22202-11.72506,0    c-1.61963,1.61101-2.42082,3.73892-2.42082,5.86684c0,2.1193,0.8012,4.25583,2.42082,5.86684L12.27063,25.74658l11.30768,11.30769    c0.23524,0.23524,0.61667,0.23517,0.85183-0.00016l11.29923-11.30753"
        />
        <path
          className="like-heart__st1"
          d="M11.45598,19.85644c0,0.43682,0.04064,0.8745,0.12213,1.30629"
        />
        <path
          className="like-heart__st1"
          d="M17.06505,13.0453c-1.3151,0.25299-2.56957,0.88547-3.58154,1.89743 c-0.74809,0.74411-1.2877,1.61988-1.62126,2.55471"
        />
      </svg>
    </div>
  );
};

export default LikeHeart;
