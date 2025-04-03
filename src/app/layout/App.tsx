import { useEffect, useState } from "react";
import { Box, Container, CssBaseline } from "@mui/material";
import axios from "axios";
import Navbar from "./Navbar";
import ActivityDashboard from "../../features/activites/dashboard/ActivityDashboard";

function App() {
  const [activites, setActivites] = useState<Activity[]>([]);
  const [selectedActivity, setSelectedActivity] = useState<
    Activity | undefined
  >(undefined);

  const handleSelectActivity = (id: string) => {
    setSelectedActivity(activites.find((x) => x.id === id));
  };

  const handleCancelSelectActivity = () => {
    setSelectedActivity(undefined);
  };

  useEffect(() => {
    axios
      .get<Activity[]>("https://localhost:5001/api/activities")
      .then((response) => setActivites(response.data));
  }, []);

  return (
    <Box sx={{ bgcolor: "#eee" }}>
      <CssBaseline />
      <Navbar />
      <Container maxWidth="xl" sx={{ mt: 2 }}>
        <ActivityDashboard
          activities={activites}
          selectedActivity={selectedActivity}
          selectActivity={handleSelectActivity}
          cancelSelectActivity={handleCancelSelectActivity}
        />
      </Container>
    </Box>
  );
}

export default App;
