import React from "react";
import { observer } from "mobx-react-lite";
import New from "../components/new/index";

const NewPage = observer(() => {
  return (
  <>
    <New />
  </>
  );
});

export default NewPage;
