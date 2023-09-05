import useUsersSearch from "./hooks/useUsersSearch";

const App = () => {
  const { search, users } = useUsersSearch();
  return (
    <main className="flex justify-center items-center h-screen p-2">
      <div className="bg-white w-full border-2 rounded-sm  shadow-md max-w-[700px] h-[80vh] overflow-y-scroll">
        <header className="p-2 sticky top-0 bg-white">
          <input
            className="w-full outline-none rounded-sm bg-gray-100 p-2"
            type="text"
            placeholder="Search"
            autoFocus
            name="search"
            onChange={(e) => search(e.target.value)}
          />
        </header>

        <ul className="px-2 mt-2">
          {users.map((user) => (
            <User key={user.id} {...user} />
          ))}
          {users.length === 0 && <p className="py-3 ">No users found</p>}
        </ul>
      </div>
    </main>
  );
};

function User({ name, city }) {
  return (
    <li className="border-b flex justify-between py-1 px-2 cursor-pointer hover:bg-gray-100">
      <span className="font-[500]">{name}</span>
      <span className="text-sm">{city}</span>
    </li>
  );
}

export default App;
