import { useState } from "react"

function Home() {
  const [file, setFile] = useState()

  const uploadFile = () => {
    console.log(file)
  }

  return (
   <div>
    <input type='file' onChange={(event) => {
      setFile(event.target.files[0])
    }}/>
    <button onClick={uploadFile}>
      Upload file
    </button>
   </div>
  )
}

export default Home