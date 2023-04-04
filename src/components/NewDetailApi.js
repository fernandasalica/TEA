import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import NewDetail from "./NewDetail";

const NewDetailApi = () => {
  const params = useParams();
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch(`http://localhost:3001/news/viewNews/${params.id}`)
      .then((res) => res.json())
      .then((json) => setData(json));
  }, []);

  return <NewDetail data={data} />;
};

export default NewDetailApi;
