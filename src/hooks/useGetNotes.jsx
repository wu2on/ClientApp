import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { setNote } from "../store/notes/actions";

export const useGetNotes = (notes) => {
  const dispatch = useDispatch();

  useEffect(() => {
    fetch("http://localhost:5000/api/notes")
      .then((data) => data.json())
      .then((dataToSave) => {
        dispatch(setNote(dataToSave));
      })
      .catch((error) => {
        console.log("data error", error);
      });
  }, [notes]);
};
