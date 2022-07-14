import { useState } from "react"

function Home() {
  const [file, setFile] = useState()

  const uploadFile = () => {
    let csv = URL.createObjectURL(file);
    let downloadLink = document.createElement("a");
    downloadLink.href = csv;
    downloadLink.download = `${new Date().getTime()}.csv`;
    document.body.appendChild(downloadLink);
    downloadLink.click();
    document.body.removeChild(downloadLink);
  }

  return (
   <div>
    <input type='file' onChange={(event) => {
      setFile(event.target.files[0])
    }}/>
    <button onClick={uploadFile}>
      Download file
    </button>
   </div>
  )
}

export default Home