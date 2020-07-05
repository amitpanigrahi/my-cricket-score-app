import React, {useEffect, useState} from "react";
import {StyledDataWrapper, StyleProgressBar} from "./style";
import {getAvg, getHighestScore, trimLeft} from "../../utils/helper";

const DataViewer = ({scoreData}) => {
    const [average, setAvg] = useState(0);
    const [countryName, setCountry] = useState("");
    const calculateHighest = getHighestScore(scoreData);
    useEffect(() => {
        setAvg(getAvg(scoreData.filter(val => val.country.toLowerCase() === countryName.toLowerCase())))
    }, [countryName, scoreData]);


    const barWidth = (average / calculateHighest) * 100;
    return (
        scoreData.length ?
            <StyledDataWrapper>
                <div className={"row"}>
                    <div className={"cmn-cls country"}>
                        The Country: <input onChange={e => setCountry(trimLeft(e.target.value))}
                                            className={"country-input"} type="text" value={countryName}/>
                    </div>
                    <div className={"cmn-cls average"}>
                        The Average: {average || "-"}
                    </div>
                    <div className={"cmn-cls progress"}>
                        <StyleProgressBar width={barWidth || 0}>
                                <div className={"progress-bar"}/>
                        </StyleProgressBar>
                    </div>
                </div>
            </StyledDataWrapper> : <div>NO DATA AVAILABLE</div>
    )
};

export default DataViewer;
