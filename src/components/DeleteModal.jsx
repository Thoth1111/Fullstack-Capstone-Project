import React from 'react';

function DeleteModal( { onClose }) {
    const handleOutsideClick = (e) => {
        if (e.target == e.currentTarget) {
            onClose();
        }
    };

    return (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50" onClick={handleOutsideClick}>
            <div className="bg-white w-80 max-w-md p-6 rounded z-100">
                <div className="max-h-60 overflow-y-auto">
                    <h2>List of Vespas</h2>
                </div>
            </div>            
        </div>
    );
};

export default DeleteModal;