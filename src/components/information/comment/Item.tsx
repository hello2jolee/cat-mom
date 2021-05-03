import React from "react";
import { MyComment } from "../Comment";

interface ItemProps {
  comment: MyComment;
  removeComment: (key: number) => void;
}

function Item({ comment, removeComment }: ItemProps) {
  return (
    <li>
      <p>{comment.text}</p>
      <button
        type="button"
        onClick={(e) => {
          e.stopPropagation();
          removeComment(comment.key);
        }}
      >
        &times;
      </button>
    </li>
  );
}

export default Item;
