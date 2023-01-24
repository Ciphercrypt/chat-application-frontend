import React, { useState } from 'react';
import Link from 'next/link';

const NotificationPanel = () => {
const [notifications, setNotifications] = useState([
{ id: 1, message: "A new user has signed up", read: false },
{ id: 2, message: "An order has been placed", read: true },
{ id: 3, message: "A payment has been received", read: false },
]);

const handleNotificationClick = (id: number) => {
    setNotifications(notifications.map(notification => {
        if (notification.id === id) {
            return { ...notification, read: true };
        }
        return notification;
    }));
};

return (
    <div className="relative flex flex-col  mt-10 ">
        <div className="absolute right-0 z-10 w-56 bg-black rounded-md shadow-lg">
            <div className="py-1">
                {notifications.map(notification => (
                    <Link href="#" key={notification.id}>
                        <a
                            className={`block px-4 py-2 text-gray-100 hover:bg-gray-700 ${notification.read ? 'bg-gray-700' : 'bg-black'}`}
                            onClick={() => handleNotificationClick(notification.id)}>
                            {notification.message}
                        </a>
                    </Link>
                ))}
            </div>
        </div>
    </div>
);

};

export default NotificationPanel;
