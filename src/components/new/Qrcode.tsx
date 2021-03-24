import React, { useEffect, useState } from "react";
import { observer } from "mobx-react-lite";
import "./Qrcode.css";

const Qrcode =(props) => {
    // qrcode, id 값 내려받기 임시값
    const id = 1; 
    const qrcodeImg = "https://qrcodethumb-phinf.pstatic.net/20210321_91/16163104776938XPxT_PNG/0LLzj.png"

    // useEffect(()=> {
    //     props.getQrcodeId(id);
    // });
    return (
        <div className="qrcode_area">  
            <img src={qrcodeImg} alt="qrcode" className="img"/>
        </div>
    );
};

export default Qrcode;