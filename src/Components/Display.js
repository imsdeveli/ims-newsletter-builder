import React from "react";
import ATN from "../Templates/ATN.js";
import OTR from "../Templates/OTR.js";
import PTR from "../Templates/PTR.js";
import TCI from "../Templates/TCI.js";
import WIA from "../Templates/WIA.js";

const Display = (props) => {
  console.log("display Props", props);

  let template = props.state.template;

  const Blank = () => {
    return (
      <div>
        <h1>Please enter a valid Template</h1>
      </div>
    );
  };

  let templateString = Blank;

  switch (template) {
    case "ATN":
      templateString = ATN(props);
      break;
    case "OTR":
      templateString = OTR(props);
      break;
    case "PTR":
      templateString = PTR(props);
      break;
    case "TCI":
      templateString = TCI(props);
      break;
    case "WIA":
      templateString = WIA(props);
      break;
    default:
      templateString = Blank();
      break;
  }

  console.log("template", template);
  function handleCopyClick() {
    /* Save value of myText to input variable */
    var input = document.getElementById("copyMe").value;

    /* Copy the text inside the text field */
    navigator.clipboard.writeText(input);

    alert("Copied Text: " + input);
  }
  return (
    <div className="Display">
      {/* <button onClick={handleCopyClick}> Copy Text </button> */}
      <div id="copyMe">
        <div>{props.state.template}</div>
        <div>{templateString}</div>
      </div>
    </div>
  );
};

export default Display;
