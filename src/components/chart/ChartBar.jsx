import React from 'react'


import './chartBar.css'

const ChartBar = ({maximumprice, currentPrice, label}) => {

    const fillHeight = (100 * currentPrice)/ maximumprice

  return (
    <div className="chart-bar">
      <div className="chart-bar_inner">
        <div className="chart-bar_fill" style={{ height:`${fillHeight}%` }}></div>
      </div>

      <p className="chart-bar_label">{label}</p>
    </div>
  );
}

export default ChartBar
