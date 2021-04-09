import React, { useCallback, useEffect, useState } from "react";
import { observer } from "mobx-react-lite";

// import firebase from 'firebase'
import firebase, { dbService } from "../../firebase";

import "./BasicInformation.css";
import { defineBoundAction } from "mobx/lib/internal";

const COLLECTION = "informations";

// https://www.youtube.com/watch?v=yyo_TcZCrS4

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

  const [catData, setCatData] = useState([] as any);

  const getDatas = async () => {
    const datas = await dbService.collection(COLLECTION).get();
    datas.forEach((document) => {
      const catDataObject = {
        ...document.data(),
        id: document.id,
      };
      setCatData((prev) => [catDataObject, ...prev]);
    });
  };

  useEffect(() => {
    getDatas();
  }, []);

  console.log(catData);

  return (
    <section>
      <h2>기본 정보</h2>
      {catData.map((data, index) => (
        <dl className="information-list" key={index}>
          <div className="item">
            <dt>이름</dt>
            <dd>{data.catData.name}</dd>
          </div>
          <div className="item">
            <dt>성별</dt>
            <dd>{data.catData.gender === "F" ? "암컷" : "수컷"}</dd>
          </div>
          <div className="item">
            <dt>중성화 여부</dt>
            <dd>
              {data.catData.neutralization === true
                ? "중성화 완료"
                : "중성화 미완료"}
            </dd>
          </div>
          <div className="item">
            <dt>고양이 밥그릇 위치</dt>
            <dd>
              lon {data.location.lon} / lat {data.location.lat}
            </dd>
          </div>
          <div className="item">
            <dt>담당자 명단</dt>
            {data.managers.map((m) => (
              <dd>
                {m.id} / {m.rep === true ? "대표!!" : ""}
              </dd>
            ))}
          </div>
        </dl>
      ))}
    </section>
  );
};

export default BasicInformation;
