import React from 'react';

function DeleteModal() {    

    return (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
            <div className="bg-white w-80 max-w-md p-6 rounded">
                <div className="max-h-60 overflow-y-auto">
                    <h2>List of Vespas</h2>
                </div>
            </div>            
        </div>
    );
};

export default DeleteModal;