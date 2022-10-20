import { INote } from "../components/dtos/Note.dto";
import useSWR from "swr";

const fetcher = (...args: [string, object]) =>
  fetch(...args).then((res) => res.json());

export const useNotes = (): { notes: INote[] } => {
  const { data, error } = useSWR(
    (process.env.NODE_ENV === "production"
      ? process.env.REACT_APP_BACKEND_URL_PROD
      : process.env.REACT_APP_BACKEND_URL_DEV) ||
      "http://localhost:5000/notes/",
    fetcher,
    {
      refreshInterval: 1500,
    }
  );
  return {
    notes: data ? data : error ? [] : [],
  };
};
