export default function handler(req, res) {
    console.log("OPENAI_API_KEY:", process.env.OPENAI_API_KEY);
    res.status(200).json({ success: true, message: "API key logged to the console." });
}
