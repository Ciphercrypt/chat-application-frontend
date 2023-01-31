import { useContext,useState ,useEffect} from "react";
import ConversationDetails from "../components/ConversationDetails";
import SideBar from "../components/SideBar";
import { ConversationContext } from "../context/ConversationContext";
import SendInvitePage from "../components/Invites/sendinvite";
import InvitesPage from "../components/Invites/allinvites";
import IconHome from "../components/Home";
import LoginScreen from "../components/auth/login";

export default function Home() {
  const { conversation } = useContext(ConversationContext);
  const [sendinvite, setsendinvite] = useState(false);
  const [homechat, sethomechat] = useState(true);
  const [seeallinvites, setseeallinvites] = useState(false);

  // if(sendinvite) {
  //   console.log("sendinvite",sendinvite);
  //   console.log("seeallinvites",seeallinvites);
  // }
  // if(seeallinvites) {
  //   console.log("seeallinvites",seeallinvites);
  //   console.log("sendinvite",sendinvite);
  // }

  // if(conversation.contactName) {
  //   console.log("conversation.contactName",conversation.contactName);
  //   console.log("seeallinvites",seeallinvites);
  //   console.log("sendinvite",sendinvite);
  // }
  useEffect(() => {
    if(sendinvite)  {
      sethomechat(false);
    }
  }, [sendinvite]);

  useEffect(() => {
    if(seeallinvites)  {
      sethomechat(false);
    }
  }, [seeallinvites]);


  useEffect(() => {
    if(conversation.contactName)  {
      sethomechat(true);
      setseeallinvites(false);
      setsendinvite(false);
    }
  }, [conversation.contactName]);

  return (
    <>
         
         <LoginScreen />
{/* 
         
 <div className="flex justify-center">
      
      <div className="flex w-full xl:container h-screen xl:py-4">
        <SideBar

setsendinvite={setsendinvite}
setseeallinvites={setseeallinvites}

        
        />
        <div className="flex w-[70%] bg-[#222E35]">
          {  homechat &&
            conversation.contactName
              ? <ConversationDetails />
              : homechat && <IconHome />
          }
        {sendinvite &&   <SendInvitePage />}
          {seeallinvites  &&   <InvitesPage /> }
        </div>
      </div>
    </div>  */}

    </>
   
    
  )
}