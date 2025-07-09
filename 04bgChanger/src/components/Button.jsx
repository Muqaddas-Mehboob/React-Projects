import { useState } from "react";

export default function Button() {
    let [bgcolor, setBgColor] = useState("#FFFFFF");
    
    const color = (event) => {
        const button = event.target.innerHTML;

        if(button  === "Blue"){ setBgColor("#0000FF")}
        else if(button  === "Red"){ setBgColor("#FF0000")}
        else if(button  === "Green"){ setBgColor("#00FF00")}
        else if(button  === "Purple"){ setBgColor("#800080")}
        else if(button  === "Yellow"){ setBgColor("#FFFF00")}


    // const button = event.target;
    // const label = button.innerHTML;

    // if (label === "Blue") {
    //   document.body.style.backgroundColor = "#0000FF";
    // } else if (label === "Red") {
    //   document.body.style.backgroundColor = "#FF0000";
    // } else if (label === "Green") {
    //   document.body.style.backgroundColor = "#00FF00";
    // } else if (label === "Yellow") {
    //   document.body.style.backgroundColor = "#FFFF00";
    // } else if (label === "Purple") {
    //   document.body.style.backgroundColor = "#800080";
    // } else {
    //   document.body.style.backgroundColor = "#FFFFFF";
    // }
  };

  return (
  <div style={{ backgroundColor: bgcolor }} className="h-screen p-4">
    <div className="flex justify-center gap-4 bg-amber-50 p-4">
      <button className="bg-blue-600 text-white px-4 py-2 rounded" onClick={color}>Blue</button>
      <button className="bg-green-600 text-white px-4 py-2 rounded" onClick={color}>Green</button>
      <button className="bg-red-600 text-white px-4 py-2 rounded" onClick={color}>Red</button>
      <button className="bg-yellow-400 text-white px-4 py-2 rounded" onClick={color}>Yellow</button>
      <button className="bg-purple-600 text-white px-4 py-2 rounded" onClick={color}>Purple</button>
    </div>
  </div>

  );
}
