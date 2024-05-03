import React from "react";
import AcceptedProjects from "./AcceptedProjects";
import OngoingProjects from "./OngoingProjects";

const TabContent = ({ activeTab }) => {
  return (
    <div>
      {activeTab === "accepted-projects" && <AcceptedProjects />}
      {activeTab === "ongoing-projects" && <OngoingProjects />}
    </div>
  );
};

export default TabContent;
