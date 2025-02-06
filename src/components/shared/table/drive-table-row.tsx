import {
  FileIcon,
  FolderIcon,
  ImageIcon,
  MusicIcon,
  VideoIcon,
} from "lucide-react";
import { TableCell, TableRow } from "~/components/ui/table";
import { DriveItem } from "~/lib/mockData";

export default function DriveTableRow({
  item,
  onFolderClick,
}: Readonly<{ item: DriveItem; onFolderClick: (item: DriveItem) => void }>) {
  const getIcon = () => {
    switch (item.type) {
      case "folder":
        return <FolderIcon className="h-5 w-5 text-yellow-500" />;
      case "document":
        return <FileIcon className="h-5 w-5 text-blue-500" />;
      case "image":
        return <ImageIcon className="h-5 w-5 text-green-500" />;
      case "video":
        return <VideoIcon className="h-5 w-5 text-red-500" />;
      case "audio":
        return <MusicIcon className="h-5 w-5 text-purple-500" />;
    }
  };

  const handleClick = () => {
    if (item.type === "folder") {
      onFolderClick(item);
    } else if (item.url) {
      window.open(item.url, "_blank", "noopener,noreferrer");
    }
  };

  return (
    <TableRow className="cursor-pointer" onClick={handleClick}>
      <TableCell className="font-medium">
        <div className="flex items-center gap-2">
          {getIcon()}
          <span>{item.name}</span>
        </div>
      </TableCell>
      <TableCell>{item.type}</TableCell>
      <TableCell>{item.size ?? "--"}</TableCell>
    </TableRow>
  );
}
