import React from "react";



import { KeyboardEvent, useContext, useEffect, useState } from "react";
import Avatar from "../Avatar";
import { ConversationContext } from "../../context/ConversationContext";


export default function SendInvitePage() {
  
  const [username, setUsername] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Search for username code here
  };

 

  return (
    
    <div className="flex flex-col w-full ">
      <div className="flex justify-between w-full px-4">
        <div className="flex justify-between bg-[#202c33] w-full h-14">
          <div className="flex items-center gap-4 h-full">
          
            <h1 className="text-white font-normal">Send Invites</h1>
          </div>
         

        </div>
      </div>

      <form onSubmit={handleSubmit} className="bg-dark p-6 rounded-lg shadow-md items-center mt-40">
      <div className="my-4">
        <label className="block text-white font-medium mb-2">
          Search Username
        </label>
        <input
          className="w-full border border-gray-400 p-2 rounded-lg"
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
      </div>
      <button className="bg-indigo-500 text-white p-2 rounded-lg hover:bg-indigo-600 w-full  ">
    Search
</button>
    </form>
    
      <footer className="flex items-center bg-[#202c33] w-full h-16 py-3 text-[#8696a0]"></footer>
    </div>
  );
}

