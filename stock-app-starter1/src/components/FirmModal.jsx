
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Modal from "@mui/material/Modal";
import useStockRequest from "../services/useStockRequest";
import { useEffect, useState } from "react";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

export default function FirmModal({ handleClose, open, info, setInfo }) {
  /*   const [info, setInfo] = useState({
        name: "",
        phone: "",
        address: "",
        image: "",
    }) */
  
    
    const {postStock, putStock} = useStockRequest()
    const handleChange =(e) => {
        setInfo({...info, [e.target.name]: e.target.value})
    }
    const handleSubmit = (e) => {
       e.preventDefault() 
      if (info._id) {
        putStock("firms", info)
      } else {
        postStock("firms", info)
      }

       
       
       handleClose()
    }
    
  return (
    <div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }} component={"form"} onSubmit = {handleSubmit} >
            
            <TextField
              label="Firm Name"
              name="name"
              id="name"
              type="text"
              variant="outlined"
              value={info.name}
              onChange={handleChange}
              required

            />
            <TextField
              label="Phone"
              name="phone"
              id="phone"
              type="tel"
              variant="outlined"
              value={info.phone}
              onChange={handleChange}
              required
            />
            <TextField
              label="Address"
              name="address"
              id="address"
              type="text"
              variant="outlined"
              value={info.address}
              onChange={handleChange}
              required
            />
            <TextField
              label="Image"
              name="image"
              id="image"
              type="url"
              variant="outlined"
              value={info.image}
              onChange={handleChange}
              required
            />
            <Button variant="contained" type="submit" >
                {info._id? "UPDATE FIRM": "ADD FIRM"}   
            </Button>
          </Box>
        </Box>
      </Modal>
    </div>
  );
}
