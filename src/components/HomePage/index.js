import React, {useState} from "react";
import {StyledActionButtonWrapper, StyledWrapper} from "./style";
import DataSourceSelectionModule from "./DataSourceSelectionModule";
import DataViewer from "./DataViewer";
import {getAllScores, isScoresDataFetching} from "../../Selectors";
import {connect} from "react-redux";

const HomePage = ({s__allScoresData}) => {
    const [dataRow, setDataRow] = useState(2);
    const [source, setSource] = useState("test");
    const updateRow = (val) => {
        setDataRow(Math.max(0, (dataRow+val)))
    };
    return (
        <StyledWrapper>
            <DataSourceSelectionModule source={source} setSource={setSource} />
            {[...new Array(dataRow)].map((val, i) =>
                <div key={i} className={"data-row"}>
                    <DataViewer scoreData={s__allScoresData(source === "test")}/>
                </div>)}
            <StyledActionButtonWrapper>
                <button disabled={dataRow <= 1} onClick={() => updateRow(-1)}>-</button>
                <button onClick={() => updateRow(1)}>+</button>
            </StyledActionButtonWrapper>
        </StyledWrapper>
    )
};

const mapStateToProps = (state) => ({
    s__allScoresData: (isTest = true) => getAllScores(state, isTest),
    s__isScoresFetching: isScoresDataFetching(state),
});

export default connect(mapStateToProps, null)(HomePage);
