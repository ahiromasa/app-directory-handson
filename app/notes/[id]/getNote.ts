import { apiUrl } from "@/constants/api";
import { zNote } from "../type";

export const getNote = async (id: string) => {
  const response = await fetch(`${apiUrl}/notes/${id}`, { cache: "no-cache" });
  const data = await response.json();
  const note = zNote.parse(data);
  return note;
};
