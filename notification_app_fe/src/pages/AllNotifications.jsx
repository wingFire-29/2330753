import { useEffect, useState } from "react";
import { Typography, Card, CardContent } from "@mui/material";
import { fetchNotifications } from "../services/notifications";

function AllNotifications() {
  const [notifications, setNotifications] = useState([]);

  useEffect(() => {
    const loadNotifications = async () => {
      try {
        const data = await fetchNotifications();
        setNotifications(data);
      } catch (error) {
        alert("Failed to load notifications");
      }
    };

    loadNotifications();
  }, []);

  return (
    <div style={{ padding: "20px" }}>
      <Typography variant="h2" gutterBottom>
        All Notifications
      </Typography>

      {notifications.map((notification) => (
        <Card
          key={notification.ID}
          sx={{ marginBottom: 2 }}
        >
          <CardContent>
            <Typography variant="h5">
              {notification.Type}
            </Typography>

            <Typography>
              {notification.Message}
            </Typography>

            <Typography variant="body2">
              {notification.Timestamp}
            </Typography>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}

export default AllNotifications;