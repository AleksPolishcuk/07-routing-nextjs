import NotesClient from "./Notes.client";
import { fetchNotes } from "@/lib/api";

export default async function NotesPage({
  params,
}: {
  params: { slug: string[] };
}) {
  const tag = params.slug?.[0] === "All" ? undefined : params.slug?.[0];
  const initialData = await fetchNotes({ tag });
  return <NotesClient initialData={initialData} tag={tag} />;
}
