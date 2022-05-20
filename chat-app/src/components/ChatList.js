import styles from './style.module.css'
import { useChat } from "../contexts/ChatContext";
import ChatItem from "./ChatItem";


function ChatList() {
	const { messages } = useChat();

	return (
		<div className={styles.chatlist}>
			<div>
				{messages.map((item, key) => (
					<ChatItem key={key} item={item} />
				))}
			</div>
		</div>
	);
}

export default ChatList;