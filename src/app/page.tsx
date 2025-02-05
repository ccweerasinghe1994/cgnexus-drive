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
export default function HomePage() {
  const [currentPath, setCurrentPath] = useState<string[]>([]);

  function navigateToBreadCrumb(index: number) {
    if (index === -1) {
      setCurrentPath([]);
    }

    console.log("Navigate to index", index);
  }

  return (
    <main className="container mx-auto border p-4">
      <div className="mx-auto space-y-4 p-4">
        <h1 className="text-2xl font-bold">Cgnexus-Drive</h1>
        <Button>
          <UploadIcon />
          Upload File
        </Button>
        <BreadCrumbs path={currentPath} onNavigate={navigateToBreadCrumb} />
      </div>
    </main>
  );
}
