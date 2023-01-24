import React, { useState } from 'react';
import Link from 'next/link';
import Avatar from '../Avatar';
const ProfilePage = () => {
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
                
            <div className="flex items-center">
            <Avatar width="w-10" height="w-10" image="avatar.jpg" />
            <div className="ml-4 text-lg font-medium text-white">Shantaram Kamble</div>
        </div>
            </div>
        </div>
    </div>
);

};

export default ProfilePage;
