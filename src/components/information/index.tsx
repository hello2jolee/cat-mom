import { useParams } from "react-router-dom";
import { observer } from "mobx-react-lite";

import BasicInformation, { CatData } from "./BasicInformation";
import Comment from "./Comment";
import FeedStatus from "./FeedStatus";
import useFetch from "../../hooks/useFetch";

const Information = observer(() => {
  const { qrcode } = useParams<{ qrcode: string }>();
  const catData: CatData[] = useFetch(
    `http://localhost:3001/userInfo?qrcode=${qrcode}`
  );
  return (
    <>
      <BasicInformation catData={catData[0]} />
      <FeedStatus />
      <Comment />
    </>
  );
});

export default Information;
