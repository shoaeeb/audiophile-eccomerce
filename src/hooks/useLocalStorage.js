import { useEffect, useState } from "react";

function useLocalStorage(intialState, key) {
  const [value, setValue] = useState(() => {
    const storage = localStorage.getItem(key);
    return storage ? JSON.parse(storage) : intialState;
  });

  useEffect(
    function () {
      localStorage.setItem(key, JSON.stringify(value));
    },
    [key, value]
  );
  return [value, setValue];
}

export default useLocalStorage;
