import React, { useState } from "react";
import { observer } from "mobx-react-lite";

import "./BasicInformation.css";

// interface Props {
//   catData: CatData;
// }

// export interface CatData {
//   qrcode: number;
//   catData: [];
//   manager: [];
//   status: [];
// }

const BasicInformation = ({ catData: data }) => {
  const catInformation = data[0].catData[0];
  const managerList = data[0].manager;

  return (
    <section>
      <h2>기본 정보</h2>
      <dl className="information-list">
        <div className="item">
          <dt>이름</dt>
          <dd>{catInformation.name}</dd>
        </div>
        <div className="item">
          <dt>성별</dt>
          <dd>{catInformation.gender === "F" ? "암컷" : "수컷"}</dd>
        </div>
        <div className="item">
          <dt>중성화 여부</dt>
          <dd>
            {catInformation.neutralization === true
              ? "중성화 완료"
              : "중성화 미완료"}
          </dd>
        </div>
        <div className="item">
          <dt>대표 사진</dt>
          <dd>
            <img src={catInformation.img} alt="" width={100} />
          </dd>
        </div>
        <div className="item">
          <dt>담당자</dt>
          <dd>{managerList.filter((data) => data.rep)[0].id}</dd>
        </div>
      </dl>
    </section>
  );
};

export default BasicInformation;
