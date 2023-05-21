import { useEffect } from "react";

const useSetTitle = (title) => {
  useEffect(() => {
    document.title = `Car Stock | ${title}`;
  }, [title]);
};

export default useSetTitle;
