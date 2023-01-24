import React, { useState } from 'react';
import Link from 'next/link';

const InvitesPage = () => {
  const [sentInvites, setSentInvites] = useState([
    { id: 1, email: 'person1@example.com', status: 'pending' },
    { id: 2, email: 'person2@example.com', status: 'accepted' },
    { id: 3, email: 'person3@example.com', status: 'declined' },
  ]);

  const [incomingInvites, setIncomingInvites] = useState([
    { id: 4, from: 'person4@example.com', status: 'pending' },
    { id: 5, from: 'person5@example.com', status: 'accepted' },
    { id: 6, from: 'person6@example.com', status: 'declined' },
  ]);

  return (
    <div className="mx-auto p-4 max-w-screen-md">
      <h1 className="text-2xl font-medium text-gray-800 mb-4">Invites</h1>
      <h2 className="text-lg font-medium text-gray-800 mb-4">Sent Invites</h2>
      <div className="bg-gray-200 rounded-lg p-4">
        {sentInvites.map((invite) => (
          <div key={invite.id} className="border-b border-gray-300 py-2">
            <div className="flex items-center justify-between">
              <div className="text-gray-700">{invite.email}</div>
              <div className="text-gray-500">{invite.status}</div>
            </div>
          </div>
        ))}
      </div>
      <h2 className="text-lg font-medium text-gray-800 my-4">Incoming Invites</h2>
      <div className="bg-gray-200 rounded-lg p-4">
        {incomingInvites.map((invite) => (
          <div key={invite.id} className="border-b border-gray-300 py-2">
            <div className="flex items-center justify-between">
              <div className="text-gray-700">{invite.from}</div>
              <div className="text-gray-500">{invite.status}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default InvitesPage;
