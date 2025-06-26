import { useState } from "react";
import { useRouter } from "next/router";
import { generateContent } from "../utils/generateContent";

export default function Home() {
  const [name, setName] = useState("");
  const [type, setType] = useState("");
  const [location, setLocation] = useState("");
  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const content = await generateContent(type, location, name);
    router.push({
      pathname: "/preview",
      query: { content: content },
    });
  };

  return (
    <main className="min-h-screen flex items-center justify-center p-6 bg-gray-100">
      <form className="bg-white p-6 rounded shadow w-full max-w-md space-y-4" onSubmit={handleSubmit}>
        <h1 className="text-xl font-bold">AutoSite AI</h1>
        <input placeholder="Business Name" value={name} onChange={(e) => setName(e.target.value)} className="w-full border p-2" />
        <input placeholder="Business Type" value={type} onChange={(e) => setType(e.target.value)} className="w-full border p-2" />
        <input placeholder="Location (City, Country)" value={location} onChange={(e) => setLocation(e.target.value)} className="w-full border p-2" />
        <button type="submit" className="w-full bg-blue-500 text-white p-2 rounded">Generate Website</button>
      </form>
    </main>
  );
}