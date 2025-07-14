import { Advocate } from "../../types/types";

interface AdvocatesTableProps {
  filteredAdvocates: Advocate[];
}

const AdvocatesTable = ({ filteredAdvocates }: AdvocatesTableProps) => {
  return (
    <table>
      <thead>
        <tr>
          <th>First Name</th>
          <th>Last Name</th>
          <th>City</th>
          <th>Degree</th>
          <th>Specialties</th>
          <th>Years of Experience</th>
          <th>Phone Number</th>
        </tr>
      </thead>
      <tbody>
        {filteredAdvocates.map((advocate: Advocate) => {
          return (
            <tr key={advocate.id}>
              <td>{advocate.firstName}</td>
              <td>{advocate.lastName}</td>
              <td>{advocate.city}</td>
              <td>{advocate.degree}</td>
              <td>
                {advocate.specialties.map((specialty: string) => (
                  <div key={specialty}>{specialty}</div>
                ))}
              </td>
              <td>{advocate.yearsOfExperience}</td>
              <td>{advocate.phoneNumber}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default AdvocatesTable;
