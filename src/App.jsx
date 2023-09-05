import useUsersSearch from "./hooks/useUsersSearch";
function App() {
  const { search, users } = useUsersSearch();

  return (
    <main>
      <input
        type="text"
        placeholder="Search"
        autoFocus
        onChange={(e) => search(e.target.value)}
      />

      <ul>
        {users.map((user) => (
          <Animal key={user.id} {...user} />
        ))}

        {users.length === 0 && "No animals found"}
      </ul>
    </main>
  );
}

function Animal({ name, age }) {
  return (
    <li>
      <strong>{name}</strong> ({age} years old)
    </li>
  );
}

export default App;
