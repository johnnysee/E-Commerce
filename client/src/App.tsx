import { useEffect } from "react";
import axios from "axios";

const URL = "https://localhost:5001/api/Products";

export const App = () => {
  useEffect(() => {
    axios
      .get(URL)
      .then((res) => console.log(res))
      .catch((e) => console.log(e));
  }, []);
  return <></>;
};
