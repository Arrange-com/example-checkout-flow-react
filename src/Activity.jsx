import * as React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

const bull = (
  <Box
    component="span"
    sx={{ display: "inline-block", mx: "2px", transform: "scale(0.8)" }}
  >
    •
  </Box>
);

const ActivityCard = ({
  activityTitle,
  activityLink,
  classId,
  price,
  classTitle,
  handleOpen,
}) => {
  return (
    <Card sx={{ width: "100%", maxWidth: 316 }}>
      <CardContent>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          {activityTitle}
        </Typography>
        <Typography
          variant="h5"
          component="div"
          className={`title ${classTitle}`}
        >
          {classTitle}
        </Typography>
        <Typography sx={{ mb: 1.5 }} color="text.secondary">
          {bull}
          {price + " DKK"}
        </Typography>
        <Typography variant="body2">
          <br />
        </Typography>
      </CardContent>
      <CardActions>
        <Button
          color="success"
          variant="outlined"
          size="small"
          onClick={() => handleOpen({ activityLink, classId })}
        >
          Book your spot
        </Button>
      </CardActions>
    </Card>
  );
};

export default ActivityCard;
