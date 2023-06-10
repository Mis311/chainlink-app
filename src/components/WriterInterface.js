import { useState, useEffect } from "react";
import dynamic from "next/dynamic";
import Link from "next/link";
const QuillNoSSRWrapper = dynamic(() => import("react-quill"), { ssr: false });
import "./WriterInterface.module.css";

export default function WriterInterface() {
  const [value, setValue] = useState("");
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
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
      const timeElapsed = (endTime - startTime) / 1000;
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
  }, [value, startTime]);

  const [aiResponse, setAIResponse] = useState("");

  const getAIResponse = async (type) => {
    const response = await fetch("/api/generateText", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        text: value,
        type: type, // either "feedback" or "suggestion", based on which button was pressed
        maxTokens: 60,
      }),
    });

    const data = await response.json();

    // Now data.text contains the response from the AI.
    // You can store this in a state variable to display it in your component.
    setAIResponse(data.text);
  };

  const createWorkInContract = () => {
    const web3 = new Web3(window.ethereum);
    const contractAddress = "0x7Df824b22756ef4a10E4351e76FA358bD1d862a3";
    const abi = []; // Replace contract ABI
    const contract = new web3.eth.Contract(abi, contractAddress);

    const createWorkInContract = async () => {
      try {
        const accounts = await window.ethereum.request({
          method: "eth_requestAccounts",
        });
        const account = accounts[0];

        await contract.methods
          .createWork(title, description, value)
          .send({ from: account });
      } catch (error) {
        console.error("An error occurred: ", error);
      }
    };
    //More to add
  };

  return (
    <div className="py-5">
      <h2 className="text-2xl font-bold mb-5">Compose your masterpiece</h2>

      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Title"
      />
      <input
        type="text"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        placeholder="Description"
      />

      <QuillNoSSRWrapper value={value} onChange={setValue} />

      <p>Typing speed: {typingSpeed} cps</p>
      <p>Reaction: {reaction}</p>
      <div className="space-x-2 mt-2">
        <button
          onClick={() => getAIResponse("inspiration")}
          className="btn btn-primary"
        >
          AI inspiration
        </button>
        <button
          onClick={() => getAIResponse("feedback")}
          className="btn btn-secondary"
        >
          AI feedback
        </button>
      </div>
      <div className="typewriter">{aiResponse}</div>
      <div className="space-x-2 mt-2">
        <Link href="/fundraising">
          <button
            onClick={() => createWorkInContract()}
            className="bg-blue-500 text-white px-4 py-2 rounded w-40"
          >
            Save & Submit
          </button>
        </Link>
      </div>
    </div>
  );
}
