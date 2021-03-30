
import React, { useState } from "react";
import { observer } from "mobx-react-lite";
import Qrcode from "./Qrcode";
import Information from "./Information";
import "./index.css";

const New = observer(() => {
    const qrcode = 1;
    const src ="https://qrcodethumb-phinf.pstatic.net/20210321_91/16163104776938XPxT_PNG/0LLzj.png";
    return (
        <div className="content">
            {/* qrcode */}
            <Qrcode qrcode={qrcode} src={src}/>

            {/* 정보 */}
            <Information qrcode={qrcode}/>
        </div>      
    );
});

export default New;