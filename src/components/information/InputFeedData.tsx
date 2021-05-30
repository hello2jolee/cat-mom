import { useEffect, useState } from "react";
import { observer } from "mobx-react-lite";

import firebase, { dbService, storage } from "../../firebase";

import IconArrow from "../../assets/IconSvg/IconArrow";
import "./InputFeedData.css";

const COLLECTION = "informations";
const FEEDDATA = "feeddatas";

const InputFeedData = () => {
  // TODO : Search how to Read Image Data
  // https://vadimfedorov.ru/en/lab/react-image-parser/

  const [fold, setFold] = useState({
    inputArea: true,
  });
  const [catData, setCatData] = useState([] as any);

  const toggleInputArea = () => {
    if (fold.inputArea) {
      setFold({ inputArea: false });
    } else {
      setFold({ inputArea: true });
    }
  };

  const arrowOpenStyle = { transform: "rotate(180deg)" };

  const getDatas = async () => {
    const datas = await dbService.collection(COLLECTION).get();
    datas.forEach((document) => {
      const catDataObject = {
        ...document.data(),
        id: document.id,
      };
      setCatData((prev) => [catDataObject, ...prev]);
    });
  };

  useEffect(() => {
    getDatas();
  }, []);


  // const catId = await catData[0].id;

  const [feedPerson, setFeedPerson] = useState("");
  const [ect, setEct] = useState("");
  const [catId, setCatId] = useState("");

  const onChangePerson = (e) => setFeedPerson(e.target.value);
  const onChangeEct = (e) => setEct(e.target.value);
  const getCatId = async () => {
    const cId = await catData[0].id;
    setCatId(cId);
  }

  // https://www.youtube.com/watch?v=8r1Pb6Ja90o
  const [image, setImage] = useState([] as any);
  const [url, setUrl] = useState("");

  const handleChange = (e) => {
    if (e.target.files[0]) {
      setImage(e.target.files[0]);
    }
  };

  // console.log(image);

  const handleUpload = (e) => {
    e.preventDefault();

    // upload photo
    const uploadTask = storage.ref(`images/${image.name}`).put(image);

    uploadTask.on(
      "stage_changed",
      (snapshot) => {
        // current progress of upload
      },
      (error) => {
        console.log(error);
      },
      () => {
        storage
          .ref("images")
          .child(image.name)
          .getDownloadURL()
          .then((url) => {
            setUrl(url);
          });
      }
    );

    // upload feed information
    const feedData = {
      feedTime: image.lastModifiedDate,
      imageUrl: url,
      feedPerson: feedPerson,
      ect: ect,
    };

    firebase
      .collection(FEEDDATA)
      .doc("qrcode_1")
      .set({
        feedData,
      })
      .then(() => {
        console.log("Document successfully written!");
      })
      .catch((error) => {
        console.error("Error writing document: ", error);
      });
  };

  return (
    <>
      {catData.map((data, index) => (
        <div className="article" key={index}>
          <div className="header-area">
            <h2 className="title">배식여부 입력하기</h2>
            <button
              type="button"
              className="show-button"
              onClick={toggleInputArea}
            >
              {fold.inputArea ? (
                <>
                  <IconArrow width={"10"} height={"10"} />
                  <span className="blind">펼침</span>
                </>
              ) : (
                <>
                  <IconArrow
                    width={"10"}
                    height={"10"}
                    style={arrowOpenStyle}
                  />
                  <span className="blind">닫힘</span>
                </>
              )}
            </button>
          </div>
          <div
            className="input-area"
            style={fold.inputArea ? { display: "none" } : {}}
          >
            <form>
              <div className="item">
                <label htmlFor="feedImage" className="label">
                  인증 사진
                </label>
                <input id="feedImage" type="file" onChange={handleChange} />
              </div>
              <div className="item">
                <label htmlFor="feedPerson" className="label">
                  먹이 준 사람
                </label>
                <select
                  id="feedPerson"
                  value={feedPerson}
                  onChange={onChangePerson}
                >
                  {data.managers.map((m, i) => (
                    <option key={i}>{m.id}</option>
                  ))}
                </select>
              </div>
              <div className="item">
                <label htmlFor="feedEct" className="label">
                  특이 사항
                </label>
                <textarea
                  id="feedEct"
                  placeholder="특이 사항이 있으면 입력해주세요"
                  value={ect}
                  onChange={onChangeEct}
                />
              </div>
              <div className="button-area">
                <button type="submit" onClick={handleUpload}>
                  등록
                </button>
                <button type="reset">취소</button>
              </div>
            </form>
          </div>
        </div>
      ))}
    </>
  );
};

export default InputFeedData;
