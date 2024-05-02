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
  points,
  money,
  languages,
}) {
  const [showMore, setShowMore] = useState(false);

  const paragraphs = content.split("\n");
  const displayContent = showMore ? content : paragraphs.slice(0, 2).join("\n");

  const style = {
    display: "inline-block",
    padding: "5px 5px",
    fontSize: "16px",
    lineHeight: "20px",
    borderRadius: "25px",
    backgroundColor: "#808080", // Gray color
    color: "#333",
    boxShadow: "0px 0px 10px #888888", // Shadow border
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
        sx={{ maxWidth: 786 }}
      >
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
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
              {points}
            </div>
          </div>

          <div style={{ marginTop: "8px" }}>
            <Typography variant="body2" color="text.secondary">
              {displayContent}
            </Typography>
          </div>
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
              {points}
            </div>

            <Button size="small" onClick={() => setShowMore(!showMore)}>
              {showMore ? "See Less" : "See More"}
            </Button>
          </div>
        </CardContent>
        {showMore && (
          <CardActions>
            <Button variant="contained" color="primary" style={{ flex: 1 }}>
              Apply
            </Button>
            <Button variant="contained" color="error" style={{ flex: 1 }}>
              Reject
            </Button>
          </CardActions>
        )}
      </Card>
    </div>
  );
}
