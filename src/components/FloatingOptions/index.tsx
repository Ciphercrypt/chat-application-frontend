import React, { useState } from 'react';
import Link from 'next/link';

const NotificationPanel = () => {
const [notifications, setNotifications] = useState([
{ id: 1, text: "Send Invite", read: false },
{ id: 2, text: "See All Invites", read: true },

]);

const handleNotificationClick = (id: number) => {
    setNotifications(notifications.map(notification => {
        if (notification.id === id) {
            return { ...notification, read: true };
        }else
        {
            return { ...notification, read: false };
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
                            {notification.text}
                        </a>
                    </Link>
                ))}
            </div>
        </div>
    </div>
);

};

export default NotificationPanel;
