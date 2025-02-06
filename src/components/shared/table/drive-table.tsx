import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "~/components/ui/table";
import DriveTableRow from "./drive-table-row";
import { DriveItem, mockDriveData } from "~/lib/mockData";
export default function DriveTable({
  onFolderClick,
  items,
}: Readonly<{
  items: DriveItem[];
  onFolderClick: (item: DriveItem) => void;
}>) {
  return (
    <Table>
      <TableCaption>{!items?.length && "No files found."}</TableCaption>
      <TableHeader>
        <TableRow>
          <TableHead className="w-[50%]">Name</TableHead>
          <TableHead>Type</TableHead>
          <TableHead>Size</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {items.map((item) => (
          <DriveTableRow
            key={item.id}
            item={item}
            onFolderClick={onFolderClick}
          />
        ))}
      </TableBody>
    </Table>
  );
}
