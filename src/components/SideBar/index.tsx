import ConversationList from "../ConversationList";
import conversations from "../../data.json";
import { useState, useEffect } from "react";
import NotificationPanel from "../FloatingOptions";
import ProfilePage from "../FloatingOptions/Profilepage";
import SearchPeople from "../FloatingOptions/SearchPeople";
import axios from "axios";
import Avatar from "@mui/material/Avatar";
import AllConversations from "../ConversationList/AllConversations";

export default function SideBar({
  setsendinvite,
  setseeallinvites,
  setShowChat,
}) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [avatarImage, setAvatarImage] = useState("");
  useEffect(() => {
    // Fetch user info from the API using the email stored in localStorage
    const userEmail = localStorage.getItem("userEmail");
    fetch(`http://localhost:8080/api/user/info/${userEmail}`)
      .then((response) => response.json())
      .then((data) => {
        setName(data.name);
        setEmail(data.email);
        setAvatarImage(data.avatarUrl);
      })
      .catch((error) => console.error(error));
  }, []);

  const [friendsList, setFriendsList] = useState([]);
  useEffect(() => {
    const userEmail = localStorage.getItem("userEmail");
    const token = localStorage.getItem("token");
    async function fetchFriends() {
      const headers = {
        Accept: "*/*",
        Authorization: `Bearer ${token}`,
        username: userEmail as string,
      };

      const getFriends = await fetch(
        "http://localhost:8080/api/conversation/my-conversation",
        { headers }
      );
      const allFriends = await getFriends.json();

      const friendsData = await Promise.all(
        allFriends.map(
          async (friend: { email: any; name: any; avatarUrl: any }) => {
            const friendEmail = friend.email;
            const getLastMessage = await fetch(
              `http://localhost:8080/api/message/${friendEmail}/last-message`,
              { headers }
            );

            const LastMessage1= await getLastMessage.json();
            const obj = Object.entries(LastMessage1)


           const LastMessage = JSON.parse(JSON.stringify(LastMessage1));
           // const =JSON.parse(LastMessage1);

          //  if(getLastMessage.status==200){ console.log(
          //     "lastMessage of " +
          //       friendEmail +
          //       " => " +
          //       LastMessage
          //   );
          //  }
            let lastMessageIndex = -1;
            let lastMessageContent = '';
            if (getLastMessage.ok && Array.isArray(LastMessage.content) && LastMessage.content.length > 0) {
              const lastContent = LastMessage.content[LastMessage.content.length - 1];
              console.log("lastcontent="+lastContent);
              const content = lastContent.content || [];
              lastMessageContent = content.length > 0 ? content[content.length - 1].message : '';
            }
            
            return {
              myName: name,
              partnerEmail: friend.email,
              partnerName: friend.name,
              partnerAvatarUrl: friend.avatarUrl,
              LastMessage: lastMessageContent,
              lastMessageDate: getLastMessage.ok
                ? LastMessage?.date || null
                : null,
              me: getLastMessage.ok ? LastMessage?.author === userEmail : false,
            };
          }
        )
      );
      console.log("1");
      setFriendsList(friendsData);
      console.log(friendsData);
      console.log(friendsList);
      console.log("2");
    }

    fetchFriends();
  }, []);
  const conversationsList = conversations.conversation_list;
  const [search, setSearch] = useState("");
  const filteredConversationsList =
    search.length > 0
      ? conversationsList.filter((conversationList) =>
          conversationList.contactName.toLowerCase().includes(search)
        )
      : conversationsList;

  //console.log(filteredConversationsList)
  const [showprofile, setshowprofile] = useState(false);
  const [showaddPeople, setshowaddPeople] = useState(false);
  const [showinvite, setshowinvite] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleClick = (event) => {
      if (!event.target.closest("#sidebartop")) {
        setIsOpen(false);
      } else {
        setIsOpen(true);
      }
    };
    document.addEventListener("click", handleClick);
    return () => {
      document.removeEventListener("click", handleClick);
    };
  }, [setIsOpen]);

  function Handleclickofinvite() {
    if (!isOpen) setIsOpen(!isOpen);
    if (showprofile) {
      setshowprofile(!showprofile);
    }
    if (showaddPeople) {
      setshowaddPeople(!showaddPeople);
    }
    setshowinvite(!showinvite);
  }

  function Handleclickofprofile() {
    if (!isOpen) setIsOpen(!isOpen);
    if (showinvite) {
      setshowinvite(!showinvite);
    }
    if (showaddPeople) {
      setshowaddPeople(!showaddPeople);
    }
    setshowprofile(!showprofile);
  }

  function Handleclickofaddpeople() {
    if (!isOpen) setIsOpen(!isOpen);
    if (showinvite) {
      setshowinvite(!showinvite);
    }
    if (showprofile) {
      setshowprofile(!showprofile);
    }
    setshowaddPeople(!showaddPeople);
  }

  return (
    <div
      className="flex flex-col w-[480px] h-full bg-[#202c33]"
      style={{ borderRight: "1px solid rgba(134,150,160,0.15)" }}
    >
      <div
        className="flex items-center justify-between w-full px-4"
        id="sidebartop"
      >
        <div
          className="flex bg-[#202c33] w-full h-14 py-3 items-center"
          onClick={() => Handleclickofprofile()}
        >
          <div className="flex cursor-pointer">
            <Avatar src={avatarImage} />
          </div>
        </div>
        <div className="mr-20">
          {isOpen && showprofile && (
            <ProfilePage name={name} email={email} avatarUrl={avatarImage} />
          )}
        </div>

        <div className="flex gap-2">
          <div
            className="flex cursor-pointer w-10 h-10 items-center justify-center"
            onClick={() => Handleclickofaddpeople()}
          >
            <svg
              className="w-6 h-6 text-white"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 6v6m0 0v6m0-6h6m-6 0H6"
              ></path>
            </svg>
          </div>

          <div
            className="flex cursor-pointer w-10 h-10 items-center justify-center"
            onClick={() => Handleclickofinvite()}
          >
            <svg
              viewBox="0 0 24 24"
              width="24"
              height="24"
              className="text-[#AEBAC1]"
            >
              <path
                fill="currentColor"
                d="M12 7a2 2 0 1 0-.001-4.001A2 2 0 0 0 12 7zm0 2a2 2 0 1 0-.001 3.999A2 2 0 0 0 12 9zm0 6a2 2 0 1 0-.001 3.999A2 2 0 0 0 12 15z"
              ></path>
            </svg>
          </div>
          {showinvite && (
            <NotificationPanel
              setsendinvite={setsendinvite}
              setseeallinvites={setseeallinvites}
            />
          )}
        </div>
      </div>

      {showaddPeople && (
        <div className="flex bg-[#111b21] w-full h-max px-3 py-2">
          <div className="relative w-[95%] h-max">
            <div className="absolute text-[#AEBAC1] h-full w-9">
              <svg
                viewBox="0 0 24 24"
                width="24"
                height="24"
                className="left-[50%] right-[50%] ml-auto mr-auto h-full"
              >
                <path
                  fill="currentColor"
                  d="M15.009 13.805h-.636l-.22-.219a5.184 5.184 0 0 0 1.256-3.386 5.207 5.207 0 1 0-5.207 5.208 5.183 5.183 0 0 0 3.385-1.255l.221.22v.635l4.004 3.999 1.194-1.195-3.997-4.007zm-4.808 0a3.605 3.605 0 1 1 0-7.21 3.605 3.605 0 0 1 0 7.21z"
                ></path>
              </svg>
            </div>
            <div className="">
              <input
                className="w-[96%] h-9 rounded-lg bg-[#202c33] text-white text-sm px-10"
                placeholder="Search or start a new conversation"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
              />
            </div>
          </div>
          <div className="flex w-[5%] h-full items-center justify-center">
            <svg
              viewBox="0 0 24 24"
              width="20"
              height="20"
              preserveAspectRatio="xMidYMid meet"
              className="text-[#778690]"
            >
              <path
                fill="currentColor"
                d="M10 18.1h4v-2h-4v2zm-7-12v2h18v-2H3zm3 7h12v-2H6v2z"
              ></path>
            </svg>
          </div>
        </div>
      )}

      <div className="flex flex-col w-full overflow-y-scroll" id="conversation">
        {/* {chatData.map((conversation, index) => {
          return (        
            <ConversationList
              key={index}
              isFirstConversation={index == 0}
              data={conversation}
            />
          );
        })} */}

        {friendsList.map((conversation, index) => {
          return (
            <AllConversations
              key={index}
              isFirstConversation={index == 0}
              myName={conversation.myName}
              partnerEmail={conversation.partnerEmail}
              partnerName={conversation.partnerName}
              partnerAvatar={conversation.partnerAvatar}
              lastMessage={conversation.lastMessage}
              lastMessageDate={conversation.lastMessageDate}
              avatarUrl={conversation.avatarUrl}
              me={conversation.me}
              setShowChat={setShowChat}
            />
          );
        })}

        {/* {filteredConversationsList.map((conversation, index) => {
          return (
            <ConversationList
              key={index}
              isFirstConversation={index == 0}
              data={conversation}
              conversationEmail={}
            />

            
          );
        })} */}
      </div>
    </div>
  );
}
