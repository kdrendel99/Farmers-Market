import React from "react";
import Day from "./Day";

const marketSchedule = [  
{  
    name: "Sunday",
    location: "Lents International",
    hours: "9:00am - 2:00pm",
    booth: "4A"
  },
  {  
    name: "Monday",
    location: "Pioneer Courthouse Square",
    hours: "10:00am - 2:00pm",
    booth: "7C"
  },
  {  
    name: "Tuesday",
    location: "Hillsboro",
    hours: "5:00pm - 8:30pm",
    booth: "1F"
  },
  {  
    name: "Wednesday",
    location: "Shemanski Park",
    hours: "10:00am - 2:00pm",
    booth: "3E"
  },
  {  
    name: "Thursday",
    location: "Northwest Portland",
    hours: "2:00pm - 6:00pm",
    booth: "6D"
  },
  {  
    name: "Friday",
    location: "Lake Oswego",
    hours: "11:00am - 2:00pm",
    booth: "7R"
  },
  {  
    name: "Saturday",
    location: "Beaverton",
    hours: "10:00am - 1:30pm",
    booth: "9G"
  }
];

function DayList(){
  return (
    <React.Fragment>
      <hr/>
      {marketSchedule.map((day, index) =>
        <Day
        name={day.name}
        location={day.location}
        hours={day.hours}
        booth={day.booth}
        key={index}/>
      )}
    </React.Fragment>
  );
}

export default DayList;