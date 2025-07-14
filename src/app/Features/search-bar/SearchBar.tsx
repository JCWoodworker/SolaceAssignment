import { Advocate } from "../../types/types";

interface SearchBarProps {
  advocates: Advocate[];
  setFilteredAdvocates: (advocates: Advocate[]) => void;
  setSearchTerm: (searchTerm: string) => void;
  searchTerm: string;
}

const SearchBar = ({
  advocates,
  setFilteredAdvocates,
  setSearchTerm,
  searchTerm,
}: SearchBarProps) => {
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
    <div className="m-auto mt-8 mb-4 flex flex-col gap-4 w-full text-white border-2 border-gray-300 rounded-md p-4 bg-gradient-to-b from-emerald-500 to-black">
      <div className="flex flex-col sm:flex-row sm:flex-wrap gap-2 sm:gap-4">
        <input
          className="w-full sm:w-2/3 md:w-1/2 lg:w-2/3 text-black border-2 border-gray-300 rounded-md p-2 text-sm sm:text-base"
          value={searchTerm}
          onChange={onChange}
          placeholder="Search by name, city, degree, specialty, or years of experience"
        />
        <p className="text-sm sm:text-base self-center">
          {searchTerm && (
            <>
              Searching for: <span className="font-semibold">{searchTerm}</span>
            </>
          )}
        </p>
      </div>
      <button
        className="text-black w-full sm:w-auto sm:max-w-xs rounded-md bg-[rgb(215,161,59)] p-2 hover:text-white transition-colors duration-200 font-medium"
        onClick={onClick}
      >
        Reset Search
      </button>
    </div>
  );
};

export default SearchBar;
