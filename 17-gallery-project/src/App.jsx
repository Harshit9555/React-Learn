import React, { useEffect, useState } from "react";
import axios from "axios";

const Card = ({ elem }) => {
  return (
    <a href={elem.url} target="_blank" rel="noopener noreferrer">
      <div className="h-40 w-44 rounded-xl overflow-hidden">
        <img
          src={elem.download_url}
          alt={elem.author}
          className="h-full w-full object-cover"
        />
      </div>

      <h2 className="font-bold text-sm mt-1">{elem.author}</h2>
    </a>
  );
};

const App = () => {
  const [userData, setUserData] = useState([]);
  const [index, setIndex] = useState(1);

  const getData = async () => {
    const response = await axios.get(
      `https://picsum.photos/v2/list?page=${index}&limit=15`,
    );
    setUserData(response.data);
  };

  useEffect(() => {
    getData();
  }, [index]);

  let printUserdata = (
    <div className="flex justify-center items-center w-full h-[60vh]">
      <h3 className="text-gray-400 text-sm">Loading Images...</h3>
    </div>
  );

  if (userData.length > 0) {
    printUserdata = userData.map((elem, idx) => {
      return (
        <div key={idx}>
          <Card elem={elem} />
        </div>
      );
    });
  }

  return (
    <div className="bg-black overflow-auto min-h-screen text-white p-4">
      <div className="flex flex-wrap gap-4 p-2">{printUserdata}
      </div>

      <div className="flex justify-center items-center p-4 gap-6">
        <button
          style={{opacity: index==1 ? 0.5 : 1}}
          className="bg-amber-400 text-black rounded px-4 py-2 font-semibold text-sm cursor-pointer active:scale-95"
          onClick={() => {
            if (index > 1) {
              setIndex(index - 1);
              setUserData([]);
            }
          }}
        >
          Prev
        </button>
          <h4>Page {index}</h4>
        <button
          className="bg-amber-400 text-black rounded px-4 py-2 font-semibold text-sm cursor-pointer active:scale-95"
          onClick={() => {
            setIndex(index + 1);
            setUserData([]);
          }}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default App;
