import Navbar from '../components/back/back'
// <Navbar />
import React, { useState } from 'react';
function Editor() {
    const [fileType, setFileType] = useState('');
    const [alignment, setAlignment] = useState('left');
    const [, setFileInput] = useState(null);

    const handleFileTypeChange = (e) => {
        setFileType(e.target.value);
    }

    const handleAlignmentChange = (e) => {
        setAlignment(e.target.value);
    }

    const handleFileInputChange = (e) => {
        setFileInput(e.target.files[0]);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission here
    }

    let inputElement = null;

    if (fileType === 'image') {
        inputElement = <input type="file" accept="image/*" onChange={handleFileInputChange} />;
    } else if (fileType === 'text') {
        inputElement = <textarea />;
    } else if (fileType === 'video') {
        inputElement = <input type="file" accept="video/*" onChange={handleFileInputChange} />;
    }

    return (
        <>
            <Navbar />
            <form onSubmit={handleSubmit}>
                <div>
                    <label>
                        File Type:
                        <select value={fileType} onChange={handleFileTypeChange}>
                            <option value="">Select file type</option>
                            <option value="image">Image</option>
                            <option value="text">Text</option>
                            <option value="video">Video</option>
                        </select>
                    </label>
                </div>
                {inputElement}
                <div>
                    <label>
                        Alignment:
                        <select value={alignment} onChange={handleAlignmentChange}>
                            <option value="left">Left</option>
                            <option value="right">Right</option>
                        </select>
                    </label>
                </div>
                <button type="submit">Submit</button>
            </form>
        </>
    );
}


export default Editor