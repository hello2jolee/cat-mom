
import React, { useState } from "react";
import { observer } from "mobx-react-lite";
import Qrcode from "./Qrcode";
import Information from "./Information";
import "./index.css";

const New = observer(() => {
    const [QrcodeId, setQrcodeId] = useState(0);
    const getQrcodeId = (number) => {
        setQrcodeId(number);
    }
    return (
        <div className="content">
            {/* qrcode */}
            <Qrcode />

            {/* 정보 */}
            <Information qrcode={QrcodeId}/>
        </div>      
    );
});

export default New;