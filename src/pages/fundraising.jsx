import { useState } from "react";

export default function StartFundraise() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [numberOfWords, setNumberOfWords] = useState("");
  const [reason, setReason] = useState("");
  const [amount, setAmount] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();

    // const response = await contract.methods.createWork(title, description, numberOfWords).send({ from: account });

    console.log("Fundraising started for work:", title);
  };

  return (
    <div>
      <h1>Start a Fundraise</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Title:
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </label>
        <label>
          Description:
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </label>
        <label>
          Number of Words:
          <input
            type="text"
            value={numberOfWords}
            onChange={(e) => setNumberOfWords(e.target.value)}
          />
        </label>
        <label>
          Reason:
          <select value={reason} onChange={(e) => setReason(e.target.value)}>
            <option value="option1">Option 1</option>
            <option value="option2">Option 2</option>
            <option value="option3">Option 3</option>
          </select>
        </label>
        <label>
          Amount:
          <input
            type="number"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
          />
        </label>
        <button type="submit">Start Fundraising</button>
      </form>
    </div>
  );
}
