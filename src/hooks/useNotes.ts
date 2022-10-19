import { INote } from "../components/dtos/Note.dto";
import { NOTES } from "../dummy-data";

export const useNotes = (): { notes: INote[] } => {
  return {
    notes: NOTES,
  };
};
