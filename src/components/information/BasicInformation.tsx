import React from "react";
import { observer } from "mobx-react-lite";

import "./BasicInformation.css";

const BasicInformation = observer((myDataList) => {
  return (
    <div>
      <strong>기본 정보</strong>
      <dl>
        <dt>담당자</dt>
        <dd>{myDataList["id"]}</dd>
        <dt></dt>
      </dl>
      <strong>먹이 정보</strong>
    </div>
  );
});

export default BasicInformation;
