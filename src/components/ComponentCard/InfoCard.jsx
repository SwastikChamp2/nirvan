import { useState } from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Chip from "@mui/material/Chip";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import GroupIcon from "@mui/icons-material/Group";
import LocalFireDepartmentIcon from "@mui/icons-material/LocalFireDepartment";
import MoneyIcon from "@mui/icons-material/CurrencyRupee";
import CodeIcon from "@mui/icons-material/Code";

export default function InfoCard({
  title,
  content,
  days,
  people,
  minpoints,
  points,
  money,
  languages,
  projectTickets,

}) {
  const [showMore, setShowMore] = useState(false);

  const paragraphs = content.split("\n");
  const displayContent = showMore ? content : paragraphs.slice(0, 2).join("\n");

  const listItemStyle = {
    marginBottom: "5px",
    paddingLeft: "1.5em",
    position: "relative",
    listStyleType: "none", // Add this line
  };

  const bulletStyle = {
    content: '""', // Change to an empty string
    display: "inline-block",
    width: "0.6em",
    height: "0.6em",
    borderRadius: "50%",
    backgroundColor: "#007bff",
    position: "absolute",
    left: "0.3em",
    top: "0.5em",
  };
  return (
    <div
      style={{
        display: "flex",
        padding: "5px 5px",

        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Card
        style={{
          marginTop: "10px",
          marginBottom: "10px",

          borderRadius: "8px",
          borderColor: "gray", // Set border color to gray
          borderWidth: "2px", // Optionally set border width
          borderStyle: "solid", // Optionally set border style
          boxShadow: "0px 0px 10px #888888", // Shadow border
          backgroundColor: "rgba(255, 255, 255, 0.8)", // Set background color to white with 80% opacity
        }}
        sx={{ width: 786 }}
      >
        <CardContent>
          <Typography
            style={{ fontWeight: "700" }}
            gutterBottom
            variant="h5"
            component="div"
          >
            {title}
          </Typography>
          <div style={{ marginTop: "5px" }}>
            {/* <Chip label="Small" label="Min" size="small" />
            <span>points</span> */}
            {/* <Chip label="Small" label="Min" size="small" />
            <span style={{ fontWeight: 700, fontSize: "14px" }}>
              {money}
            </span>{" "} */}
            <div
              style={{
                display: "flex",
                gap: "10px",
              }}
            >
              Min
              <LocalFireDepartmentIcon />
              {minpoints}
            </div>
          </div>
          <div style={{ marginTop: "8px" }}>
            <Typography variant="body2" color="text.secondary">
              {displayContent}
            </Typography>
          </div>{" "}
          {showMore && (
            <div style={{ margin: "5px" }}>
              <div style={{ fontWeight: "600", fontSize: "18px" }}>
                Project Tickets
              </div>
              <div>
                <ul style={{ listStyleType: "none", paddingLeft: 0 }}>
                  {projectTickets.map((ticket, index) => (
                    <li key={index} style={listItemStyle}>
                      <span style={bulletStyle}></span>
                      {ticket}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          )}
          {showMore && (
            <CardActions>
              {languages.map((language) => (
                <Chip
                  icon={<CodeIcon />}
                  size={"small"}
                  label={language}
                  variant="outlined"
                />
              ))}
            </CardActions>
          )}
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              marginTop: "8px",
            }}
          >
            <div
              style={{
                display: "flex",
                gap: "10px",
              }}
            >
              <AccessTimeIcon />
              {days}
            </div>
            <div
              style={{
                display: "flex",
                gap: "10px",
              }}
            >
              <GroupIcon />
              {people}
            </div>

            <div
              style={{
                display: "flex",
                gap: "10px",
              }}
            >
              <LocalFireDepartmentIcon />
              {points}
            </div>

            <div
              style={{
                display: "flex",
                gap: "10px",
              }}
            >
              <MoneyIcon />
              {money}
            </div>

            <Button size="small" onClick={() => setShowMore(!showMore)}>
              {showMore ? "See Less" : "See More"}
            </Button>
          </div>
        </CardContent>

        {showMore && (
          <CardActions
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center,",
              justifyContent: "center",
            }}
          >
            {" "}
            <Button
              variant="contained"
              color="primary"
              style={{ width: "40%" }}
            >
              Apply
            </Button>
            <Button variant="contained" color="error" style={{ width: "40%" }}>
              Ignore
            </Button>
          </CardActions>
        )}
      </Card>
    </div>
  );
}
