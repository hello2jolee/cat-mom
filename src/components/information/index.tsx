import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { observer } from "mobx-react-lite";

import { dbService } from "../../firebase";

import Header from "../commons/Header";
import BasicInformation from "./BasicInformation";
import Comment from "./Comment";
import FeedStatus from "./FeedStatus";
import InputFeedData from "./InputFeedData";
import useFetch from "../../hooks/useFetch";

const COLLECTION = "informations";

const Information = observer(() => {

  // const catData = [
  //   {
  //     qrcode: 123456789,
  //     catData: [
  //       {
  //         name: "노랑이",
  //         gender: "F",
  //         neutralization: false,
  //         img:
  //           "https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyMTAyMDJfMTE0%2FMDAxNjEyMjQ1NzE4NjYz.beqnjrgxx3X25yp_6-D8EvTZKiOEkZu9MIp8U0fZvXcg.5zGqUKqY3M1JGIEGiMlFahWqF76Th1LFWf4_Cqe6Ew8g.JPEG.lemaco%2F2009053020091020-04.jpg&type=sc960_832",
  //       },
  //     ],
  //     manager: [
  //       {
  //         id: "치즈맘",
  //         rep: true,
  //       },
  //       {
  //         id: "잠실토박이",
  //         rep: false,
  //       },
  //       {
  //         id: "잠실주민",
  //         rep: false,
  //       },
  //     ],
  //     status: [
  //       {
  //         date: "2021-03-01 10:23:00",
  //         manager: "치즈맘",
  //         img:
  //           "https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyMTAyMDJfMTE0%2FMDAxNjEyMjQ1NzE4NjYz.beqnjrgxx3X25yp_6-D8EvTZKiOEkZu9MIp8U0fZvXcg.5zGqUKqY3M1JGIEGiMlFahWqF76Th1LFWf4_Cqe6Ew8g.JPEG.lemaco%2F2009053020091020-04.jpg&type=sc960_832",
  //       },
  //       {
  //         date: "2021-03-02 11:40:23",
  //         manager: "치즈맘",
  //         img: "",
  //       },
  //       {
  //         date: "2021-03-03 10:30:00",
  //         manager: "잠실토박이",
  //         img:
  //           "https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyMTAyMDJfMTE0%2FMDAxNjEyMjQ1NzE4NjYz.beqnjrgxx3X25yp_6-D8EvTZKiOEkZu9MIp8U0fZvXcg.5zGqUKqY3M1JGIEGiMlFahWqF76Th1LFWf4_Cqe6Ew8g.JPEG.lemaco%2F2009053020091020-04.jpg&type=sc960_832",
  //       },
  //     ],
  //   },
  // ];
  return (
    <>
      <Header />
      <BasicInformation />
      {/* <FeedStatus catData={catData} /> */}
      <InputFeedData />
    </>
  );
});

export default Information;
