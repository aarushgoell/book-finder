import axios from "axios";
import { useState, useEffect } from "react";

function useGetBooks(prompt) {
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (!prompt) return;

    const fetchBooks = async () => {
      setLoading(true);
      try {
        const resp = await axios.post(
          "https://book-finder-dotc.onrender.com/api/books",
          {
            prompt: prompt,
          }
        );
        setBooks(resp.data);
      } catch (err) {
        console.error("Error fetching books:", err);
        setBooks([]);
      } finally {
        setLoading(false);
      }
    };

    fetchBooks();
  }, [prompt]);

  return [books, loading];
}

export default function App() {
  const [prompt, setPrompt] = useState("");
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearch = () => {
    setSearchTerm(prompt);
  };

  return (
    <div className="p-6 bg-gray-100 min-h-screen text-center">
      <h1 className="text-3xl font-bold mb-4">📚 Book Finder</h1>
      <input
        type="text"
        className="border p-2 rounded w-2/3"
        placeholder="Enter a theme (e.g., sci-fi with aliens)"
        value={prompt}
        onChange={(e) => setPrompt(e.target.value)}
      />
      <button
        onClick={handleSearch}
        className="ml-2 px-4 py-2 bg-blue-600 text-white rounded"
      >
        Search
      </button>

      <DisplayBooks prompt={searchTerm} />
    </div>
  );
}

function DisplayBooks({ prompt }) {
  const [books, loading] = useGetBooks(prompt);

  if (loading) return <p className="mt-4">🔄 Searching books...</p>;

  if (!books.length)
    return <p className="mt-4">📭 No books yet. Try a prompt!</p>;

  return (
    <div className="grid gap-4 mt-6">
      {books.map((book, i) => (
        <SingleBook key={i} count={i + 1} {...book} />
      ))}
    </div>
  );
}

function SingleBook({ title, summary, genre, count }) {
  return (
    <div className="bg-white p-4 rounded shadow text-left">
      <h2 className="text-lg font-semibold">
        {count}. {title}
      </h2>
      <p className="text-gray-700 mt-1">{summary}</p>
      <p className="text-sm text-purple-500 font-medium">Genre: {genre}</p>
    </div>
  );
}
