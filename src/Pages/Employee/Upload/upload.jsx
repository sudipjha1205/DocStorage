import React, { useState } from 'react';
import axios from 'axios';

import './upload.css';

const FileUploadForm = () => {
  const [textValue, setTextValue] = useState('');
  const [file, setFile] = useState(null);
  const [uploadProgress, setUploadProgress] = useState(0);

  const handleTextChange = (e) => {
    setTextValue(e.target.value);
  };

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleSubmit = async () => {
    try {
      const formData = new FormData();
      formData.append('textValue', textValue);
      formData.append('file', file);

      const response = await axios.post('your_upload_endpoint', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
        onUploadProgress: (progressEvent) => {
          const progress = Math.round((progressEvent.loaded / progressEvent.total) * 100);
          setUploadProgress(progress);
        },
      });

      console.log('File upload successful:', response.data);
    } catch (error) {
      console.error('File upload failed:', error.message);
    }
  };

  return (
    <div className='upload-box'>
        <div className="file-upload-form text-center">
        <div className="form-group d-flex justify-content-center align-items-center">
            <label htmlFor="text-input" className='p-2 w-5'>Consumer No:</label>
            <input type="text" id="text-input" className="form-control w-50" value={textValue} onChange={handleTextChange} />
        </div>
        <div className="form-group d-flex justify-content-center align-items-center p-4">
            <label htmlFor="file-input" className='p-2 w-5 d-flex justify-content-start'>Upload File:</label>
            <input type="file" id="file-input" className="form-control w-50" onChange={handleFileChange} />
        </div>
        <div className="form-group">
            <button className="btn btn-primary" onClick={handleSubmit}>Submit</button>
        </div>
        {uploadProgress > 0 && (
            <div className="progress-group">
            <p>Upload Progress: {uploadProgress}%</p>
            <progress value={uploadProgress} max="100" />
            </div>
        )}
        </div>
    </div>
  );
};

export default FileUploadForm;
