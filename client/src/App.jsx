import { useState, useEffect } from "react";

function App() {
  const { search, animals } = useSearch();

  return (
    <>
      <input
        type="text"
        placeholder="searh animal..."
        autoFocus
        name="search"
        onChange={(e) => search(e.target.value)}
      />
      <ul>
        {animals.map((a) => (
          <Animal key={a.id} {...a} />
        ))}
        {animals.length === 0 && <li className="px-2">No such animal.</li>}
      </ul>
    </>
  );
}

// Animal component
function Animal({ name, age }) {
  return (
    <li>
      <span>{name}</span>
      <span>{age} years old</span>
    </li>
  );
}

export default App;

// Fetching animals from our server
function useSearch() {
  const [animals, setAnimals] = useState([]);

  useEffect(() => {
    const lastQuery = localStorage.getItem("lastQuery");
    search(lastQuery);
  }, []);

  async function search(q) {
    const response = await fetch(
      "http://localhost:8080?" + new URLSearchParams({ q })
    );
    const data = await response.json();
    setAnimals(data);
    localStorage.setItem("lastQuery", q);
  }

  return { search, animals };
}
