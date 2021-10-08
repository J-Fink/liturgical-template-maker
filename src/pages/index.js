import React, { useEffect, useRef, useState } from "react";
import romcal from 'romcal';

// function displayData(data) {
  //   document.querySelector("pre").innerHTML = JSON.stringify(data, null, 2);
  // }
  export default function HomePage() {
    const [litData, setLitData] = useState();
    const [showLitData, setShowLitData] = useState(false);
    let days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    let month, day, year, currentSeason, baseURL, selectedDayOfYear, currentDayOfYear;
    
    //date is new Date(yyyy, m, d)
    const dayOfYear = (date) => {
      let selectedDate = date;
      let startOfYearDate = new Date(selectedDate.getFullYear(), 0, 0);
      let diff = (selectedDate - startOfYearDate) + ((startOfYearDate.getTimezoneOffset() - selectedDate.getTimezoneOffset()) * 60 * 1000);
      let oneDay = 1000 * 60 * 60 * 24;
      // let calculatedDay = Math.floor(diff / oneDay);
      let dateCalculated = {
        calculatedDay: Math.floor(diff / oneDay),
      }
      return(
        dateCalculated
      );
      // console.log('Day of year: ' + calculatedDay);
      
      
      // currentDayOfYear = Math.floor((date - new Date(date.getFullYear(), 0, 1)) / (1000*60*60*24));
      // console.log(currentDayOfYear, 'line 15');
    };

    // var now = new Date();
    // var start = new Date(now.getFullYear(), 0, 0);
    // var diff = (now - start) + ((start.getTimezoneOffset() - now.getTimezoneOffset()) * 60 * 1000);
    // var oneDay = 1000 * 60 * 60 * 24;
    // var day = Math.floor(diff / oneDay);
    // console.log('Day of year: ' + day);






  const dateRef = useRef(null);

  function getMyData(targetedDay) {
    const exampleDay = romcal.calendarFor({
      year: year,
    })[targetedDay - 1];
    // console.log(exampleDay[targetedDay - 1], 'line 25'); //subtract 1 to account for off by 1 error
    console.log(exampleDay);
  }
    
  
  const handleOnClick = () => {
    // alert('hello');
    let specificDayForCalendar = dayOfYear(new Date(year, month, day)).calculatedDay;
    console.log(typeof specificDayForCalendar, specificDayForCalendar)
    getMyData(specificDayForCalendar);
    console.log(dayOfYear(new Date(year, month, day)).calculatedDay);
    console.log(dayOfYear(new Date(year, month, day)));
    
    // setShowLitData(!showLitData);
    // {__html:'<li>hello man</li>'} if I want to set HTML
    // alert(litData, "litdata");
    // getMyData(baseURL).color;
  }
  const handleChange = () => {
    //get mm/dd/yyyy from date input and set dateRef to that 
    
    day = parseInt(dateRef.current.value.split("-")[2]); //1-31
    month = parseInt(dateRef.current.value.split("-")[1] - 1); //0-11
    year = parseInt(dateRef.current.value.split("-")[0]);//yyyy
    
    console.log(month);
    console.log(day);
    console.log(year);
  
  
 };

return(
  <>
  {showLitData ? 
  // <div dangerouslySetInnerHTML={showLitData}></div> use this to set HTML
  <div>
    <p>Date: {litData.date}</p>
    <p>Season: {litData.season[0].toUpperCase() + litData.season.substring(1)}</p>
    <p>Week in Season: {litData.season_week}</p>
    <p>Day of Week: {litData.weekday[0].toUpperCase() + litData.weekday.substring(1)}</p>
  </div>
   : ''}
 
<button onClick={handleOnClick}>Hello World!</button>
<form>
  <input type="date" placeholder="Date: mm/dd/yyyy" ref={dateRef}onChange={handleChange}></input>
  
  
  <select name="Meridiem Indicator">
    <option selected="selected">AM/PM</option>
    <option value="AM">AM</option>
    <option value="PM">PM</option>
  </select>
</form>
  
  </>
);
};

