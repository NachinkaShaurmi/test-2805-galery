import React, { useState } from "react";
import "./commentArea.scss";

const CommentArea = ({ selectImg, setSelectImg }) => {
  const [comment, setComment] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    e.stopPropagation();
    if (!comment) return;
    setComment("");
  };

  return (
    <div className="comments-interactive">
      <form className="comments-interactive__form form" onSubmit={(e) => handleSubmit(e)}>
        <textarea
          className="form__textarea"
          value={comment}
          placeholder="Comment"
          onChange={(e) => setComment(e.target.value)}
        />
        <button className="form__button">Send</button>
      </form>
    </div>
  );
};

export default CommentArea;
