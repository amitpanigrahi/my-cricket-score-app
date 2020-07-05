import React, {useEffect} from "react";
import PropTypes from "prop-types";
import {connect} from "react-redux";
import {getAllScoresService} from "../../services";
import {getAllScores, isScoresDataFetching} from "../../Selectors";
import {StyledSourceData} from "./style";

const DATA_SOURCE = [
    {value: "test", name: "Test Data"},
    {value: "server", name: "Server Data"},
];

const DataSourceSelectionModule = (props) => {
    const {
        source,
        setSource,
        d__getAllScores
    } = props;
    useEffect(() => {
        if (source === "server") {
            d__getAllScores();
        }
    }, [source, d__getAllScores]);
    return (
        <StyledSourceData>
            Source of data:
            <div>
                {DATA_SOURCE.map((val, i) => {
                    const {
                        value,
                        name
                    } = val;
                    return (
                        <span key={i}>
                        <input className={"cursor_pointer"} id={`src-${value}`} type="radio" readOnly={true}
                               onClick={() => setSource(value)}
                               name="data-source" value={value} checked={value === source}/>
                        <label className={"cursor_pointer"} htmlFor={`src-${value}`}>{name}</label>
                    </span>
                    )
                })}
            </div>
        </StyledSourceData>
    )
};

DataSourceSelectionModule.propTypes = {
    d__getAllScores: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
    s__allScoresData: getAllScores(state),
    s__isScoresFetching: isScoresDataFetching(state),
});

const mapDispatchToProps = dispatch => ({
    d__getAllScores: () => getAllScoresService()(dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(DataSourceSelectionModule)
