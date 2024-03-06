import { useState } from 'react';

const FileUpload = () => {
    const [myFile, setMyFile] = useState("");

    const changeFile = (e) => {
        let myImage = e.target.files[0];

        let reader = new FileReader();

        reader.onload = () => {
            setMyFile(reader.result);
        };

        reader.readAsDataURL(myImage);
    };

    const uploadFile = () => {
        console.log("File uploaded:", myFile);
    };

    return (
        <div>
            <input type="file" onChange={(e) => changeFile(e)} />
            <button onClick={uploadFile}>Upload File</button>
        </div>
        
    );
};

export default FileUpload;
