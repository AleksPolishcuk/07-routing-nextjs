import NotePreview from "@/app/@modal/(.)notes/[id]/NotePreview";
import { fetchNoteById } from "@/lib/api";

export default async function ModalNotePage({
  params,
}: {
  params: { id: string };
}) {
  try {
    const note = await fetchNoteById(params.id);
    return <NotePreview note={note} />;
  } catch (error) {
    console.error("Failed to load note:", error);
    return <div>Failed to load note</div>;
  }
}
