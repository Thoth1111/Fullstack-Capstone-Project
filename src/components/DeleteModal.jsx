import React, { useState } from 'react';
import { useGetAllVespasQuery, useDeleteVespaMutation } from '../redux/vespaAPI';

const DeleteModal = ({ onClose }) => {
  const { data: vespasData } = useGetAllVespasQuery();

  const [deleteVespa, { isLoading: isDeleting }] = useDeleteVespaMutation();

  const [checked, setChecked] = useState([]);

  const handleCheckbox = (id) => {
    if (checked.includes(id)) {
      setChecked(checked.filter((i) => i !== id));
    } else {
      setChecked([...checked, id]);
    }
  };

  const handleDelete = async () => {
    for (const id of checked) {
      try {
        await deleteVespa(id);
      } catch (error) {
        console.log(error);
      }
    }
  };

  const handleOutsideClick = (e) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <div
      className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50"
      onClick={handleOutsideClick}
    >
      <div className="bg-white w-80 max-w-md p-6 rounded">
        <div className="max-h-60 lg:overflow-y-auto scrollbar md:overflow-y-auto z-100">
          <h2 className="text-center">Vespas</h2>
          <ul>
            {vespasData?.map((vespa) => (
              <li key={vespa.id}>
                <input
                  className="mr-5"
                  type="checkbox"
                  checked={checked.includes(vespa.id)}
                  onChange={() => handleCheckbox(vespa.id)}
                />
                {vespa.name}
              </li>
            ))}
          </ul>
          <button
            className="flex w-full justify-center rounded-md bg-lime-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-green-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-lime-600"
            onClick={handleDelete}
            disabled={isDeleting}
          >
            {isDeleting ? 'Deleting...' : 'Delete'}
          </button>
        </div>
      </div>
    </div>
  );
};

export default DeleteModal;
