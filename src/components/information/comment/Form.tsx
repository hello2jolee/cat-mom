import React from 'react';
import { MyComment } from '../Comment';

interface FormProps {
  newCommentText: string;
  setNewCommentText: React.Dispatch<React.SetStateAction<string>>;
  insertNewComment: (newComment: MyComment) => void;
}

let itemKey = 0;

function Form({ newCommentText, setNewCommentText, insertNewComment }: FormProps) {
  const handleChangeFormInput = (e) => {
    setNewCommentText(e.target.value);
  };

  const handleCreate = () => {
    const newComment: MyComment = {
      key: itemKey++,
      text: newCommentText,
    };
    insertNewComment(newComment);
    setNewCommentText('');
  };

  return (
    <div>
      <input
        value={newCommentText}
        onChange={handleChangeFormInput}
        placeholder="날짜, 배식 담당자 순으로 입력해주세요"
        onKeyPress={(e) => {
          e.key === 'Enter' && handleCreate();
        }}
      />
      <button type="button" onClick={handleCreate}>등록</button>
    </div>
  );
}

export default Form;
