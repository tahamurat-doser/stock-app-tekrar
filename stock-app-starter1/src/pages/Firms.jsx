import { useEffect } from "react";
import useStockRequest from "../services/useStockRequest";
import { useSelector } from "react-redux";

const Firms = () => {
  const { getStock} = useStockRequest();
  const { firms } = useSelector((state) => state.stock);
  useEffect(() => {
    getStock("firms")
    getStock("sales")
    
  }, []);
  console.log(firms)
  return <div>Firms</div>;
};

export default Firms;
