import axios from "axios";

export default async function handler(req, res) {
  if (req.method === "POST") {
    const { input } = req.body;
    const apiKey = process.env.NEXT_PUBLIC_API_KEY;

    try {
      const response = await axios.post(
        "https://api.openai.com/v1/chat/completions",
        {
          model: "gpt-3.5-turbo",
          messages: [{ role: "user", content: input }],
        },
        {
          headers: {
            Authorization: `Bearer ${apiKey}`,
          },
        }
      );

      res.status(200).json({ result: response.data.choices[0].message.content });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  } else {
    res.status(405).json({ message: "Method not allowed" });
  }
}
