import React from "react";

import "./FeedStatus.css";

const FeedStatus = ({ catData: data }) => {
  const feedList = data[0].status;
  console.log(feedList);
  return (
    <section className="article">
      <h2 className="title">최근 7일 배식 여부</h2>
      <ul className="feed-list">
        {feedList.map((data, index) => 
          <li key={index}>
            <img src={data.img} alt="" width={50} />
            <span>{data.date}</span>
            <span>배식 담당자 : {data.manager}</span>
          </li>
      )}
      </ul>
    </section>
  );
};

export default FeedStatus;
