import React from 'react'


import './expensesFilter.css'

const ExpenseFilter = ({value, onChange}) => {
  return (
    <div className="expenses-filter">
      <div className="expenses-filter_control">
        <label className='labelText'>Filter by year</label>
        <select value={value} onChange={onChange} className='selectContainr'>
          <option value="2023">2023</option>
          <option value="2022">2022</option>
          <option value="2021">2021</option>
          <option value="2020">2020</option>
          <option value="2019">2019</option>
        </select>
      </div>
    </div>
  );
}

export default ExpenseFilter
