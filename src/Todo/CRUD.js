import React, { useState, useEffect } from 'react';
import data from './EmplData';

function CRUD() {
  const [Data, setData] = useState([]);
  const [Name, setName] = useState('');
  const [Dep, setDep] = useState('');
  const [ID, setID] = useState();
  const [update, setUpdate] = useState(false);

  useEffect(() => {
    setData(data);
  }, []);

  const handleDelete = (id) => {
    const dt = Data.filter((item) => item.id !== id);
    setData(dt);
  };

  const handleEdit = (id) => {
    const dt = Data.find((item) => item.id === id);
    setName(dt.name);
    setDep(dt.dep);
    setID(id);
    setUpdate(true);
  };

  const handleUpdate = () => {
    const index = Data.findIndex((item) => item.id === ID);
    const dt = [...Data];
    dt[index] = { id: ID, name: Name, dep: Dep };
    setData(dt);
    setUpdate(false);
    clear();
  };

  const clear = () => {
    setName('');
    setDep('');
    setUpdate(false);
  };

  const handleSave = (e) => {
    e.preventDefault();
    if (Name === '' || Dep === '') {
      alert('Please fill the form');
      return;
    }
    const dt = [...Data];
    const newEntry = {
      id: Data.length + 1,
      name: Name,
      dep: Dep,
    };
    dt.push(newEntry);
    setData(dt);
    clear();
  };

  const clearTable = () => {
    setData([]);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="w-full max-w-2xl bg-white p-6 rounded-lg shadow-lg">
        <div className="mb-6">
          <h2 className="text-2xl font-semibold text-center text-gray-800 mb-4">Employee Management</h2>
          <div className="flex flex-col space-y-4">
            <div className="flex items-center space-x-4">
              <label className="text-lg font-semibold text-gray-700">Name:</label>
              <input
                type="text"
                className="flex-grow border p-2 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Enter name"
                value={Name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div className="flex items-center space-x-4">
              <label className="text-lg font-semibold text-gray-700">Department:</label>
              <input
                type="text"
                className="flex-grow border p-2 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Enter Department"
                value={Dep}
                onChange={(e) => setDep(e.target.value)}
              />
            </div>
            <div className="flex space-x-4">
              {!update ? (
                <button
                  className="bg-blue-500 text-white px-4 py-2 rounded-lg shadow-md hover:bg-blue-600 transition duration-300"
                  onClick={handleSave}
                >
                  Save
                </button>
              ) : (
                <button
                  className="bg-green-500 text-white px-4 py-2 rounded-lg shadow-md hover:bg-green-600 transition duration-300"
                  onClick={handleUpdate}
                >
                  Update
                </button>
              )}
              <button
                className="bg-gray-500 text-white px-4 py-2 rounded-lg shadow-md hover:bg-gray-600 transition duration-300"
                onClick={clear}
              >
                Clear
              </button>
            </div>
          </div>
        </div>

        <div className="overflow-x-auto">
          <table className="min-w-full bg-white shadow-md rounded-lg overflow-hidden">
            <thead className="bg-gray-800 text-white">
              <tr>
                <th className="py-2 px-4">ID</th>
                <th className="py-2 px-4">Name</th>
                <th className="py-2 px-4">Department</th>
                <th className="py-2 px-4">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {Data.map((item, index) => (
                <tr key={index} className="text-center hover:bg-gray-100 transition duration-200">
                  <td className="py-2 px-4">{item.id}</td>
                  <td className="py-2 px-4">{item.name}</td>
                  <td className="py-2 px-4">{item.dep}</td>
                  <td className="py-2 px-4 space-x-2">
                    <button
                      className="bg-yellow-500 text-white px-2 py-1 rounded-lg shadow-md hover:bg-yellow-600 transition duration-300"
                      onClick={() => handleEdit(item.id)}
                    >
                      Edit
                    </button>
                    <button
                      className="bg-red-500 text-white px-2 py-1 rounded-lg shadow-md hover:bg-red-600 transition duration-300"
                      onClick={() => handleDelete(item.id)}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="flex justify-center mt-6">
          <button
            className="bg-red-500 text-white px-4 py-2 rounded-lg shadow-md hover:bg-red-600 transition duration-300"
            onClick={clearTable}
          >
            Clear All
          </button>
        </div>
      </div>
    </div>
  );
}

export default CRUD;
