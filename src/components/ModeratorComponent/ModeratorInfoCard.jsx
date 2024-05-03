import { useState } from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Link from "@mui/material/Link";
import Chip from "@mui/material/Chip";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import GroupIcon from "@mui/icons-material/Group";
import StarIcon from "@mui/icons-material/Star";
import MoneyIcon from "@mui/icons-material/CurrencyRupee";
import CodeIcon from "@mui/icons-material/Code";

export default function ModeratorInfoCard({
  content,
  title,
  aboutMe,
  gdriveLink,
  pastProjectsAndCredentials,
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
        marginTop: "5px",
        marginBottom: "5px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Card
        style={{
          marginTop: "10px",
          marginBottom: "10px",

          borderRadius: "8px",
          padding: "2px 4px",
          borderColor: "gray", // Set border color to gray
          borderWidth: "2px", // Optionally set border width
          borderStyle: "solid", // Optionally set border style
          boxShadow: "0px 0px 10px #888888", // Shadow border
          backgroundColor: "rgba(255, 255, 255, 0.8)", // Set background color to white with 80% opacity
        }}
        sx={{ maxWidth: 786 }}
      >
        <CardContent>
          <Typography
            style={{ fontWeight: "700", fontSize: "28px" }}
            gutterBottom
            variant="h5"
            component="div"
          >
            {title}
          </Typography>
          <Typography gutterBottom variant="h5" component="div">
            About
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {displayContent}
          </Typography>
        </CardContent>

        {/* <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Why CHoose me for the project
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {displayContent}
          </Typography>
        </CardContent> */}
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Past Projects, Portfolio, Credentials
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {pastProjectsAndCredentials}
          </Typography>
        </CardContent>
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Google Drive Link
          </Typography>
          <Typography variant="body2" color="text.secondary">
            <Link href={gdriveLink} target="_blank" rel="noopener noreferrer">
              {gdriveLink}
            </Link>
          </Typography>
        </CardContent>
        <CardActions
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center,",
            justifyContent: "center",
          }}
        >
          {" "}
          <Button variant="contained" color="primary" style={{ width: "40%" }}>
            Apply
          </Button>
          <Button variant="contained" color="error" style={{ width: "40%" }}>
            Reject
          </Button>
        </CardActions>
      </Card>
    </div>
  );
}
