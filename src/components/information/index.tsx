import React from "react";
import { observer } from "mobx-react-lite";

import ImageCarousel from "./ImageCarousel";
import BasicInformation from "./BasicInformation";
import Comment from "./Comment";

const Information = observer((data) => {
  const myDataList = data[0];
  // const myCommentList = data[0].comments;
  console.log(myDataList)
  return (
    <>
      <ImageCarousel />
      <BasicInformation {...myDataList} />
      <Comment {...myDataList} />
    </>
  );
});

export default Information;
