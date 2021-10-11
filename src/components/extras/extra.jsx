import * as React from 'react';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';

export default function BasicButtons(props) {
    const handleClick=(e)=>{
        document.getElementById(21).click();
    }
    const handleUpload=(e)=>{
        props.handleUpload(e);
    }
  return (
    <Stack style={{display:"flex",justifyContent:"center",flexDirection:"column"}} spacing={2} direction="row">
      <Button onClick={handleClick} style={{height:"70%",width:"100%",backgroundColor:"#0063e5",color:"white",marginBottom:"16px",zIndex:'4'}} variant="outlined">Upload Photo</Button>
      <input id="21" type="file" onChange={handleUpload} accept='image/*' style={{height:"0%",width:"0%",opacity:'0',zIndex:'1'}} onChange={props.upload}></input>
    </Stack>
  );
}






