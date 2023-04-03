import {
  MultiChatSocket,
  MultiChatWindow,
  useMultiChatLogic,
} from "react-chat-engine-advanced";
const ChatsPage = (props) => {
  const chatProps = useMultiChatLogic(
    '221a8835-71fc-4cdb-af63-130594dc6b32',
    props.user.username,
    props.user.secret
  );
  return (
    <div style={{ height: "100vh" }}>
      <MultiChatSocket {...chatProps} />
      <MultiChatWindow {...chatProps} style={{ height: "100%" }} />
    </div>
  );
};
export default ChatsPage;
