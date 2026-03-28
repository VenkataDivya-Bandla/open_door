import Groq from "groq-sdk";

const GROQ_API_KEY = import.meta.env.VITE_GROQ_API_KEY;

const groq = new Groq({ apiKey: GROQ_API_KEY });

async function main() {
    try {
        const chatCompletion = await groq.chat.completions.create({
            messages: [{ role: "user", content: "Hello" }],
            model: "llama3-8b-8192",
        });

        console.log("Success:", chatCompletion.choices[0]?.message?.content);
    } catch (error) {
        console.error("Error:", error);
    }
}

main();
