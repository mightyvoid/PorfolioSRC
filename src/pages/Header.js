import React from "react";

function Header(props) {
  return (
    <div className="mx-60 py-60 items-center justify-center w-1/2 text-justify">
      <div className="flex flex-col">
        <code className="text-lightblue_vs">Hi, my name is</code>
        <code className="text-[#e6f1ff] text-7xl mt-5">Navin Ravindran</code>
      </div>
      <br/><br/><br/><br/><br/><br/>
      
      {/* <button
        className="border border-lightblue_vs text-lightblue_vs mt-10 p-3 rounded hover:bg-opacity-10 hover:bg-lightblue_vs w-1/2"
        onClick={() => props.SetScroll("Projects")}>
        <code>Check out my linkedIn</code>
       
      </button> */}
      <code>
        <a href="https://www.linkedin.com/in/navinravindran/" className="border border-lightblue_vs text-lightblue_vs mt-10 p-3 rounded hover:bg-opacity-10 hover:bg-lightblue_vs w-1/2" target={"_blank"}>Check out my linkedIn</a></code>
    </div>
  );
}

export default Header;