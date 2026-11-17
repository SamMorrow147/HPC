import { Suspense } from "react";
import ProjectsClient from "./ProjectsClient";

export const metadata = { title: "Our Work | High Performance Coatings" };

export default function Page() {
  // ProjectsClient reads its filters from the query string.
  return (
    <Suspense>
      <ProjectsClient />
    </Suspense>
  );
}
