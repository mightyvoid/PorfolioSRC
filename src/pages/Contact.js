import React from "react";
import { MailIcon } from "@heroicons/react/solid";

const Contact = () => {
  return (
    <div id="Contact" className="pb-72 mt-36">
      <div className="table mx-60">
        <MailIcon className="h-5 w-5 mr-4 text-yellow_vs" />
        <code className="table-cell text-[#e6f1ff] text-3xl mt-5 whitespace-nowrap">
          Get In Touch
        </code>
        <div className="table-cell border-b border-b-[#e6f1ff] border-opacity-25 w-full"></div>
      </div>
      <div className="text-[#a2aabc] text-lg mt-5 mx-60 flex flex-col items-center text-justify">
        <code>
        Contact me on the linkedIn link mentioned at start or mail me - navinanbumech@gmail.com
        </code>
        <button className=" border border-lightblue_vs text-lightblue_vs mt-10 p-3 rounded hover:bg-opacity-10 hover:bg-lightblue_vs w-1/2">
          <a href="mailto:navinanbumech@gmail.com">
            <code>Contact</code>
          </a>
        </button>
        <code><a href="https://github.com/YKizou" className="text-[#a2aabc] text-xs  text-purple-700 justify-items-center" target={"_blank"}><br/><br/>Actual template licensed from this man Ykizou but customised it for me</a></code>
      </div>
    </div>
  );
};

export default Contact;
