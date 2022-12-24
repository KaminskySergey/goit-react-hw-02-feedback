import React from "react";
import PropTypes from 'prop-types';

import {ContainerState} from './Statistics.styled'

const Statistics = ({good, neutral, bad, total, positivePercentage}) => {
    return (
        <ContainerState>
            <p>Good: {good}</p>
            <p>Neutral: {neutral}</p>
            <p>Bad: {bad}</p>
            <p>Total: {total}</p>
            <p>Positive feedback: {positivePercentage}%</p>
        </ContainerState>
    )
}

Statistics.propTypes = {
    good: PropTypes.number.isRequired,
    neutral: PropTypes.number.isRequired,
    bad: PropTypes.number.isRequired,
    total: PropTypes.number.isRequired,
    positivePercentage: PropTypes.string.isRequired,
}


export default Statistics;