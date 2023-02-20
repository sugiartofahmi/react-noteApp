import ContentLayout from "../../layouts/ContentLayout";
import { useState } from "react";
const Home = () => {
  const [tags, setTags] = useState([]);
  const [notes, setNotes] = useState([]);
  const [datas, setDatas] = useState([]);
  const inputTags = (e) => {
    e.key === "Enter" && setTags((prev) => [...prev, e.target.value]);
  };

  const inputDatas = () => {
    notes.length !== 0 &&
      tags.length !== 0 &&
      setDatas((prev) => [...prev, { notes, tags }]);
    setTags([]);
    setNotes([]);
  };

  return (
    <ContentLayout>
      <div className="w-full h-auto  flex justify-between items-center">
        <div className="w-1/2 p-5">
          <div className="flex gap-x-5  items-center">
            <label className="block mb-2 text-sm font-bold text-black">
              Note
            </label>
            <button
              onClick={inputDatas}
              type="button"
              className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
            >
              Input
            </button>
          </div>
          <input
            onChange={(e) => setNotes(e.target.value)}
            type="text"
            className="bg-[#95BDFF] border border-black text-black text-sm rounded-lg   w-full p-2.5   "
            placeholder="Input Note"
          />
        </div>
        <div className="w-1/2 p-5 ">
          <div className="flex gap-x-5  items-center">
            <label className="block mb-2 text-sm font-bold text-black">
              Tags
            </label>
            <button
              onClick={() => setTags([])}
              type="button"
              className="focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900"
            >
              Clear Tags
            </button>
          </div>
          <div className="bg-[#95BDFF] flex gap-x-5 text-black text-sm rounded-lg  w-full p-2.5   ">
            <div className="flex flex-row h-full w-full pt-2 gap-x-5 justify-center item text-center">
              {tags.map((x, i) => (
                <h1 key={i}>{x}</h1>
              ))}
            </div>
            <input
              type="text"
              onKeyUp={inputTags}
              className="bg-[#95BDFF] border border-black text-black text-sm rounded-lg  w-full p-2.5   "
              placeholder="Input Note"
            />
          </div>
        </div>
      </div>

      <div className="w-full flex flex-col p-5">
        {datas.map((x, i) => (
          <div
            key={i}
            className="  p-6 text-black border border-gray-200 rounded-lg shadow bg-[#95BDFF]"
          >
            <h5 className="mb-2 text-2xl font-bold tracking-tight ">
              {x.notes}
            </h5>
            <div className="flex flex-row gap-x-5">
              {x.tags.map((x, i) => (
                <p key={i} className="font-normal text-gray-700 ">
                  {x}
                </p>
              ))}
            </div>
          </div>
        ))}
      </div>
    </ContentLayout>
  );
};

export default Home;
