const express = require("express");
const axios = require("axios");
const dotenv = require("dotenv");
const cors = require("cors");

dotenv.config();

const app = express();
const port = 5000;

app.use(cors());
app.use(express.json());

app.get('/health', (req, res) => {
    res.send('OK');
});

app.post("/api/chat", async (req, res) => {
    const { message } = req.body;

    if (!message) {
        return res.status(400).json({ error: "Message is required" });
    }


    try {
        const response = await axios.post(
            "https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash-lite:generateContent",
            {
                contents: [
                    {
                        parts: [
                            {
                                text: message,
                            },
                        ],
                    },
                ],
            },
            {
                headers: {
                    "X-goog-api-key": process.env.GEMINI_API_KEY,
                    "Content-Type": "application/json",
                },
            }
        );

        console.log("Gemini API response:", response.data);

        const botReply = response.data.candidates[0]?.content?.parts[0]?.text;

        if (!botReply) {
            throw new Error("No valid reply received from the Gemini API");
        }

        const result = botReply
            .replace(/^```[a-z]*\s*/i, "")
            .replace(/\s*```$/, "")
            .trim();

        return res.json({ reply: result });
    } catch (error) {
        console.error("Error communicating with the Gemini API:", error);
        return res.status(500).json({ error: "Something went wrong. " + error.message });
    }
});




// Start the server
app.listen(port, () => {
    console.log(`Backend running on http://localhost:${port}`);
});




