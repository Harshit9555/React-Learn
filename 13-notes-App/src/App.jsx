import React, { useState } from "react";
import { X } from "lucide-react";

const App = () => {
  const [title, setTitle] = useState("");
  const [details, setDetails] = useState("");
  const [tasks, setTasks] = useState([]);

  const submitHandler = (e) => {
    e.preventDefault();

    if (!title || !details) return;

    setTasks([...tasks, { title, details }]);

    setTitle("");
    setDetails("");
  };

  const deleteHandler = (index) => {
    setTasks(tasks.filter((_, i) => i !== index));
  };

  return (
    <div className="min-h-screen lg:flex bg-black text-white">
      {/* Add Notes Section */}
      <form
        onSubmit={submitHandler}
        className="flex lg:w-1/2 flex-col gap-5 p-10"
      >
        <h1 className="text-3xl font-bold">Add Notes</h1>

        <input
          type="text"
          placeholder="Enter Notes Heading"
          className="px-5 py-2 w-full border-2 rounded outline-none font-medium"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />

        <textarea
          placeholder="Write Details"
          className="px-5 py-2 w-full h-32 border-2 rounded outline-none font-medium"
          value={details}
          onChange={(e) => setDetails(e.target.value)}
        />

        <button className="bg-white text-black px-5 py-2 rounded font-medium active:scale-95">
          Add Notes
        </button>
      </form>

      {/* Notes Section */}
      <div className="lg:w-1/2 p-10 lg:border-l-2">
        <h1 className="text-3xl font-bold">Recent Notes</h1>

        <div className="flex flex-wrap gap-5 mt-5 overflow-auto">
          {tasks.length === 0 && (
            <p className="text-gray-400">No notes added yet.</p>
          )}

          {tasks.map((note, idx) => (
            <div
              key={idx}
              className="relative h-52 w-40 rounded-2xl bg-cover bg-[url('https://static.vecteezy.com/system/resources/previews/037/152/677/non_2x/sticky-note-paper-background-free-png.png')] text-black py-8 px-4"
            >
              <button
                onClick={() => deleteHandler(idx)}
                className="absolute top-4 right-4 bg-red-500 p-1 rounded cursor-pointer"
              >
                <X size={14} />
              </button>

              <h3 className="text-lg font-bold leading-tight">{note.title}</h3>

              <p className="mt-3 text-sm text-gray-700">{note.details}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default App;
