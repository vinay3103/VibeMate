// netlify/functions/chat.js
export default async (req, context) => {
  // 1. Security Check: Ensure POST request
  if (req.method !== "POST") {
    return new Response("Method Not Allowed", { status: 405 });
  }

  try {
    // 2. Parse User Input
    const { message, history, emotion } = await req.json();
    
    // 3. Construct System Prompt based on emotion/context
    const systemPrompt = `You are a helpful, empathetic AI assistant named VibeMate. 
    The user is currently feeling: ${emotion || 'neutral'}. 
    Respond in a conversational, human-like manner. Keep responses concise (under 2 sentences) for speech synthesis.`;

    // 4. Call Groq API
    const response = await fetch("https://api.groq.com/openai/v1/chat/completions", {
      method: "POST",
      headers: {
        "Authorization": `Bearer ${process.env.GROQ_API_KEY}`, // Uses key from Netlify Settings
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        model: "llama-3.3-70b-versatile",
        messages: [
            { role: "system", content: systemPrompt },
            ...history, // Include previous chat context
            { role: "user", content: message }
        ],
        temperature: 0.7,
        max_tokens: 100
      })
    });

    if (!response.ok) {
        const err = await response.text();
        console.error("Groq API Error:", err);
        throw new Error(`Groq API Error: ${response.statusText}`);
    }

    const data = await response.json();
    const reply = data.choices[0].message.content;

    // 5. Return Response to Frontend
    return new Response(JSON.stringify({ reply }), {
      headers: { "Content-Type": "application/json" }
    });

  } catch (error) {
    console.error("Function Error:", error);
    return new Response(JSON.stringify({ reply: "I'm having trouble connecting to my brain right now. Please try again." }), {
      status: 500,
      headers: { "Content-Type": "application/json" }
    });
  }
};
