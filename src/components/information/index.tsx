import React from "react";
import { observer } from "mobx-react-lite";

import ImageCarousel from "./ImageCarousel";
import BasicInformation from "./BasicInformation";
import Comment from "./Comment";

const Information = observer((data) => {
  return (
    <>
      <ImageCarousel />
      <BasicInformation />
      <Comment />
    </>
  );
});

export default Information;
