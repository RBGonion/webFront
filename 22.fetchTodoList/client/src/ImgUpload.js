import { useState, useEffect } from "react";

function ImgUpload() {
  const [selectFile, setSelectFile] = useState({
    selectedFile: null,
  });

  function handleFileInput(event) {
    setSelectFile({
      selectedFile: event.target.files[0],
    });
  }

  async function handlePost() {
    const formData = new FormData();
    formData.append("file", selectFile.selectedFile);
    console.log(formData);

    await axios
      .post("/api/upload", formData)
      .then((res) => {
        alert("성공");
      })
      .catch((err) => {
        alert("실패");
      });
  }

  return (
    <div>
      <input
        type="file"
        name="file"
        onChange={(event) => handleFileInput(event)}
      />
      <button type="button" onClick={handlePost}>
        업로드
      </button>
    </div>
  );
}

export default ImgUpload;
