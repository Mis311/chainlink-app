import { OpenAI } from "openai";

const openai = new OpenAI(process.env.OPENAI_API_KEY);

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { text, type, maxTokens } = req.body;
    

    let prompt;

    if (type === "feedback") {
      // Feedback: compliment the text
      prompt = `${text}\nAI, provide some positive feedback on the above text.`;
    } else if (type === "suggestion") {
      // Suggestion: ask for next steps
      prompt = `${text}\nAI, suggest a few continuation for the above text.`;
    } else {
      return res.status(400).json({ error: "Invalid type. Type must be either 'feedback' or 'suggestion'." });
    }

    try {
      const gptResponse = await openai.complete({
        engine: 'text-davinci-002',
        prompt,
        maxTokens,
      });

      res.status(200).json({ text: gptResponse.data.choices[0].text.trim() });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  } else {
    // Handle any other HTTP method
    res.setHeader('Allow', ['POST'])
    res.status(405).end(`Method ${req.method} Not Allowed`)
  }
}
