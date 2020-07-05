import styled from "styled-components";

export const StyledWrapper = styled.div`
    .data-row {
        margin-bottom: 15px;
    }
`;

export const StyledSourceData = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 10px 0;
    border: 2px solid #dedede;
    margin: 10px 0; 
`;

export const StyledDataWrapper = styled.div`
    .row {
        clear: both;
        display: flex;
        align-items: center;
        justify-content: space-between;
    }
    
    .country .country-input {
        flex: 1;
        margin-left: 2px;
    }
    
    .cmn-cls {
        display: flex;
        float: left;
        width: 250px;
        margin: 5px 20px;
    }
    @media screen and (min-width: 600px) and (max-width: 900px) {
        .cmn-cls {
            width: 200px;
            margin: 0;
            padding: 5px 10px;
        }
        .country .country-input {
            max-width: 120px;
        }
    }
    @media screen and (max-width: 600px) {
        .row {
            flex-direction: column;
            padding-bottom: 20px;
            border-bottom: 2px solid #cecece;
        }
        .cmn-cls {
            width: 300px;
        }
    }
`;

export const StyleProgressBar = styled.div`
    width: 100%;
    height: 30px;
    float: left;
    display: inline-block;
    border: 5px solid black;
    .progress-bar {
        height: 100%;
        width: ${props => props.width || 0}%;
        background-color: blue;
        transition: 0.5s ease-in-out;
    }
`;

export const StyledActionButtonWrapper = styled.div`
    display: flex;
    justify-content: flex-end;
    button {
        margin: 5px;
        background: #fff;
        border: 1px solid #6e6e6e;
        border-radius: 5px;
        cursor: pointer;
        padding: 3px 10px;
    }
`;
