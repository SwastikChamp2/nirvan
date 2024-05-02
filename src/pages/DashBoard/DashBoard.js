import React, { useState } from "react";
import Nav from "react-bootstrap/Nav";
import TabContent from "./TabContent";
import "./styles.css"; // Import the CSS file containing custom styles

function DashBoard() {
  const [activeTab, setActiveTab] = useState("accepted-projects");

  const handleTabSelect = (selectedTab) => {
    setActiveTab(selectedTab);
  };

  return (
    <div
      style={{
        marginTop: "15px",
        marginBottom: "10px",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        // justifyContent: "center",
        height: "50vh",
      }}
    >
      <h1>Dashboard</h1>
      <Nav activeKey={activeTab} onSelect={handleTabSelect}>
        <Nav.Item>
          <Nav.Link
            eventKey="accepted-projects"
            className={`custom-button ${
              activeTab === "accepted-projects"
                ? "custom-button-active"
                : "custom-button-light"
            }`}
            style={{ margin: "5px", color: "black", marginBottom: "10px" }}
          >
            <div style={{ fontWeight: "700" }}>Accepted Projects</div>
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link
            eventKey="ongoing-projects"
            className={`custom-button ${
              activeTab === "ongoing-projects"
                ? "custom-button-active"
                : "custom-button-light"
            }`}
            style={{ margin: "5px", color: "black" }}
          >
            <div style={{ fontWeight: "700" }}>Ongoing Projects</div>
          </Nav.Link>
        </Nav.Item>
      </Nav>
      <TabContent activeTab={activeTab} />
    </div>
  );
}

export default DashBoard;
