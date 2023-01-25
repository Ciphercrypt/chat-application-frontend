import React from "react";

import { KeyboardEvent, useContext, useEffect, useState } from "react";
import Avatar from "../Avatar";
import { ConversationContext } from "../../context/ConversationContext";
import ConversationList from "../ConversationList";
import InviteList from "../ConversationList/invitelist";
import conversations from "../../data.json";

export default function InvitesPage() {
  const [search, setSearch] = useState("");
  const [received, setrecieved] = useState(true);
  const [sent, setsent] = useState(false);

  const conversationsList = conversations.conversation_list;
  const filteredConversationsList =
    search.length > 0
      ? conversationsList.filter((InviteList) =>
          InviteList.contactName.toLowerCase().includes(search)
        )
      : conversationsList;

  const handleSubmit = (e) => {
    e.preventDefault();
    // Search for username code here
  };

  function HandleClickofheadsent() {
    setrecieved(false);
    setsent(true);
  }

  function HandleClickofheadrecieved() {
    setsent(false);
    setrecieved(true);
  }
  return (
    <div className="flex flex-col w-full ">
      <div className="flex justify-between w-full px-4">
        <div className="flex justify-between bg-[#202c33] w-full h-14">
          <div className="flex items-center gap-4 h-full">
            <h1 className="text-white font-normal">
              <div className="ml-8">All Invites</div>
            </h1>
          </div>
        </div>
      </div>
      <footer className="flex items-center bg-[#202c33] w-full h-16 py-3 text-[#8696a0]">
        <div className="ml-8">
          <button
            className={`px-4 py-2 text-sm font-medium text-white rounded-lg mr-2 hover:bg-black ${
              received ? "bg-green-500" : "bg-gray-700"
            }`}
            onClick={() => HandleClickofheadrecieved()}
          >
            Recieved
          </button>
          <button
            className={`px-4 py-2 text-sm font-medium text-white rounded-lg hover:bg-black ${
              sent ? "bg-green-500" : "bg-gray-700"
            }`}
            onClick={() => HandleClickofheadsent()}
          >
            Sent
          </button>
        </div>
      </footer>

      {received && (
        <div
          className="flex flex-col w-full overflow-y-scroll "
          id="conversation"
        >
         
          {filteredConversationsList.map((conversation, index) => {
            return (
              <InviteList
                key={index}
                isFirstConversation={index == 0}
                data={conversation}
                isSent={false}
              />
            );
          })}
        </div>
      )}

      {sent && (
        <div
          className="flex flex-col w-full overflow-y-scroll "
          id="conversation"
        >
      
          {filteredConversationsList.map((conversation, index) => {
            return (
              <InviteList
                key={index}
                isFirstConversation={index == 0}
                data={conversation}
                isSent={true}
              />
            );
          })}
        </div>
      )}

      <footer className="flex items-center bg-[#202c33] w-full h-16 py-3 text-[#8696a0]"></footer>
    </div>
  );
}
