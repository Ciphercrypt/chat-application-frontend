
import { useContext, useState } from "react";
import ConversationDetails from "../components/ConversationDetails";
import SideBar from "../components/SideBar";
import { ConversationContext } from "../context/ConversationContext";
import SendInvitePage from "../components/Invites/sendinvite";
import InvitesPage from "../components/Invites/allinvites";
import { createContext } from 'react';
import IconHome from "../components/Home";

const InviteContext = createContext("");


export default function Home() {
  const { conversation } = useContext(ConversationContext);
  const [sendinvite, setsendinvite] = useState(false);
  const [seeallinvites, setseeallinvites] = useState(false);

  



  return (
    
    <InviteContext.Provider value={{ sendinvite, setsendinvite, seeallinvites, setseeallinvites }}>
      <div className="flex justify-center">
        <div className="flex w-full xl:container h-screen xl:py-4">
          <SideBar
            setsendinvite={setsendinvite}
            setseeallinvites={setseeallinvites}
          />
          <div className="flex w-[70%] bg-[#222E35]">
            {!seeallinvites && !sendinvite && conversation.contactName ? (
              <ConversationDetails />
            ) : (
              <IconHome />
            )}
            {sendinvite && <SendInvitePage />}
            {seeallinvites && <InvitesPage />}
          </div>
        </div>
      </div>
      </InviteContext.Provider>
    
  );
}
