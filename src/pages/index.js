import React, { useEffect, useRef, useState } from "react";



function displayData(data) {
  document.querySelector("pre").innerHTML = JSON.stringify(data, null, 2);
}
export default function HomePage() {
  const [litData, setLitData] = useState();
  const [showLitData, setShowLitData] = useState(false);
  let days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  let month, day, year, currentSeason, baseURL;
  const dateRef = useRef(null);
  // useEffect(() => {
    //     setCurrentSeason(litData?.season[0].toUpperCase() + litData?.season.substring(1));
    //   })
    async function getMyData(URL) {
      const res = await fetch(URL);
      const data = await res.json();
      setLitData(data)
      console.log(litData);
      // (data => {
      // console.log(data, "line 18");
      // console.log(litData, 'line 20');
      // currentSeason = litData?.season[0].toUpperCase() + litData?.season.substring(1);
      // console.log(currentSeason, "line 22");
      // console.log(litData?.season[0].toUpperCase() + litData?.season.substring(1));
    }
    
  
  const handleOnClick = () => {
    // alert(litData.date);
    setShowLitData(!showLitData);
    // {__html:'<li>hello man</li>'} if I want to set HTML
    // alert(litData, "litdata");
    // getMyData(baseURL).color;
  }
  const handleChange = () => {
    // alert('changed!')
    //get mm/dd/yyyy from date input and set dateRef to that 
    console.log(dateRef.current.value);
    day = Math.floor(dateRef.current.value.split("-")[2]);
    month = Math.floor(dateRef.current.value.split("-")[1]);
    year = dateRef.current.value.split("-")[0];
    baseURL = `http://calapi.inadiutorium.cz/api/v0/en/calendars/default/${year}/${month}/${day}`;
    getMyData(baseURL);
  console.log(month);
  console.log(day);
  console.log(year);
  console.log(baseURL);
  
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

