import { observer } from "mobx-react-lite";
import { useState } from "react";

import IconCat from "../../assets/IconSvg/IconCat";
import IconSearch from "../../assets/IconSvg/IconSearch";
import "./Header.css";

// TODO: https://velog.io/@edie_ko/React-%EC%89%AC%EC%9A%B4-%ED%86%A0%EA%B8%80-%EB%A9%94%EB%89%B4-%EB%A7%8C%EB%93%A4%EA%B8%B0
const Header = observer(() => {
  const [fold, setFold] = useState({
    searchArea: true,
  });
  const [catName, setCatName] = useState("")

  const toggleSearchArea = () => {
    if(fold.searchArea) {
      setFold({searchArea: false})
    } else {
      setFold({searchArea: true})
    }
  }

  const onSearchCat = (e) => {
    e.preventDefault();
    
    const catData = {name: catName};
  }

  return (
    <div className="article-header">
      <div className="inner">
        <div className="left-items">
          <h1 className="home">
            <a href="http://localhost:3000/" className="link">
              <IconCat width={"30"} height={"30"} />
              <span className="blind">HOME</span>
            </a>
          </h1>
          <a href="http://localhost:3000/information" className="link">
            NEW CAT
          </a>
          <button type="button" className="button" onClick={toggleSearchArea}>
            SEARCH
          </button>
        </div>
        <div className="right-items">
          <a href="#" className="link">
            LOG IN
          </a>
        </div>
      </div>
      <div id="searchArea" className={"search-area " + (fold.searchArea ? "" : "on")}>
        <form className="inner">
          <label htmlFor="inputText">
            <IconSearch width={"20"} height={"20"} />
            <span className="blind">고양이 찾기</span>
          </label>
          <input
            type="text"
            id="inputText"
            className="input-text"
            placeholder="고양이 이름을 입력하세요"
            value={catName}
          />
          <button type="submit" className="search-button">
            찾기
          </button>
        </form>
      </div>
    </div>
  );
});

export default Header;
