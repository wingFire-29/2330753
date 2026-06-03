# Stage 1

## Problem Statement

Implement a Priority Inbox for the Campus Notifications System that displays the top 10 most important unread notifications.

## Priority Determination

Notifications are assigned weights based on their type:

| Notification Type | Priority Weight |
| ----------------- | --------------- |
| Placement         | 3               |
| Result            | 2               |
| Event             | 1               |

Higher weight indicates higher priority.

## Sorting Strategy

Notifications are sorted using the following criteria:

1. Priority Weight (Descending)
2. Timestamp (Descending)

This ensures that:

* Placement notifications appear before Result notifications.
* Result notifications appear before Event notifications.
* Within the same type, newer notifications appear first.

## Algorithm

1. Fetch notifications from the Notification API.
2. Assign priority weights based on notification type.
3. Sort notifications by weight and timestamp.
4. Select the top 10 notifications using array slicing.

## Handling New Notifications

To efficiently maintain the Top 10 notifications as new notifications arrive:

* Use a Min Heap (Priority Queue) of size 10.
* Calculate the priority score of each incoming notification.
* Compare it with the root element.
* Replace the root if the new notification has higher priority.
* Maintain the heap size at 10.

## Time Complexity

* Sorting: O(N log N)
* Top 10 Selection: O(10)
* Heap Insertion: O(log 10)

## Logging

All API interactions and application events are logged using the provided logging middleware:

Log("frontend", level, packageName, message)

No console.log statements are used.

