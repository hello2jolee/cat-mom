import React from "react";
import { observer } from "mobx-react-lite";

import BasicInformation from './BasicInformation'

const Information = observer(() => {
    return (
        <BasicInformation />
    )
})

export default Information