import React from "react";
import Month from "./Month";

const availableProduce = [  
  {  
    name: "January",
    selection: [  
      "Apples",
      "Hazelnuts",
      "Pears",
      "Garlic",
      "Mushrooms",
      "Onions",
      "Potatoes",
      "Turnips"
    ]
  },
  {  
    name: "February",
    selection: [  
      "Apples",
      "Hazelnuts",
      "Pears",
      "Garlic",
      "Mushrooms",
      "Onions",
      "Potatoes"
    ]
  },
  {  
    name: "March",
    selection: [  
      "Apples",
      "Hazelnuts",
      "Pears",
      "Rhubarb",
      "Garlic",
      "Mushrooms",
      "Onions",
      "Potatoes"
    ]
  },
  {  
  name: "April",
    selection: [  
      "Apples",
      "Hazelnuts",
      "Pears",
      "Rhubarb",
      "Asparagus",
      "Garlic",
      "Lettuce",
      "Mushrooms",
      "Onions",
      "Potatoes"
    ]
  },
  {  
  name: "May",
    selection: [  
      "Apples",
      "Hazelnuts",
      "Pears",
      "Rhubarb",
      "Asparagus",
      "Cauliflower",
      "Garlic",
      "Lettuce",
      "Potatoes",
      "Radishes"
    ]
  },
  {  
  name: "June",
    selection: [  
      "Apples",
      "Hazelnuts",
      "Pears",
      "Rhubarb",
      "Blackberries",
      "Cherries",
      "Raspberries",
      "Strawberries",
      "Asparagus",
      "Broccoli",
      "Cauliflower",
      "Kohlrabi",
      "Lettuce",
      "Mushrooms",
      "Potatoes",
      "Radishes",
      "Squash"
    ]
  },
  {  
    name: "July",
    selection: [  
      "Apples",
      "Hazelnuts",
      "Pears",
      "Rhubarb",
      "Apricots",
      "Blackberries",
      "Blueberries",
      "Cherries",
      "Melons",
      "Nectarines",
      "Peaches",
      "Raspberries",
      "Strawberries",
      "Tomatoes",
      "Beets",
      "Broccoli",
      "Brussel Sprouts",
      "Cabbage",
      "Carrots",
      "Cauliflower",
      "Cucumber",
      "Eggplant",
      "Garlic",
      "Green Beans",
      "Kohlrabi",
      "Lettuce",
      "Mushrooms",
      "Potatoes",
      "Radishes",
      "Squash",
      "Turnips"
    ]
  },
  {  
    name: "August",
    selection: [  
      "Apples",
      "Apricots",
      "Blackberries",
      "Blueberries",
      "Cherries",
      "Melons",
      "Nectarines",
      "Peaches",
      "Pears",
      "Plums",
      "Raspberries",
      "Rhubarb",
      "Strawberries",
      "Tomatoes",
      "Beets",
      "Broccoli",
      "Brussel Sprouts",
      "Cabbage",
      "Carrots",
      "Cauliflower",
      "Corn",
      "Cucumber",
      "Eggplant",
      "Garlic",
      "Green Beans",
      "Kohlrabi",
      "Lettuce",
      "Mushrooms",
      "Onions",
      "Peas",
      "Peppers",
      "Potatoes",
      "Radishes",
      "Squash",
      "Turnips"
    ]
  },
  {  
  name: "September",
  selection: [  
  "Apples",
  "Blueberries",
  "Grapes",
  "Melons",
  "Peaches",
  "Pears",
  "Plums",
  "Raspberries",
  "Tomatoes",
  "Broccoli",
  "Brussel Sprouts",
  "Cabbage",
  "Carrots",
  "Cauliflower",
  "Corn",
  "Cucumber",
  "Eggplant",
  "Garlic",
  "Green Beans",
  "Kohlrabi",
  "Lettuce",
  "Mushrooms",
  "Onions",
  "Peas",
  "Peppers",
  "Potatoes",
  "Radishes",
  "Squash",
  "Turnips"
  ]
  },
  {  
    name: "October",
    selection: [  
      "Apples",
      "Grapes",
      "Hazelnuts",
      "Melons",
      "Peaches",
      "Pears",
      "Tomatoes",
      "Broccoli",
      "Brussel Sprouts",
      "Cabbage",
      "Carrots",
      "Cauliflower",
      "Corn",
      "Cucumber",
      "Eggplant",
      "Garlic",
      "Green Beans",
      "Kohlrabi",
      "Lettuce",
      "Mushrooms",
      "Onions",
      "Peas",
      "Peppers",
      "Potatoes",
      "Pumpkins",
      "Radishes",
      "Squash",
      "Turnips"
    ]
  },
  {  
  name: "November",
    selection: [  
      "Apples",
      "Hazelnuts",
      "Pears",
      "Broccoli",
      "Carrots",
      "Cauliflower",
      "Garlic",
      "Mushrooms",
      "Onions",
      "Potatoes",
      "Squash",
      "Turnips"
    ]
  },
  {  
    name: "December",
    selection: [  
      "Apples",
      "Hazelnuts",
      "Pears",
      "Broccoli",
      "Carrots",
      "Cauliflower",
      "Garlic",
      "Mushrooms",
      "Onions",
      "Potatoes",
      "Turnips"
    ]
  }
];

var addComma = x => x + ", ";



function MonthList(){
  return (
    <React.Fragment>
      <hr/>
      {availableProduce.map((month, index) =>
      <Month
      name={month.name}
      selection={month.selection.map(selection => (
        <li key={month.name}>
          {selection}
        </li>
      ))}
      key={index}/>
      )}
    </React.Fragment> 
  );
}






export default MonthList;