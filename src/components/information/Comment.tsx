import React from "react";
import { observer } from "mobx-react-lite";

import "./BasicInformation.css";

const Comment = observer((myDataList) => {
  const listData = myDataList["comments"];
  console.log(listData);
  return (
    <div>
      <div>
        <input type="text" />
        <button type="submit">등록</button>
      </div>
      <ul>
        {/* <li>테스트</li>
        <li>테스트</li> */}
        {/* {listData.map((data, index) => {
          `<li value=${index}>
            <img src=${data.img} width={20} height={20} />
            <p>${data.text}</p>
          </li>`;
        })} */}
      </ul>
    </div>
  );
});

export default Comment;
