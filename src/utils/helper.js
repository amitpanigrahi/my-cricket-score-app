export const getHighestScore = (data = []) => data.reduce((a, b) => Math.max(a, b.score), 0);

export const getTotalScore = (data = []) => data.reduce((a, b) => a + b.score, 0);

export const getAvg = (data = []) => Math.round((getTotalScore(data)/data.length) * 100) / 100;

export const formatServerData = (data = []) => data && data.length ? data.map(val => {
    let [country, score] = val;
    return ({country, score})
}) : [];

export const trimLeft = string =>
    string ? string.replace(/^\s+/, "") : string;
