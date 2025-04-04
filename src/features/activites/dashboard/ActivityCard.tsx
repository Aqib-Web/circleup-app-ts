import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  Chip,
  Typography,
} from "@mui/material";

type Props = {
  activity: Activity;
  selectActivity: (id: string) => void;
  deleteActivity: (id: string) => void;
};

export default function ActivityCard({
  activity,
  selectActivity,
  deleteActivity,
}: Props) {
  return (
    <Card sx={{ borderRadius: 3, padding: 2 }}>
      <CardContent>
        <Typography variant="h5" component="div">
          {activity.title}
        </Typography>
        <Typography sx={{ color: "text.secondary", mb: 1.5 }}>
          {activity.date}
        </Typography>
        <Typography variant="body2">{activity.description}</Typography>
        <Typography variant="subtitle1">
          {activity.city} - {activity.venue}
        </Typography>
      </CardContent>
      <CardActions sx={{ display: "flex", justifyContent: "space-between" }}>
        <Chip label={activity.category} variant="outlined" />
        <Box sx={{ display: "flex", gap: 1 }}>
          <Button
            size="small"
            variant="contained"
            onClick={() => selectActivity(activity.id)}
          >
            View
          </Button>
          <Button
            size="small"
            variant="contained"
            color="error"
            onClick={() => deleteActivity(activity.id)}
          >
            Delete
          </Button>
        </Box>
      </CardActions>
    </Card>
  );
}
