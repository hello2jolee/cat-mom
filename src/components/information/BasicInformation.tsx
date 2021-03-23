import React, { useState } from "react";
import { observer } from "mobx-react-lite";

import "./BasicInformation.css";

interface Props {
  catData: CatData;
}

export interface CatData {
  qrcode: number;
  catData: [];
  manager: [];
  status: [];
}

const BasicInformation = ({ catData: data }: Props) => {
  const [catData, setCatData] = useState(data);

  console.log(data.status)

  return (
    <>
      <h2>기본 정보</h2>
      <dl>
        <dt>고양이 이름</dt>
        <dd></dd>
      </dl>
    </>
  );
}

export default BasicInformation;
