import React from "react";
import { observer } from "mobx-react-lite";

import "./BasicInformation.css";

const Comment = observer(({}) => {
  return (
    <div>
      <div>
        <input type="text" />
        <button type="submit">등록</button>
      </div>
      <ul>
        <li>테스트</li>
        <li>테스트</li>
      </ul>
    </div>
  );
});

export default Comment;
