import { useState, useEffect } from "react";
import dynamic from "next/dynamic";

const QuillNoSSRWrapper = dynamic(() => import("react-quill"), { ssr: false });

export default function WriterInterface() {
  const [value, setValue] = useState("");
  const [startTime, setStartTime] = useState(null);
  const [typingSpeed, setTypingSpeed] = useState(0);
  const [reaction, setReaction] = useState("");

  useEffect(() => {
    if (value.length === 0) {
      setStartTime(null);
      setReaction("");
    } else if (startTime === null) {
      setStartTime(Date.now());
    } else {
      const endTime = Date.now();
      const timeElapsed = (endTime - startTime) / 1000; // time in seconds
      const speed = value.length / timeElapsed; // characters per second

      setTypingSpeed(speed);

      if (speed > 10) {
        setReaction("😄 Great progress! Keep going!");
      } else if (speed > 5) {
        setReaction("😊 Looking good! Stay focused!");
      } else {
        setReaction("🤔 Thinking in progress...");
      }
    }
  }, [value]);

  // Call this function to get AI's response
  const getAIResponse = async (type) => {
    const response = await fetch(`/api/chatbot/${type}`, {
      method: "POST",
      body: JSON.stringify({ text: value }),
    });
    const data = await response.json();

    setReaction(data.message);
  };

  return (
    <div className="py-5">
      <h2 className="text-2xl font-bold mb-5">Compose your masterpiece</h2>
      <QuillNoSSRWrapper value={value} onChange={setValue} />
      <p>Typing speed: {typingSpeed} cps</p>
      <p>Reaction: {reaction}</p>

      <div className="space-x-2 mt-2">
        <button
          onClick={() => getAIResponse("inspiration")}
          className="btn btn-primary"
        >
          Get AI inspiration
        </button>
        <button
          onClick={() => getAIResponse("feedback")}
          className="btn btn-secondary"
        >
          Get AI feedback
        </button>
      </div>
    </div>
  );
}
