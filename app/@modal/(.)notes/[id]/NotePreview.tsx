"use client";

import Modal from "@/components/Modal/Modal";
import { useRouter } from "next/navigation";
import css from "./NotePreview.module.css";
import { Note } from "@/types/note";
import { useEffect, useState } from "react";

export default function NotePreview({ note }: { note: Note }) {
  const router = useRouter();
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
    return () => setIsMounted(false);
  }, []);

  const handleClose = () => {
    router.back();
  };

  if (!isMounted) return null;

  return (
    <Modal onClose={handleClose}>
      <div className={css.item}>
        <div className={css.header}>
          <h2 className={css.title}>{note.title}</h2>
        </div>
        <div className={css.content}>{note.content}</div>
        <div className={css.footer}>
          <span className={css.tag}>{note.tag}</span>
          <span className={css.date}>
            {new Date(note.createdAt).toLocaleDateString()}
          </span>
        </div>
      </div>
    </Modal>
  );
}
