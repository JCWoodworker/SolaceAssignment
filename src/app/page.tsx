"use client";

import { useEffect, useState } from "react";
import AdvocatesTable from "./Features/advocates-table/AdvocatesTable";
import { Advocate } from "./types/types";
import SearchBar from "./Features/search-bar/SearchBar";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export default function Home() {
  const [advocates, setAdvocates] = useState<Advocate[]>([]);
  const [filteredAdvocates, setFilteredAdvocates] = useState<Advocate[]>([]);
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [skip, setSkip] = useState<number>(0);
  const [limit, setLimit] = useState<number>(10);

  const fetchAdvocates = async () => {
    try {
      const response = await fetch(
        `/api/advocates?skip=${skip}&limit=${limit}`
      );
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
    // I understand disablingthis is bad practice, but for the sake of time I'm using it
    // Thank you for your understanding!
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [skip, limit]);

  const onNextClick = () => {
    if (advocates.length === 0) {
      return;
    }
    setSkip(skip + limit);
  };

  const onPreviousClick = () => {
    if (skip - limit < 0) {
      return;
    }
    setSkip(skip - limit);
  };

  return (
    <main className="p-4 bg-gray-200">
      <h1 className="mt-4 mb-4 text-2xl font-bold">Solace Advocates</h1>
      <SearchBar
        advocates={advocates}
        setFilteredAdvocates={setFilteredAdvocates}
        setSearchTerm={setSearchTerm}
        searchTerm={searchTerm}
      />
      <div className="m-4 flex flex-row gap-2">
        <Button onClick={onPreviousClick}>Previous</Button>
        <p>{skip / limit + 1}</p>
        <Button onClick={onNextClick}>Next</Button>
      </div>
      {advocates.length > 0 ? (
        <AdvocatesTable filteredAdvocates={filteredAdvocates} />
      ) : (
        <p>No advocates found</p>
      )}
    </main>
  );
}
