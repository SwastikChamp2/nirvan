import { useState } from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Chip from "@mui/material/Chip";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import GroupIcon from "@mui/icons-material/Group";
import StarIcon from "@mui/icons-material/Star";
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
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Card sx={{ maxWidth: 786 }}>
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {title}
          </Typography>

          <div style={style}>
            <MoneyIcon />
            <span style={{ fontWeight: 700 }}>{money}</span>
          </div>

          <Typography variant="body2" color="text.secondary">
            {displayContent}
          </Typography>
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
            <Chip
              icon={<AccessTimeIcon />}
              label={`${days} days`}
              variant="outlined"
            />
            <Chip icon={<GroupIcon />} label={`${people}`} variant="outlined" />
            <Chip icon={<StarIcon />} label={`${points}`} variant="outlined" />
            <Chip icon={<MoneyIcon />} label={`${points}`} variant="outlined" />
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
