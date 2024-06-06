import { currentUser } from "@clerk/nextjs";
import { redirect } from "next/navigation";
import Project from "../components/ui/Project";
export default async function Home() {
  return (
    <>
      <Project />
    </>
  );
}
