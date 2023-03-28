import React, { useState, useEffect } from "react";
import ListNews from "./ListNews";

const ListNewsApi = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch("http://localhost:3001/news/viewNews")
      .then((res) => res.json())
      .then((json) => setData(json));
  }, []);
  return <ListNews data={data} />;
};

export default ListNewsApi;
