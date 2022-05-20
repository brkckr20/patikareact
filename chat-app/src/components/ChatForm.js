import { useState } from "react";

import styles from "./style.module.css";
import { sendMessage } from "../socketApi";
import { useChat } from "../contexts/ChatContext";

function ChatForm() {
	const [message, setMessage] = useState("");

	const { setMessages } = useChat();

	const handleSubmit = (e) => {
		e.preventDefault();
		console.log(message);

		setMessages((prevState) => [...prevState, { message, fromMe: true }]);
		sendMessage(message);
		setMessage("");
	};

	return (
		<div>
			<form onSubmit={handleSubmit}>
				<input
					className={styles.textInput}
					value={message}
					onChange={(e) => setMessage(e.target.value)}
				/>
			</form>
		</div>
	);
}

export default ChatForm;