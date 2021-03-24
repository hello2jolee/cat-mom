import React, { useEffect, useState } from "react";
import { observer } from "mobx-react-lite";
import "./Information.css";

const Information = (props) => {
    const qrcode = props.qrcode;
    let lat=1, lon=1;
    const [catName, setCanName] = useState('');
    const [manager, setManager] = useState('');
    const date = new Date();
    const [selectedDate, setSelectedDate] = useState(`${date.getFullYear()}-${date.getMonth()+1 <10 ? `0${date.getMonth()+1}` : date.getMonth()+1}-${date.getDate() < 10 ? `0${date.getDate()}` : date.getDate()}`);
    const onChangeCatName = e => setCanName(e.target.value);
    const onChangeManager = e => setManager(e.target.value);
    const onChangeDate = e => setSelectedDate(e.target.value);
    
    useEffect(()=> {
        askLocation();
    });
    
    // 위치 - 대략 5초 
    const askLocation =()=> {
        if(window.navigator.geolocation){
            window.navigator.geolocation.getCurrentPosition(setLocation);
        } else {
          alert("Geolocation is not supported by this browser.");
        } 
    }

    const setLocation=(position)=> {
        lon = position.coords.longitude;
        lat = position.coords.latitude;
        alert(lon+","+lat);
    }

    //넘기기 전에 데이터 확인 
    const handleSubmit = (e) => {
        e.preventDefault();
        alert(
            `lat: ${lat} lon: ${lon} catName: ${catName} manager: ${manager} date: ${selectedDate}`
        )
    }


    // 배식가능 날짜 - 추후 개발
    // const onClickCheckBox = e => {

    //     const checkboxes = document.getElementsByName('AvaiableDate');
    //     console.log(checkboxes);
    //     // checkboxes.forEach((checkbox) => {
    //     //     alert(checkbox);
    //     // })
    // }


    return (
        <div>  
            <form >
                 <div>
                    <label htmlFor="qrcode">NO.</label>
                    <input id="qrcode" type="text" value={qrcode} readOnly/>
                </div>
                <div>
                    <label htmlFor="date">날짜</label>
                    <input id="date" type="date" value={selectedDate} onChange={onChangeDate}/>
                </div>
                
                <div>
                    <label htmlFor="catName">고양이 이름</label>
                    <input id="catName" type="text" value={catName} onChange={onChangeCatName}/>
                    <input type="file" name="file" id=""/>
                </div>
         
                <div>
                    <span>위치</span>
                    <span></span>
                    <button onClick={askLocation}>새로고침</button>
                </div>
                <div>
                    <label htmlFor="manager">담당자</label>
                    <input id="manager" type="text" value={manager} onChange={onChangeManager}/>
                </div>
                <div> 
                    <span>배식 가능 날짜</span>
                    <input type="checkbox" name="AvaiableDate" id="mon" value="월"/> <label htmlFor="mon">월</label>
                    <input type="checkbox" name="AvaiableDate" id="tue" value="화"/><label htmlFor="tue">화</label>
                    <input type="checkbox" name="AvaiableDate" id="wed" value="수"/><label htmlFor="wed">수</label>
                    <input type="checkbox" name="AvaiableDate" id="thu" value="목"/><label htmlFor="thu">목</label>
                    <input type="checkbox" name="AvaiableDate" id="fri" value="금"/><label htmlFor="fri">금</label>
                    <input type="checkbox" name="AvaiableDate" id="sat" value="토"/><label htmlFor="sat">토</label>
                    <input type="checkbox" name="AvaiableDate" id="sun" value="일"/><label htmlFor="sun">일</label>
                    <input type="checkbox" name="AvaiableDate" id="none" value="none"/><label htmlFor="none">미정</label>
                </div>
                <input type="submit" value="등록하기" onClick={handleSubmit}/>
            </form>
        </div>
    );
};

export default Information;