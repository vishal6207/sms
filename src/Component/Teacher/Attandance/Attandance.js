import React from 'react'
import './Attandance.css'
const Attandance = () => {
  return (
    <div className='attandanceContainer'>
      <div>
        <span>Take Attandance</span>
        <span>Show Attandance</span>
      </div>
      <div>
        Take Attandance
      </div>
      <hr />
      <div>
        <div>
          <label htmlFor="class" className="form-label">Class:</label>
          <select id="class" className="form-select">
            <option value="Nursery">Nursery</option>
            <option value="KG">KG</option>
            <option value="1">1st</option>
            <option value="2">2nd</option>
            <option value="3">3rd</option>
            <option value="4">4th</option>
            <option value="5">5th</option>
            <option value="6">6th</option>
            <option value="7">7th</option>
            <option value="8">8th</option>
            <option value="9">9th</option>
            <option value="10">10th</option>
            <option value="11">11th (Science)</option>
            <option value="11">11th (Commerce)</option>
            <option value="11">11th (Arts)</option>
            <option value="12">12th (Science)</option>
            <option value="12">12th (Commerce)</option>
            <option value="12">12th (Arts)</option>
          </select>
          <label htmlFor="class" className="form-label">Section:</label>
          <select>
            <option value="A">A</option>
            <option value="A">B</option>
            <option value="A">C</option>
          </select>
        </div>
        <hr />

        <div>
          
        </div>
      </div>

    </div>
  )
} 

export default Attandance