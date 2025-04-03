import { Grid } from "@mui/material";
import ActivityList from "./ActivityList";
import ActivityDetails from "../details/ActivityDetails";

type Props = {
  activities: Activity[];
  selectedActivity?: Activity;
  selectActivity: (id: string) => void;
  cancelSelectActivity: () => void;
};

const ActivityDashboard = ({
  activities,
  selectedActivity,
  selectActivity,
  cancelSelectActivity,
}: Props) => {
  return (
    <Grid container spacing={2}>
      <Grid size={8}>
        <ActivityList activities={activities} selectActivity={selectActivity} />
      </Grid>
      <Grid size={4}>
        {selectedActivity && (
          <ActivityDetails
            activity={selectedActivity}
            cancelSelectActivity={cancelSelectActivity}
          />
        )}
      </Grid>
    </Grid>
  );
};

export default ActivityDashboard;
