import { useEffect } from "react";
import useStockRequest from "../services/useStockRequest";
import { useSelector } from "react-redux";
import Typography from "@mui/material/Typography";
import { Button, Grid } from "@mui/material";
import FirmCard from "../components/FirmCard";

const Firms = () => {
  const { getStock } = useStockRequest();
  const { firms } = useSelector((state) => state.stock);
  useEffect(() => {
    /* getStock("sales") */
    getStock("firms");
  }, []);

  return (
    <div>
      <Typography variant="h4" color={"error"} mt={4} mb={4}>
        Firms
      </Typography>
      <Button variant="contained"  >
        New Firm
      </Button>

      <Grid container gap={2} mt={3} justifyContent={"center"} >
        {firms.map((firm) => (
          <Grid item key={firm._id} >
            <FirmCard firm={firm}/>
          </Grid>
        ) )}

      </Grid>
    </div>
  )
  
};

export default Firms;
