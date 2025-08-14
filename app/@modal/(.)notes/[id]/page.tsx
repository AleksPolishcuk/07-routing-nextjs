import NotePreview from "@/app/@modal/(.)notes/[id]/NotePreview";
import { fetchNoteById } from "@/lib/api";

interface ModalNotePageProps {
  params: Promise<{ id: string }>;
  searchParams: { [key: string]: string | string[] | undefined };
}

export default async function ModalNotePage({
  params,
  searchParams,
}: ModalNotePageProps) {
  try {
    const { id } = await params;
    const note = await fetchNoteById(id);
    const from = searchParams.from || "/notes";
    return <NotePreview note={note} fromPage={from.toString()} />;
  } catch (error) {
    console.error("Failed to load note:", error);
    return <div>Failed to load note</div>;
  }
}
