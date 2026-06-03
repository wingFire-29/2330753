import { useEffect } from "react";
import { Log } from "./logger/logger";

function App() {
  useEffect(() => {
    Log(
      "frontend",
      "info",
      "page",
      "Application started successfully"
    );
  }, []);

  return (
    <div>
      <h1>Campus Notification System</h1>
    </div>
  );
}

export default App;