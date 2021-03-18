import React from "react";
import { MyComment } from "../Comment";
import Item from "./Item";

interface ItemsProps {
  comments: MyComment[];
  removeComment: (key: number) => void;
}

function Items({ comments, removeComment }: ItemsProps) {
  return (
    <ul>
      {comments.map((comment) => (
        <Item comment={comment} removeComment={removeComment} />
      ))}
    </ul>
  );
}

export default Items;
