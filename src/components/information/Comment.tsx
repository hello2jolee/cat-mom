import React, { useCallback, useEffect, useState } from "react";
import { observer } from "mobx-react-lite";

import Form from "./comment/Form";
import Items from "./comment/Items";

import "./BasicInformation.css";

export interface MyComment {
  key: number;
  text: string;
}

let itemKey = 0;

const Comment = observer(() => {
  // const listData = myDataList["comments"];
  // const listData = myDataList["comments"];
  // console.log(listData);

  const [newCommentText, setNewCommentText] = useState<string>("");
  const [comments, setComments] = useState<MyComment[]>([]);

  const insertNewComment = (newTodo: MyComment) => {
    setComments([...comments, newTodo]);
  };

  const removeComment = (key: number) => {
    const newTodos = comments.filter((comment) => comment.key !== key);
    setComments(newTodos);
  };

  return (
    <>
      <Form
        newCommentText={newCommentText}
        setNewCommentText={setNewCommentText}
        insertNewComment={insertNewComment}
      />
      <Items comments={comments} removeComment={removeComment} />
    </>
  );
});

export default Comment;
