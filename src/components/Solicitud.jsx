import React, { useState } from 'react';

function Solicitud() {
  const [destinatarios, setDestinatarios] = useState([]);
  const [documentos, setDocumentos] = useState([]);

  const [file, setFile] = useState(null);

  const handleDragOver = (e) => {
    e.preventDefault();
    const selectedFile = e.target.files[0];
    if (selectedFile) {
      setFile(selectedFile.name)
    }
  }

  const handleClearFile = () => {
    setFile(null)
  }

  return (
    <div className='flex flex-col md:flex-row justify-around p-10'>
      <div className="w-full min-h-screen bg-white flex items-center justify-center">
        <div className="w-[24%] h-auto rounded-md bg-white shadow-md border border-slate-400 p-5">
          <label htmlFor='input' className='block text-slate-800 text-lg fnt-medium mb-1.5'>Upload file</label>
          <div className="flex items-start w-full">
            {file ?
              <div className="text-start my-3">
                <div className="relative inline-block">
                  <div className="w-full h-auto px-3 py-1 text-[0.8rem] bg-gray-200 text-gray-800 rounded-md">
                    <span className="text-black text-base font-medium">
                      File Name:{" "}
                    </span>
                    {file}
                  </div>
                  <button className="absolute -top-3 -right-2 bg-gray-200 text-red-500 dark:text-red-400 cursor-pointer rounded-sm" onClick={handleClearFile}>
                    X
                  </button>
                </div>
              </div>
              :
              <label
                htmlFor="dragdrop-file"
                className="flex flex-col items-center justify-center w-full h-[17vh] border-2 border-gray-400 border-dashed rounded-md cursor-pointer bg-gray-50"
              >
                <div className="flex flex-col items-center justify-center-pt5-pb-6">
                  <p className="mb-2 dark:text-gray-400">
                    <span className='font-medium'>Click to upload</span> or drag and drop
                  </p>
                  <p className="text-xs text-gray-500">
                    JPEG
                  </p>
                </div>
                <input id='dragdrop-file' type="file" className='hidden' onChange={handleDragOver} />
              </label>
            }
          </div>
        </div>
      </div>
      <Destinatarios />

    </div>
  )
}

function Documentos() {
  return (
    <div>
      Documentos
    </div>
  )
}

function Destinatarios() {
  return (
    <div>
      Destinatarios
    </div>
  )
}

export default Solicitud
