'use client';

import { useState } from "react";
import axios from "axios";

export default function Home() {
  const [target, setTarget] = useState("");
  const [results, setResults] = useState<number[][]>([]);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    try {
      const response = await axios.post("http://localhost:8000/combinations", {
        target: parseInt(target),
      });
      setResults(response.data.combinations);
    } catch (error) {
      console.error("Error fetching combinations:", error);
      setResults([]);
    }
    setLoading(false);
  };

  return (
    <main style={{ padding: 32 }}>
      <h1>Find Combinations for a Target Sum</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="number"
          value={target}
          onChange={(e) => setTarget(e.target.value)}
          placeholder="Enter target sum"
          required
        />
        <button type="submit">Find</button>
      </form>

      {loading && <p>Loading...</p>}

      <div style={{ marginTop: 20 }}>
        {results.length > 0 ? (
          <ul>
            {results.map((combo, index) => (
              <li key={index}>{combo.join(" + ")} = {target}</li>
            ))}
          </ul>
        ) : (
          !loading && <p>No combinations found.</p>
        )}
      </div>
    </main>
  );
}
