import { useEffect, useState } from "react";
import useStockRequest from "../services/useStockRequest";
import { useSelector } from "react-redux";
import Typography from "@mui/material/Typography";
import { Button, Grid } from "@mui/material";
import FirmCard from "../components/FirmCard";
import FirmModal from "../components/FirmModal";

const Firms = () => {
  const { getStock } = useStockRequest();
  const { firms } = useSelector((state) => state.stock);
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const [info, setInfo] = useState({
    name: "",
    phone: "",
    address: "",
    image: "",
  })
  const handleClose = () => {
    setOpen(false);
    setInfo({
      name: "",
      phone: "",
      address: "",
      image: "",
    })
  } 



  useEffect(() => {
    /* getStock("sales") */
    getStock("firms");
  }, []);

  return (
    <div>
      <Typography variant="h4" color={"error"} mt={4} mb={4}>
        Firms
      </Typography>
      <Button variant="contained" onClick={handleOpen} >New Firm</Button>
      <FirmModal handleClose ={handleClose} open={open} info={info} setInfo={setInfo}  />

      <Grid container gap={2} mt={3} justifyContent={"center"}>
        {firms.map((firm) => (
          <Grid item key={firm._id}>
            <FirmCard firm={firm} handleOpen={handleOpen} setInfo={setInfo} />
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default Firms
