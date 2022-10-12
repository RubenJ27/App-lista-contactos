import React, { useEffect, useState } from "react";
import { Card } from "./components/Card";

export const App = () => {
  const [users, setUsers] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    contact();
  }, []);

  const contact = async () => {
    const response = await fetch("https://randomuser.me/api/?results=10");
    const data = await response.json();
    setUsers(data.results);
    /* console.log(data.results); */
  };

  return (
    <div className="flex flex-col items-center mt-16 p-8">
      <input
        type="text"
        placeholder="Buscar usuario..."
        className="w-full bg-white border-2 border-gray-400 rounded-lg py-2 px-4 mb-4"
        onChange={(e) => setSearch(e.target.value)}
      />
      {users
        .filter((user) => {
          if (search === "") {
            return user;
          } else if (
            user.name.first.toLowerCase().includes(search.toLowerCase()) || user.name.last.toLowerCase().includes(search.toLowerCase()) || user.email.toLowerCase().includes(search.toLowerCase()) || user.cell.includes(search.toLowerCase())
          ) {
            return user;
          }
        })
        .map((user) => (
          <Card
            key={user.email}
            image={user.picture.large}
            Name={`${user.name.first} ${user.name.last}`}
            email={user.email}
            phone={user.cell}
          />
        ))}
    </div>
  );
};
