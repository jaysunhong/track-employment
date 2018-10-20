import React from "react";
import "./JobListItems.css";

const testArr = ["IBM", "Facebook", "Google", "Apple", "Insomniac Games"];

const JobListItems = () => (

  testArr.map(item => {  

    return (
      <div 
        className="joblistitems row"
        key={item.id}
      >
        <div className="col m2">
          <li>
            {item}
          </li>
        </div>

        <div className="col m2">
            <label>
              <input className="checkbox-blue" type="checkbox" />
              <span className="checkbox"></span>
            </label>
        </div>

        <div className="col m2">
            <label>
              <input className="checkbox-teal" type="checkbox" />
              <span className="checkbox"></span>
            </label>
        </div>

        <div className="col m2">
            <label>
              <input className="checkbox-red" type="checkbox" />
              <span className="checkbox"></span>
            </label>
        </div>

        <div className="col m2">
            <label>
              <input className="checkbox-yellow" type="checkbox" />
              <span className="checkbox"></span>
            </label>
        </div>

        <div className="col m2">
            <label>
              <input className="checkbox-green" type="checkbox" />
              <span className="checkbox"></span>
            </label>
        </div>
      </div>
    )
  })
);

export default JobListItems;