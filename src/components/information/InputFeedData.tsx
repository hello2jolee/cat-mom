import { observer } from "mobx-react-lite";
import { useState } from "react";

import "./InputFeedData.css";

const InputFeedData = observer(() => {
  // TODO : Search how to Read Image Data
  // https://vadimfedorov.ru/en/lab/react-image-parser/
  return (
    <div className="article">
      <div>
        <h2 className="title">배식여부 입력</h2>
        <button type="button">펼침</button>
      </div>
      <div>
        <form>
          <div>
            <label htmlFor="feedTime">날짜</label>
            <input id="feedTime" type="datetime-local" />
          </div>
          <div>
            <label htmlFor="feedPerson">먹이는 준 사람</label>
            <select id="feedPerson">
              <option></option>
            </select>
          </div>
          <div>
            <label htmlFor="feedImage">인증 사진</label>
            <input id="feedImage" type="file" />
          </div>
          <div>
            <label htmlFor="feedEct">특이 사항</label>
            <textarea
              id="feedEct"
              placeholder="특이 사항이 있으면 입력해주세요"
            />
          </div>
          <div>
            <button type="submit">등록</button>
            <button type="reset">취소</button>
          </div>
        </form>
      </div>
    </div>
  );
});

export default InputFeedData;
