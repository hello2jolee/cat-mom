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
    <section className="article">
      <h2 className="title">배식여부 입력</h2>
      <Form
        newCommentText={newCommentText}
        setNewCommentText={setNewCommentText}
        insertNewComment={insertNewComment}
      />
      <Items comments={comments} removeComment={removeComment} />
    </section>
  );
});

export default Comment;
