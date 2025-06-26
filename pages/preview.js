import { useRouter } from "next/router";

export default function Preview() {
  const router = useRouter();
  const { content } = router.query;

  return (
    <main className="p-8">
      <div className="max-w-3xl mx-auto bg-white p-6 rounded shadow">
        <h1 className="text-2xl font-bold mb-4">Your Website Preview</h1>
        <div className="whitespace-pre-wrap text-gray-800">{content}</div>
      </div>
    </main>
  );
}