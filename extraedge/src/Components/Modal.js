import React from "react";

const Modal = ({ user, closeModal }) => {
  return (
    <div className="z-2">
      <div className="flex items-center justify-center">
        <div className="bg-gradient-to-b from-emerald-300 via-emerald-300 to-emerald-200 w-full md:w-1/2 lg:w-1/3 rounded-lg ">
          <div className="p-6">
            <div className="flex justify-between items-center">
              <h2 className="text-lg font-semibold">Edit User</h2>
            </div>
            <form className="mt-4">
              <div className="mb-4">
                <label className="block text-slate-700 font-semibold mb-2">
                  Name:
                </label>
                <input
                  className="border rounded-lg py-2 px-3 w-full"
                  type="text"
                  defaultValue={user.name}
                />
              </div>
              <div className="mb-4">
                <label className="block text-slate-700 font-semibold mb-2">
                  Email:
                </label>
                <input
                  className="border rounded-lg py-2 px-3 w-full"
                  type="text"
                  defaultValue={user.email}
                />
              </div>
              <div className="mb-4">
                <label className="block text-slate-700 font-semibold mb-2">
                  Phone:
                </label>
                <input
                  className="border rounded-lg py-2 px-3 w-full"
                  type="text"
                  defaultValue={user.phone}
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700 font-semibold mb-2">
                  Website:
                </label>
                <input
                  className="border rounded-lg py-2 px-3 w-full"
                  type="text"
                  defaultValue={user.website}
                />
              </div>
            </form>
          </div>
          <div className="p-6 bg-gradient-to-l from-sky-500 via-sky-400 to-sky-200 rounded-lg w-auto flex justify-between">
            <button className="bg-blue-500 text-white py-2 px-4 rounded-lg transition transform hover:translate-x-1 hover:translate-y-1 hover:animate-bounce duration-100">
              Save
            </button>
            <button
              className="bg-red-400 text-white py-2 px-4 rounded-lg hover:animate-bounce  duration-100 hover:translate-x-1 hover:translate-y-1  "
              onClick={closeModal}
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
