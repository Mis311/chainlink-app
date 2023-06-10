import { Configuration, OpenAIApi } from "openai";

const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});
const openai = new OpenAIApi(configuration);

function generatePrompt(text, type) {
  if (type === "inspiration") {
    return `${text}\nAI, provide some inspirational feedback for the above text.`;
  } else if (type === "suggestion") {
    return `${text}\nAI, suggest a continuation for the above text.`;
  }
}

async function generateText(req, res) {
  const { text, type } = req.body;
  const prompt = generatePrompt(text, type);

  try {
    const textResponse = await openai.createCompletion({
      model: "text-davinci-003",
      prompt: prompt,
      temperature: 0.6,
      max_tokens: 100,
    });

    if (textResponse.data.choices && textResponse.data.choices.length > 0) {
      res.status(200).json({ result: textResponse.data.choices[0].text.trim() });
    } else {
      throw new Error("No choices returned from OpenAI API.");
    }
  } catch (error) {
    console.error(`Error with OpenAI API request: ${error.message}`);
    res.status(500).json({
      error: {
        message: "An error occurred during your request.",
      },
    });
  }
}

export default generateText;
