import ollama from "ollama";

export default async function Home() {
  const response = await ollama.chat({
    model: "llama3.1",
    messages: [{ role: "user", content: "Why is the sky blue?" }],
  });

  return <main>{response.message.content}</main>;
}
