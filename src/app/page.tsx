"use client";

import { useEffect, useState } from "react";
import AdvocatesTable from "./Features/advocates-table/AdvocatesTable";
import { Advocate } from "./types/types";
import SearchBar from "./Features/search-bar/SearchBar";

export default function Home() {
  const [advocates, setAdvocates] = useState<Advocate[]>([]);
  const [filteredAdvocates, setFilteredAdvocates] = useState<Advocate[]>([]);
  const [searchTerm, setSearchTerm] = useState<string>("");

  const fetchAdvocates = async () => {
    try {
      const response = await fetch("/api/advocates");
      if (!response.ok) {
        throw new Error(`Failed to fetch advocates: ${response.statusText}`);
      }
      const jsonResponse = await response.json();
      setAdvocates(jsonResponse.data);
      setFilteredAdvocates(jsonResponse.data);
    } catch (error) {
      console.error("Error fetching advocates:", error);
    }
  };

  useEffect(() => {
    console.log("fetching advocates...");
    fetchAdvocates();
  }, []);

  return (
    <main className="p-4 bg-gray-200">
      <h1 className="mt-4 mb-4 text-2xl font-bold">Solace Advocates</h1>
      <SearchBar
        advocates={advocates}
        setFilteredAdvocates={setFilteredAdvocates}
        setSearchTerm={setSearchTerm}
        searchTerm={searchTerm}
      />
      <AdvocatesTable filteredAdvocates={filteredAdvocates} />
    </main>
  );
}
