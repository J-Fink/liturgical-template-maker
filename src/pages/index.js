import React, { useEffect, useRef, useState } from "react";
import romcal, { Types } from 'romcal';


  export default function HomePage() {
    const [litData, setLitData] = useState();
    const [showLitData, setShowLitData] = useState(false);
    const [templateMade, setTemplateMade] = useState(false);
    const [templateHTML, setTemplateHTML] = useState('');
    let days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    let month, day, year, currentSeason, baseURL, selectedDayOfYear, currentDayOfYear, dayOfWeek, displayMonth;
    let facebookText, websiteCode, meridiemIndicator;
    
    const dayOfYear = (date) => {
      //date is new Date(yyyy, m, d)
      let startOfYearDate = new Date(date.getFullYear(), 0, 0);
      let diff = (date - startOfYearDate) + ((startOfYearDate.getTimezoneOffset() - date.getTimezoneOffset()) * 60 * 1000);
      let oneDay = 1000 * 60 * 60 * 24;
      
      let dateCalculated = {
        calculatedDay: Math.floor(diff / oneDay),
      }
      return(
        dateCalculated
        );
        
      };
      
      const dateRef = useRef(null);
      const meridiemRef = useRef(null);
      // const templateRef = useRef(null);
      
      function getMyData(targetedDay) {
        
        const exampleDay = romcal.calendarFor({
          year: year,
          country: 'unitedStates',
        })[targetedDay - 1];
        
        return(
          exampleDay
        )
          console.log(exampleDay);
        
        // console.log(exampleDay[targetedDay - 1], 'line 25'); //subtract 1 to account for off by 1 error
        /*console.log(exampleDay);
        console.log(exampleDay.data);
        console.log('Psalter: ' + exampleDay.data.meta.psalterWeek.value);
        //Liturgical Season
        console.log('Liturgical Season is: ' + exampleDay.data.season.value);
        //Week in the Liturgical Season
        console.log('Week in Liturgical Season is: ' + exampleDay.name);*/
      }
      //Optional Celebrant
      //Optional change of announcement
      //Optional Change of start time for AM/PM
      
      
      const clipboardCopy = async () => {
        let text = `Hi Joe <br>`;
        await navigator.clipboard.writeText(text);
        console.log(navigator.clipboard.read());
      }
      
      const makeTemplate = () => {
        // console.log(Types);
        dayOfWeek = days[new Date(year, month, day).getDay()];
        let specificDayForCalendar = dayOfYear(new Date(year, month, day)).calculatedDay;
        let dayData = getMyData(specificDayForCalendar);
        console.log(dayData);
        // let litDayName = data.name;
        // console.log(data.name);
        
        console.log(displayMonth.toString() + day.toString() + year.toString().substring(2, 4))
        let queryURL = displayMonth.toString() + day.toString() + year.toString().substring(2, 4);
        console.log(queryURL);
        facebookText = `
          <h1>Facebook Text</h1>  
          <div>
            ${displayMonth}/${day}/${year} ${days[new Date(year, month, day).getDay()]} Mass, Cathedral of Saint Paul, St. Paul, MN<br>
            Mass today is for: ${dayData.name}<br>
            
            Support the Cathedral here:<br>
            https://www.cathedralsaintpaul.org/give
            
            Mass readings available from the USCCB:<br>
            English| <a target="_blank" href="https://bible.usccb.org/bible/readings/${queryURL}.cfm" rel="noreferrer noopener" >https://bible.usccb.org/bible/readings/${queryURL}.cfm</a><br>
            Spanish| <a target="_blank" href="https://bible.usccb.org/es" rel="noreferrer noopener" >https://bible.usccb.org/es</a><br>
            <br>
            An Act of Spiritual Communion:<br>
            My Jesus, I believe that You are present in the Most Holy Sacrament.<br>
            I love You above all things, and I desire to receive You into<br>
            my soul. Since I cannot at this moment receive You sacramentally,<br>
            come at least spiritually into my heart. I embrace You as if You<br>
            were already there and unite myself wholly to You. Never permit<br>
            me to be separated from You.<br>
            Amen
          `;
          websiteCode = `
          <div id="${dayOfWeek}${meridiemIndicator.value}-container">
              <div style="text-align: center;">        
              <h1>Join Us For:</h1>
              <p>${displayDate} ${enterDay.value} ${periodIndicator} Mass for the ${liturgicalWeek.value} Week in ${liturgicalSeason.value}</p>
              
              <div id="${dayOfWeek}${meridiemIndicator.value}-announcement">
                  <p style="margin: 0px;">
                      <em style="font-size: 14px;">
                          <span style="color:#ff0000;">
                              ${announcementBlock}
                          </span>
                      </em>
                  </p>
              </div>    
              <div id="${dayOfWeek}${meridiemIndicator.value}" style="text-align: center; background-image:url('/sites/default/files/files/${enterDateObjectMonth}_${enterDateObjectDay}%20${enterDay.value}%20${meridiemIndicator.value}%20Mass.jpg'); background-size: 400px 225px; width: 400px; height: 225px; margin: auto;">
                  <iframe id="${dayOfWeek}${meridiemIndicator.value}Iframe" style="visibility: hidden;" allowfullscreen="true" allowtransparency="true" frameborder="0" height="225" width="400" scrolling="no" src="${embedCodeFacebook.value}" style="border:none;overflow:hidden;" ></iframe><!-- when embedding facebook live stream make sure to add at the end of the src "&show_text=0&width=560"-->
              </div>
              ${bulletinAnnouncementWebsite}
              <div>
                  <p style="margin: 0px;">
                      <em>Note: After initial streaming, Mass will be available on Facebook <a href="${facebookEmbed}" target="_blank">here</a> & YouTube <a href="${youtubeEmbed}" target="_blank">here</a>.
                      </em>
                  </p>
                  <p style="margin:0px">
                      Mass readings available from the USCCB:
                  </p>
                  <ul style="list-style-type: none; margin-top: 0px;">
                      <li>
                          <a href="https://bible.usccb.org/" target="_blank" rel="noopener noreferrer">
                              English
                          </a>
                      </li>
                      <li>
                          <a href="https://bible.usccb.org/es" target="_blank" rel="noopener noreferrer">
                              Spanish
                          </a>
                      </li>
                  </ul>
              </div>
              
          </div>
          <hr>
      </div>
      <script>
          let ${dayOfWeek}${meridiemIndicator.value}Container = document.getElementById('${dayOfWeek}${meridiemIndicator.value}-container');
          ${dayOfWeek}${meridiemIndicator.value}Container.style.display = 'none';
          let ${dayOfWeek}${meridiemIndicator.value}Announcement = document.getElementById("${dayOfWeek}${meridiemIndicator.value}-announcement");
          let ${dayOfWeek}${meridiemIndicator.value}iFrame = document.getElementById("${dayOfWeek}${meridiemIndicator.value}Iframe");
          let ${dayOfWeek}${meridiemIndicator.value} = document.getElementById("${dayOfWeek}${meridiemIndicator.value}");
          let ${dayOfWeek}${meridiemIndicator.value}TimeChecker = setInterval(${dayOfWeek}${meridiemIndicator.value}GetFormattedDate, 1000);
          ${dayOfWeek}${meridiemIndicator.value}GetFormattedDate();
          function ${dayOfWeek}${meridiemIndicator.value}GetFormattedDate(){
              var ${dayOfWeek}${meridiemIndicator.value}Date = new Date();
              var ${dayOfWeek}${meridiemIndicator.value}Mth = ${dayOfWeek}${meridiemIndicator.value}Date.getMonth() + 1;
              var ${dayOfWeek}${meridiemIndicator.value}Dy = ${dayOfWeek}${meridiemIndicator.value}Date.getDate();
              var ${dayOfWeek}${meridiemIndicator.value}Hr = ${dayOfWeek}${meridiemIndicator.value}Date.getHours();
              var ${dayOfWeek}${meridiemIndicator.value}Min = ${dayOfWeek}${meridiemIndicator.value}Date.getMinutes();
              var ${dayOfWeek}${meridiemIndicator.value}Sec = ${dayOfWeek}${meridiemIndicator.value}Date.getSeconds();
              ${dayOfWeek}${meridiemIndicator.value}Mth = (${dayOfWeek}${meridiemIndicator.value}Mth < 10 ? "0" : "") + ${dayOfWeek}${meridiemIndicator.value}Mth;
              ${dayOfWeek}${meridiemIndicator.value}Dy = (${dayOfWeek}${meridiemIndicator.value}Dy < 10 ? "0" : "") + ${dayOfWeek}${meridiemIndicator.value}Dy;
              ${dayOfWeek}${meridiemIndicator.value}Hr = (${dayOfWeek}${meridiemIndicator.value}Hr < 10 ? "0" : "") + ${dayOfWeek}${meridiemIndicator.value}Hr;
              ${dayOfWeek}${meridiemIndicator.value}Min = (${dayOfWeek}${meridiemIndicator.value}Min < 10 ? "0" : "") + ${dayOfWeek}${meridiemIndicator.value}Min;
              ${dayOfWeek}${meridiemIndicator.value}Sec = (${dayOfWeek}${meridiemIndicator.value}Sec < 10 ? "0" : "") + ${dayOfWeek}${meridiemIndicator.value}Sec;
              var ${dayOfWeek}${meridiemIndicator.value}Str = ${dayOfWeek}${meridiemIndicator.value}Mth + "-" + ${dayOfWeek}${meridiemIndicator.value}Dy + " " +  ${dayOfWeek}${meridiemIndicator.value}Hr + ":" + ${dayOfWeek}${meridiemIndicator.value}Min;
              ${dayOfWeek}${meridiemIndicator.value}Month = "${enterDateMonth}";
              ${dayOfWeek}${meridiemIndicator.value}Day = "${enterDateDate}";
              ${dayOfWeek}${meridiemIndicator.value}Hour = "${streamStartHour}";
              ${dayOfWeek}${meridiemIndicator.value}Minutes = "${streamStartMinute}";
              var ${dayOfWeek}${meridiemIndicator.value}InputStr = ${dayOfWeek}${meridiemIndicator.value}Month + "-" + ${dayOfWeek}${meridiemIndicator.value}Day + " " + ${dayOfWeek}${meridiemIndicator.value}Hour + ":" + ${dayOfWeek}${meridiemIndicator.value}Minutes;
              function ${dayOfWeek}${meridiemIndicator.value}CheckDay(){
                  if(${dayOfWeek}${meridiemIndicator.value}Day === ${dayOfWeek}${meridiemIndicator.value}Dy){
                      ${dayOfWeek}${meridiemIndicator.value}Container.style.display = 'inline';
                  } else {
                      return;
                  }
              }
              ${dayOfWeek}${meridiemIndicator.value}CheckDay();
              if(${dayOfWeek}${meridiemIndicator.value}Day === ${dayOfWeek}${meridiemIndicator.value}Dy && ${dayOfWeek}${meridiemIndicator.value}InputStr > ${dayOfWeek}${meridiemIndicator.value}Str){
                  return;
              } else {
                  clearInterval(${dayOfWeek}${meridiemIndicator.value}TimeChecker);
                  ${dayOfWeek}${meridiemIndicator.value}iFrame.src = ${dayOfWeek}${meridiemIndicator.value}iFrame.src;
                  ${dayOfWeek}${meridiemIndicator.value}iFrame.style.visibility = "visible";
                  ${dayOfWeek}${meridiemIndicator.value}.style.backgroundImage = "none";
                  ${dayOfWeek}${meridiemIndicator.value}Announcement.style.display = "none";
                  }
          }
      <\/script>`;
    let template =`
   ${facebookText} 
    &lt;p&gt;${day}</p&gt>
    `;
    console.log(template);
    setTemplateHTML(template);
    setTemplateMade(true);
    
    
  }
  
  const handleChange = () => {
    //get mm/dd/yyyy from date input and set dateRef to that 
    day = parseInt(dateRef.current.value.split("-")[2]); //1-31
    month = parseInt(dateRef.current.value.split("-")[1] - 1); //0-11
    year = parseInt(dateRef.current.value.split("-")[0]);//yyyy
    displayMonth = month + 1;
    console.log(dateRef.current.valueAsDate);
    console.log(dateRef.current.value);
    console.log(new Date(year, month, day));
    console.log(displayMonth + "/" + day + "/" + year + " " + days[new Date(year, month, day).getDay()]);
  };
  const meridiemChange = () => {
    //get mm/dd/yyyy from date input and set dateRef to that 
    meridiemIndicator = meridiemRef.current;
    console.log(meridiemIndicator.value)
    console.log(meridiemRef.current.value);
    // day = parseInt(dateRef.current.value.split("-")[2]); //1-31
    // month = parseInt(dateRef.current.value.split("-")[1] - 1); //0-11
    // year = parseInt(dateRef.current.value.split("-")[0]);//yyyy
    // console.log(dateRef.current.valueAsDate);
    // console.log(dateRef.current.value);
    // console.log(new Date(year, month, day));
    // console.log(month + "/" + day + "/" + year + " " + days[new Date(year, month, day).getDay()]);
  };

  
  
  return(
    <>
    <button onClick={clipboardCopy}>Clipboard test</button>
    <button onClick={makeTemplate}>Make a template</button>
    
    
  
    
    {templateMade ? <div dangerouslySetInnerHTML={{__html: templateHTML}}></div> : ''}
    <form>
      <input type="date" placeholder="Date: mm/dd/yyyy" ref={dateRef} onChange={handleChange}></input>
      
      
      <select name="Meridiem Indicator" ref={meridiemRef} placeholder="AM/PM" onChange={meridiemChange}>
        {/* <option selected="selected">AM/PM</option> */}
        <option default>AM/PM</option>
        <option value="AM">AM</option>
        <option value="PM">PM</option>
      </select>
    </form>
  
  </>
);
};

