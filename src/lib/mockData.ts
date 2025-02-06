export type FileType = "folder" | "document" | "image" | "video" | "audio";

export interface DriveItem {
  id: string;
  name: string;
  type: FileType;
  size?: string;
  url?: string;
  children?: DriveItem[];
}

export const mockDriveData: DriveItem[] = [
  {
    id: "1",
    name: "Documents",
    type: "folder",
    size: "--",
    children: [
      {
        id: "1-1",
        name: "Resume.pdf",
        type: "document",
        size: "1.2 MB",
        url: "https://example.com/resume.pdf",
      },
      {
        id: "1-2",
        name: "Project Proposal.docx",
        type: "document",
        size: "2.5 MB",
        url: "https://example.com/proposal.docx",
      },
    ],
  },
  {
    id: "2",
    name: "Images",
    type: "folder",
    size: "--",
    children: [
      {
        id: "2-1",
        name: "Vacation.jpg",
        type: "image",
        size: "3.7 MB",
        url: "https://example.com/vacation.jpg",
      },
      {
        id: "2-2",
        name: "Family.png",
        type: "image",
        size: "2.1 MB",
        url: "https://example.com/family.png",
      },
      {
        id: "2-3",
        name: "MarvelPictures",
        type: "folder",
        size: "--",
      },
    ],
  },
  {
    id: "3",
    name: "Budget.xlsx",
    type: "document",
    size: "1.8 MB",
    url: "https://example.com/budget.xlsx",
  },
  {
    id: "4",
    name: "Presentation.pptx",
    type: "document",
    size: "5.3 MB",
    url: "https://example.com/presentation.pptx",
  },
  {
    id: "5",
    name: "Videos",
    type: "folder",
    size: "--",
    children: [
      {
        id: "5-1",
        name: "Tutorial.mp4",
        type: "video",
        size: "45.2 MB",
        url: "https://example.com/tutorial.mp4",
      },
      {
        id: "5-2",
        name: "Demo.mp4",
        type: "video",
        size: "32.1 MB",
        url: "https://example.com/demo.mp4",
        //
      },
    ],
  },
];
