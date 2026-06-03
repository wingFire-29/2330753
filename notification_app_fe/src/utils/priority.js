export const getPriorityWeight = (type) => {
  switch (type) {
    case "Placement":
      return 3;
    case "Result":
      return 2;
    case "Event":
      return 1;
    default:
      return 0;
  }
};

export const getTopNotifications = (notifications, n = 10) => {
  return [...notifications]
    .sort((a, b) => {
      const weightDiff =
        getPriorityWeight(b.Type) -
        getPriorityWeight(a.Type);

      if (weightDiff !== 0) {
        return weightDiff;
      }

      return (
        new Date(b.Timestamp) -
        new Date(a.Timestamp)
      );
    })
    .slice(0, n);
};