import React, { useState, useEffect } from "react";
import { observer } from "mobx-react-lite";

import Information from "../components/information/index";

const InformationPage = observer(() => {
  // https://www.pluralsight.com/guides/fetch-data-from-a-json-file-in-a-react-app
  const [data, setData] = useState([]);
  const getData = () => {
    fetch("data.json", {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    })
      .then(function (response) {
        console.log(response);
        return response.json();
      })
      .then(function (myJson) {
        console.log(myJson);
        setData(myJson);
      });
  };

  useEffect(() => {
    getData();
  }, []);

  return <Information {...data} />;
});

export default InformationPage;
