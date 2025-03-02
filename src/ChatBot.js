import { useState } from "react";
import { ai_content } from "./api_content";

const ChatBot = () => {
  const [messages, setMessages] = useState([
    { text: "Hello! How can I assist you today?", sender: "bot" }
  ]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);

    const API_KEY='sk-JFjJ134nDTT6meeizb9pufeqxvqKbdQ0zEwXLiDbBkT3BlbkFJ28gd4zd0rd57JWmNCkN-EFOwJ_tk0k50rsr406sa0A'

  const handleSend = async () => {
    if (!input.trim()) return;

    const userMessage = { text: input, sender: "user" };
    setMessages([...messages, userMessage]);
    setInput("");
    setLoading(true);

    try {
      const response = await fetch("https://api.openai.com/v1/chat/completions", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${API_KEY}`
        },
        body: JSON.stringify({
          model: "gpt-3.5-turbo",
          messages: [
            { role: "system", content: ai_content },
            ...messages.map(m => ({ role: m.sender === "user" ? "user" : "assistant", content: m.text })),
            { role: "user", content: input }
          ],
          max_tokens: 150
        })
      });

      const data = await response.json();
      const botMessage = { text: data.choices[0]?.message?.content || "I'm sorry, I couldn't generate a response.", sender: "bot" };

      setMessages(prevMessages => [...prevMessages, botMessage]);
    } catch (error) {
      console.error("Error fetching OpenAI response:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex flex-col w-full mt-6 bg-white p-4 rounded-lg shadow-md">
      <div className="flex-1 overflow-auto p-4 h-64">
        {messages.map((msg, index) => (
          <div key={index} className={`my-2 p-2 rounded-lg ${msg.sender === "user" ? "bg-blue-500 text-white self-end" : "bg-gray-300 text-black"}`}>
            {msg.text}
          </div>
        ))}
        {loading && <div className="text-gray-500">Typing...</div>}
      </div>

      <div className="flex p-2 bg-white rounded-lg mt-2">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          className="flex-1 p-2 border rounded-lg outline-none"
          placeholder="Type a message..."
          disabled={loading}
        />
        <button onClick={handleSend} className="ml-2 bg-blue-500 text-white px-4 py-2 rounded-lg" disabled={loading}>
          {loading ? "Sending..." : "Send"}
        </button>
      </div>
    </div>
  );
};

export default ChatBot;
