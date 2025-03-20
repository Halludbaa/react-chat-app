import { useEffect, useState } from "react";
import API from "../../services/api";
import { useSelector } from "react-redux";
import { RootState } from "../../states/store";
import { Link } from "react-router";

const ChatPage = () => {
  const [chats, setChat] = useState<any[]>([]);
  const user: any = useSelector((state: RootState) => state.auth.user);
  useEffect(() => {
    (async () => {
      try {
        const res = await API.get("/api/chat/");
        const chat = res.data.chat;
        if (chat) {
          setChat(chat);
        }
      } catch (err: any) {
        console.info(err);
      }
    })();
  }, []);

  return (
    <>
      <div>
        {chats.map((chat, idx) => (
          <div className="flex flex-row p-4 items-center gap-2">
            <span className="rounded-full size-12 bg-amber-900 block">
              {/* picture */}
            </span>
            <Link to={`/chat/${chat.id}`} key={idx} className="text-xl">
              {chat.user[0].id != user.username
                ? chat.user[0].id
                : chat.user[1].id}
            </Link>
          </div>
        ))}
      </div>
    </>
  );
};

export default ChatPage;
