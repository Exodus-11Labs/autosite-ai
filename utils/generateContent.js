export async function generateContent(businessType, location, name) {
  const prompt = `Write an SEO-friendly website for a small ${businessType} business named "${name}" in ${location}. Include:
- About us
- Services offered
- Contact info
- Short welcome headline`;

  const res = await fetch("https://api.openai.com/v1/chat/completions", {
    method: "POST",
    headers: {
      "Authorization": `Bearer ${process.env.OPENAI_API_KEY}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      model: "gpt-4",
      messages: [{ role: "user", content: prompt }],
      temperature: 0.7,
    }),
  });

  const data = await res.json();
  return data.choices[0].message.content;
};
