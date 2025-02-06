import Link from "next/link";
import { Fragment } from "react";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "~/components/ui/breadcrumb";

export default function BreadCrumbs({
  onNavigate,
  path,
}: Readonly<{
  path: string[];
  onNavigate: (index: number) => void;
}>) {
  return (
    <Breadcrumb>
      <BreadcrumbList>
        <BreadcrumbItem onClick={() => onNavigate(-1)}>
          <BreadcrumbLink asChild>
            <Link href="/">My Drive</Link>
          </BreadcrumbLink>
        </BreadcrumbItem>

        {path.map((item, index) => (
          <Fragment key={index}>
            <BreadcrumbSeparator />
            <BreadcrumbItem key={index} onClick={() => onNavigate(index)}>
              {path.length - 1 === index ? (
                <BreadcrumbPage>{item}</BreadcrumbPage>
              ) : (
                <BreadcrumbLink>
                  {item}
                  {/* <Link href={`/${item}`}>{item}</Link> */}
                </BreadcrumbLink>
              )}
            </BreadcrumbItem>
          </Fragment>
        ))}
      </BreadcrumbList>
    </Breadcrumb>
  );
}
