import React from "react";
import { ClipboardListIcon } from "@heroicons/react/solid";

const Resume = () => {
  return (
    <div id="Resume" className="w-1/2 mt-64 text-justify ml-auto mr-60">
      <div>
        <div className="table">
          <ClipboardListIcon className="h-5 w-5 mr-4 text-yellow_vs" />{" "}
          <code className="table-cell text-[#e6f1ff] text-3xl mt-5 whitespace-nowrap">
            Resume
          </code>
          <div className="table-cell border-b border-b-[#e6f1ff] border-opacity-25 w-full"></div>
        </div>
      </div>
      <div className="text-[#a2aabc] text-lg mt-5">
        <div className="flex flex-row">
          <div className="w-1/4">
            <code className="text-yellow_vs">Education</code>
          </div>
          <div className="w-3/4">
            <code className="text-blue_vs">Bachelor Of Engineering</code>
            <br />
            <code className="italic text-sm text-lightblue_vs">
              Mechanical Engineering
            </code>
            <br />
            <code className="text-xs text-brown_vs">
              • July 2015 - Apr 2019
            </code>
          </div>
        </div>
        <div className="flex flex-row pt-10">
          <div className="w-1/4">
            <code className="text-yellow_vs">Work</code>
          </div>
          <div className="w-3/4">
            <code className="text-blue_vs">TATA Consultancy Services</code>
            <br />
            <code className="italic text-sm text-lightblue_vs">
              Associate Systems Engineer{" "}
            </code>
            <br />
            <code className="text-xs text-brown_vs">• Jan 2020 - Present</code>
            <br />
            <code className="text-sm">
              <br />•Functional testing of payment gateways regulated by NPCI(Banks - CUB,J&K,PSB).
              <br />•Documentation of test cases and reports.
              <br />•Configuration and maintenance of cloud servers.
              <br />•Worked in cross functional team.
              <br />•Version management using GIT.
              <br />•Deployment in remote linux servers.
            </code>
          </div>
        </div>
        <div className="flex flex-row pt-10 flex-wrap">
          <div className="w-1/4">
            <code className="text-yellow_vs">Skills</code>
          </div>
          <div className="w-3/4">
            <code className="text-sm">
              <br />•HTML5,CSS,JS(ECMA6).
              <br />•ReactJs basics.
              <br />•MySql,Linux,Cloud networks.
              <br />•Configuration and deployment of WebServers like Jboss and tomcat.
              <br />•Version Control - GIT.
              <br />•Core Java,Python and Shell Scripting.
            </code>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Resume;
