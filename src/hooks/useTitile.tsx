import { useEffect } from 'react';

//this is a custom hook that changes the title of the page
const useTitle = (title: string) => {
  useEffect(() => {
    const prevTitle = document.title;
    document.title = title;
    return () => {
      document.title = prevTitle;
    };
  }, [title]);
};

export default useTitle;
