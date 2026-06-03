import { useEffect, useState } from "react";
import { fetchNotifications } from "./services/notifications";
import { getTopNotifications } from "./utils/priority";

function App() {
  const [notifications, setNotifications] = useState([]);

  useEffect(() => {
    const loadNotifications = async () => {
      try {
        const data = await fetchNotifications();
        const top10 = getTopNotifications(data, 10);
        setNotifications(top10);
      } catch (error) {
        alert("Failed to fetch notifications");
      }
    };

    loadNotifications();
  }, []);

  return (
    <div style={{ padding: "20px" }}>
      <h1>Top 10 Priority Notifications</h1>

      {notifications.map((n) => (
        <div
          key={n.ID}
          style={{
            border: "1px solid #ccc",
            margin: "10px 0",
            padding: "10px",
          }}
        >
          <h3>{n.Type}</h3>
          <p>{n.Message}</p>
          <small>{n.Timestamp}</small>
        </div>
      ))}
    </div>
  );
}

export default App;