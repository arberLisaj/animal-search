import { useEffect, useState } from "react";
function useUsersSearch() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const lastQuery = localStorage.getItem("lastQuery");
    search(lastQuery);
  }, []);

  const search = async (q) => {
    const response = await fetch(
      "http://localhost:8080?" + new URLSearchParams({ q })
    );
    const data = await response.json();
    setUsers(data);

    localStorage.setItem("lastQuery", q);
  };

  return { search, users };
}

export default useUsersSearch;
