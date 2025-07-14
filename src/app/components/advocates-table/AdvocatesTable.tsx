import { Advocate } from "../../types/types";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import tableStyles from "./styles";

interface AdvocatesTableProps {
  filteredAdvocates: Advocate[];
}

const AdvocatesTable = ({ filteredAdvocates }: AdvocatesTableProps) => {
  return (
    <Table className={tableStyles.table}>
      <TableHeader className={tableStyles.tableHeader}>
        <TableRow>
          <TableHead className={tableStyles.tableHead}>First Name</TableHead>
          <TableHead className={tableStyles.tableHead}>Last Name</TableHead>
          <TableHead className={tableStyles.tableHead}>City</TableHead>
          <TableHead className={tableStyles.tableHead}>Degree</TableHead>
          <TableHead className={tableStyles.tableHead}>Specialties</TableHead>
          <TableHead className={tableStyles.tableHead}>Years of Experience</TableHead>
          <TableHead className={tableStyles.tableHead}>Phone Number</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {filteredAdvocates.map((advocate: Advocate) => {
          return (
            <TableRow key={advocate.id}>
              <TableCell className={tableStyles.tableCell}>{advocate.firstName}</TableCell>
              <TableCell className={tableStyles.tableCell}>{advocate.lastName}</TableCell>
              <TableCell className={tableStyles.tableCell}>{advocate.city}</TableCell>
              <TableCell className={tableStyles.tableCell}>{advocate.degree}</TableCell>
              <TableCell className={tableStyles.tableCell}>
                {advocate.specialties.map((specialty: string) => (
                  <div key={specialty}>{specialty}</div>
                ))}
              </TableCell>
              <TableCell className={tableStyles.tableCell}>{advocate.yearsOfExperience}</TableCell>
              <TableCell className={tableStyles.tableCell}>{advocate.phoneNumber}</TableCell>
            </TableRow>
          );
        })}
      </TableBody>
    </Table>
  );
};

export default AdvocatesTable;
