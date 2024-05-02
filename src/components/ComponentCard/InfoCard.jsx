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

export default function InfoCard({ title, content, days, people, points }) {
  const [showMore, setShowMore] = useState(false);

  const paragraphs = content.split("\n");
  const displayContent = showMore ? content : paragraphs.slice(0, 2).join("\n");

  return (
    <Card sx={{ maxWidth: 500 }}>
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {displayContent}
        </Typography>
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
        </div>
      </CardContent>
      {paragraphs.length > 2 && (
        <CardActions>
          <Button size="small" onClick={() => setShowMore(!showMore)}>
            {showMore ? "See Less" : "See More"}
          </Button>
        </CardActions>
      )}
    </Card>
  );
}
