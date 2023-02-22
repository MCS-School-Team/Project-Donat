import { useState } from "react"
import axios from "axios"
const JWT = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySW5mb3JtYXRpb24iOnsiaWQiOiI0OTllOTBkOS0wNWI4LTRkZDctYTkzZC1lZDFmMTI3NzVjZjkiLCJlbWFpbCI6InByb3Noa2FlZEBnbWFpbC5jb20iLCJlbWFpbF92ZXJpZmllZCI6dHJ1ZSwicGluX3BvbGljeSI6eyJyZWdpb25zIjpbeyJpZCI6IkZSQTEiLCJkZXNpcmVkUmVwbGljYXRpb25Db3VudCI6MX0seyJpZCI6Ik5ZQzEiLCJkZXNpcmVkUmVwbGljYXRpb25Db3VudCI6MX1dLCJ2ZXJzaW9uIjoxfSwibWZhX2VuYWJsZWQiOmZhbHNlLCJzdGF0dXMiOiJBQ1RJVkUifSwiYXV0aGVudGljYXRpb25UeXBlIjoic2NvcGVkS2V5Iiwic2NvcGVkS2V5S2V5IjoiM2MxMGIxNDg3ODg1MmE2NWU0ZDIiLCJzY29wZWRLZXlTZWNyZXQiOiIyMDExZGZkZmY3OGM5YTAxNTVkMWUzMjU1ODljZjRlNTA2MzMxMGYxMTJmYWJjYTFlYWMzMTNiNDNmMTM4NGI3IiwiaWF0IjoxNjc2OTc0MDY3fQ.usFAlJ1XAV1acjCD6aUseqMQUfNfu79UAjyGTaxzXv0'
const CreateImages = params =>{ 
  
  const [selectedFile, setSelectedFile] = useState();
  const[imgHash, setImgHash]= useState('')
    const changeHandler = (event) => {
      setSelectedFile(event.target.files[0]);
    };
  
    const handleSubmission = async() => {
  
      const formData = new FormData();
      
      formData.append('file', selectedFile)
  
      const metadata = JSON.stringify({
        name: 'File name',
      });
      formData.append('pinataMetadata', metadata);
      
      const options = JSON.stringify({
        cidVersion: 0,
      })
      formData.append('pinataOptions', options);
  
      try{
        const res = await axios.post("https://api.pinata.cloud/pinning/pinFileToIPFS", formData, {
          maxBodyLength: "Infinity",
          headers: {
            'Content-Type': `multipart/form-data; boundary=${formData._boundary}`,
            'pinata_api_key': 'b9e07e7b816ab663af52',
            'pinata_secret_api_key': 'a2919d46a9937f833fcd14d5755dec170595369743d503ea15baccd551948bb2',
          
          }
        });
        params.setImgHash (`ipfs://${res.data.IpfsHash}`)
        console.log(params.setImgHash)
        console.log(res.data);
      } catch (error) {
        console.log(error);
      }
    };
  
    return (
      <>
     
      <label className="text-sm font-medium text-gray-900 dark:text-whith">Choose Image for Logo</label>
      <div className = "flex flex-row">
      <input  className="phone-number bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500" type="file"  onChange={changeHandler}/>
      <button className = "rounded-lg p-3 ml-1 bg-gray-300" onClick={handleSubmission}>Submit</button>
      </div>
     
      </>
    )
  }
  export default CreateImages
