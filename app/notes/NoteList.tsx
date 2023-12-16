"use client";

import React from "react";
import useSWR from "swr";
import { Note, zNotes } from "./type";
import NoteItem from "./NoteItem";

type Props = {
  initialState: Note[];
};

const fetcher = (url: string) =>
  fetch(url).then(async (response) => {
    const data = await response.json();
    const notes = zNotes.parse(data);
    return notes;
  });

const NoteList: React.FC<Props> = ({ initialState }) => {
  const { data } = useSWR("/api/notes", fetcher, {
    suspense: true,
    fallbackData: initialState,
  });

  return (
    <div className="grid sm:grid-cols-2 xl:grid-cols-3 gap-8 sm:gap-y-10">
      {data.map((note) => (
        <NoteItem key={note.id} item={note} />
      ))}
    </div>
  );
};

export default NoteList;
