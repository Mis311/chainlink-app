// function generatePrompt(taskDescription, deadline, milestones) {
//   return `
//     Task Description: ${taskDescription}
//     Deadline: ${deadline}
//     Milestones: ${milestones ? 'Yes' : 'No'}

//     Based on the provided information, what is a recommended schedule for accomplishing this task? How much time should be allocated each day?

//     Additionally, can you suggest tasks that could be automated or helped with AI?

//     Lastly, could you provide some suggestions for focus sessions and seeking help in case of difficulties accomplishing the task?
//   `;
// }

// async function Completion (req, res) {
//     const { taskDescription, deadline, milestones } = req.body;
//     const prompt = generatePrompt(taskDescription, deadline, milestones);

//     try {
//       const completion = await openai.createCompletion({
//         model: "text-davinci-003",
//         prompt: prompt,
//         temperature: 0.6,
//         max_tokens: 100, // can changee
//       });

//       if (completion.data.choices && completion.data.choices.length > 0) {
//         res.status(200).json({ result: completion.data.choices[0].text });
//       } else {
//         throw new Error("No choices returned from OpenAI API.");
//       }
//     } catch(error) {
//       if (error.response) {
//         console.error(error.response.status, error.response.data);
//         res.status(error.response.status).json(error.response.data);
//       } else {
//         console.error(`Error with OpenAI API request: ${error.message}`);
//         res.status(500).json({
//           error: {
//             message: 'An error occurred during your request.',
//           }
//         });
//       }
//     }
//   }

// export default Completion

// import { Configuration, OpenAIApi } from "openai";
// import { NextApiHandler } from "next";

// const configuration = new Configuration({
//     apiKey: process.env.OPENAI_API_KEY,
//   });
//   const openai = new OpenAIApi(configuration);

// export default async function handler(req, res) {
//   if (req.method === 'POST') {
//     const { text, type, maxTokens } = req.body;

//     let prompt;

//     if (type === "feedback") {
//       // Feedback: compliment the text
//       prompt = `${text}\nAI, provide some positive feedback on the above text.`;
//     } else if (type === "suggestion") {
//       // Suggestion: ask for next steps
//       prompt = `${text}\nAI, suggest a few continuation for the above text.`;
//     } else {
//       return res.status(400).json({ error: "Invalid type. Type must be either 'feedback' or 'suggestion'." });
//     }

//     try {
//       const gptResponse = await openai.complete({
//         engine: 'text-davinci-002',
//         prompt,
//         maxTokens,
//       });

//       res.status(200).json({ text: gptResponse.data.choices[0].text.trim() });
//     } catch (error) {
//       res.status(500).json({ error: error.message });
//     }
//   } else {
//     // Handle any other HTTP method
//     res.setHeader('Allow', ['POST'])
//     res.status(405).end(`Method ${req.method} Not Allowed`)
//   }
// }

import { Configuration, OpenAIApi } from "openai";

const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});

const openai = new OpenAIApi(configuration);

function generatePrompt(text, type) {
  if (type === "feedback") {
    // Feedback: compliment the text
    return `${text}\nAI, provide some positive feedback on the above text.`;
  } else if (type === "suggestion") {
    // Suggestion: ask for next steps
    return `${text}\nAI, suggest a few continuation for the above text.`;
  }
}

async function generateText(req, res) {
  if (req.method === "POST") {
    const { text, type, maxTokens } = req.body;

    const prompt = generatePrompt(text, type);

    if (!prompt) {
      return res
        .status(400)
        .json({
          error:
            "Invalid type. Type must be either 'feedback' or 'suggestion'.",
        });
    }

    try {
      const gptResponse = await openai.createCompletion({
        model: "text-davinci-002",
        prompt: prompt,
        temperature: 0.6,
        max_tokens: maxTokens,
      });

      if (gptResponse.data.choices && gptResponse.data.choices.length > 0) {
        res
          .status(200)
          .json({ result: gptResponse.data.choices[0].text.trim() });
      } else {
        throw new Error("No choices returned from OpenAI API.");
      }
    } catch (error) {
      if (error.response) {
        console.error(error.response.status, error.response.data);
        res.status(error.response.status).json(error.response.data);
      } else {
        console.error(`Error with OpenAI API request: ${error.message}`);
        res.status(500).json({
          error: {
            message: "An error occurred during your request.",
          },
        });
      }
    }
  } else {
    // Handle any other HTTP method
    res.setHeader("Allow", ["POST"]);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}

export default generateText;
