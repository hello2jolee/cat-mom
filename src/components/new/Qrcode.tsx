import React, { useEffect, useState } from "react";
import { observer } from "mobx-react-lite";
import "./Qrcode.css";

const Qrcode = (props) => {
    const qrcode = props.qrcode;
    const qrcodeImg = props.src;
    return (
        <div className="qrcode_area">  
            <img src={qrcodeImg} alt="qrcode" className="img"/>
        </div>
    );
};

export default Qrcode;