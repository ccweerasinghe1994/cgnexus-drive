"use client";
import { Button } from "~/components/ui/button";
import {
  FolderIcon,
  FileIcon,
  ImageIcon,
  VideoIcon,
  MusicIcon,
  UploadIcon,
} from "lucide-react";
import BreadCrumbs from "~/components/shared/bread-crumbs";
import { useState } from "react";
import DriveTable from "~/components/shared/table/drive-table";
import { DriveItem, mockDriveData } from "~/lib/mockData";
export default function HomePage() {
  const [currentPath, setCurrentPath] = useState<string[]>([]);
  const [currentFolder, setCurrentFolder] =
    useState<DriveItem[]>(mockDriveData);

  function navigateToBreadCrumb(index: number) {
    if (index === -1) {
      setCurrentPath([]);
      setCurrentFolder(mockDriveData);
    } else {
      const newPath = currentPath.slice(0, index + 1);

      setCurrentPath(newPath);

      let newFolder = mockDriveData;

      for (const folderName of newPath) {
        const found = newFolder.find((item) => item.name === folderName);

        if (found && found.children) {
          newFolder = found.children;
        } else {
          break;
        }
      }

      setCurrentFolder(newFolder);
    }
  }

  function navigateToFolder(item: DriveItem) {
    setCurrentPath([...currentPath, item.name]);
    setCurrentFolder(item?.children || []);
  }

  return (
    <main className="container mx-auto mt-8 rounded border">
      <div className="mx-auto space-y-8 p-4">
        <h1 className="text-2xl font-bold">Cgnexus-Drive</h1>
        <Button>
          <UploadIcon />
          Upload File
        </Button>
        <BreadCrumbs path={currentPath} onNavigate={navigateToBreadCrumb} />
        <DriveTable items={currentFolder} onFolderClick={navigateToFolder} />
      </div>
    </main>
  );
}
