"use client";

import { useEffect, useState } from "react";
import AdvocatesTable from "./components/advocates-table/AdvocatesTable";
import { Advocate } from "./types/types";

export default function Home() {
  const [advocates, setAdvocates] = useState<Advocate[]>([]);
  const [filteredAdvocates, setFilteredAdvocates] = useState<Advocate[]>([]);
  const [searchTerm, setSearchTerm] = useState<string>("");

  useEffect(() => {
    console.log("fetching advocates...");
    fetch("/api/advocates").then((response) => {
      response.json().then((jsonResponse) => {
        setAdvocates(jsonResponse.data);
        setFilteredAdvocates(jsonResponse.data);
      });
    });
  }, []);

  const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value.toLowerCase());

    console.log("filtering advocates...");
    const filteredAdvocates = advocates.filter((advocate: Advocate) => {
      return (
        advocate.firstName.toLowerCase().includes(searchTerm) ||
        advocate.lastName.toLowerCase().includes(searchTerm) ||
        advocate.city.toLowerCase().includes(searchTerm) ||
        advocate.degree.toLowerCase().includes(searchTerm) ||
        advocate.specialties.some((specialty: string) =>
          specialty.toLowerCase().includes(searchTerm)
        ) ||
        advocate.yearsOfExperience.toString().toLowerCase().includes(searchTerm)
      );
    });

    setFilteredAdvocates(filteredAdvocates);
  };

  const onClick = () => {
    console.log(advocates);
    setFilteredAdvocates(advocates);
    setSearchTerm("");
  };

  return (
    <main className="p-4 bg-gray-200">
      <h1 className="mb-4 text-2xl font-bold">Solace Advocates</h1>
      <div className="mb-4 text-white border-2 border-gray-300 rounded-md p-4 bg-gradient-to-b from-emerald-500 to-black">
        <p>Search</p>
        <p>Searching for: {searchTerm}</p>
        <input style={{ border: "1px solid black" }} onChange={onChange} />
        <button onClick={onClick}>Reset Search</button>
      </div>
      <AdvocatesTable filteredAdvocates={filteredAdvocates} />
    </main>
  );
}
