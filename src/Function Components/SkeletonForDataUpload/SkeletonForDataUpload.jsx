import React, { useState } from 'react';
import './SkeletonForDataUpload.css';

const SkeletonForDataUpload = () => {
  const [formData, setFormData] = useState({
    name: '',
    age: '',
  });

  const handleHeading = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const sendDataToServer = async () => {
    try {
      const response = await fetch('http://localhost:3100/skeleton', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        console.log('Data sent to server successfully.');
      } else {
        console.error('Failed to send data to server.');
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  const sendData = () => {
    sendDataToServer();
  };

  return (
    <div className="SkeletonForDataUpload">
      <div className="DataEntry">
        <div className="heading">
          <input type="text" name="name" value={formData.name} onChange={handleHeading} />
        </div>
        <div className="category">
          <input type="text" name="age" value={formData.age} onChange={handleHeading} />
        </div>
        <div className="body">{/* Additional body content if needed */}</div>
        <button onClick={sendData}>Send</button>
      </div>
    </div>
  );
};

export default SkeletonForDataUpload;
