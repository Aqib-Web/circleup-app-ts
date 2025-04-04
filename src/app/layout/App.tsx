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
  const [editMode, setEditMode] = useState(false);

  const handleSelectActivity = (id: string) => {
    setSelectedActivity(activites.find((x) => x.id === id));
  };

  const handleCancelSelectActivity = () => {
    setSelectedActivity(undefined);
  };

  const handleOpenForm = (id?: string) => {
    id ? handleSelectActivity(id) : handleCancelSelectActivity();
    setEditMode(true);
  };

  const handleCloseForm = () => {
    setEditMode(false);
  };

  const handleSubmitForm = (activity: Activity) => {
    if (activity.id) {
      setActivites(activites.map((x) => (x.id === activity.id ? activity : x)));
    } else {
      const newActivity = {
        ...activity,
        id: activites.length.toString(),
      };
      setActivites([...activites, newActivity]);
      setSelectedActivity(newActivity);
    }

    setEditMode(false);
    // setSelectedActivity(undefined);
  };

  const handleDeleteActivity = (id: string) => {
    setActivites(activites.filter((x) => x.id !== id));
  };

  useEffect(() => {
    axios
      .get<Activity[]>("https://localhost:5001/api/activities")
      .then((response) => setActivites(response.data));
  }, []);

  return (
    <Box sx={{ bgcolor: "#eee" }}>
      <CssBaseline />
      <Navbar openForm={handleOpenForm} />
      <Container maxWidth="xl" sx={{ mt: 2 }}>
        <ActivityDashboard
          activities={activites}
          selectedActivity={selectedActivity}
          selectActivity={handleSelectActivity}
          cancelSelectActivity={handleCancelSelectActivity}
          editMode={editMode}
          openForm={handleOpenForm}
          closeForm={handleCloseForm}
          submitForm={handleSubmitForm}
          deleteActivity={handleDeleteActivity}
        />
      </Container>
    </Box>
  );
}

export default App;
