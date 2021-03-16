import React from "react";
import { observer } from "mobx-react-lite";

import Information from "../components/information/index";

const InformationPage = observer(() => {
  let myData = [];

  const requestURL =
    "https://raw.githubusercontent.com/hello2jolee/cat-mom/feature/3-information_page/src/data.json";
  const request = new XMLHttpRequest();
  request.open("GET", requestURL);

  request.responseType = "json";
  request.send();

  request.onload = async () => {
    const tempData = await request.response;
    await onLoad(tempData);
  };

  const onLoad = async (tempData) => {
    myData = await tempData;
  };

  return <Information {...myData} />;
});

export default InformationPage;
