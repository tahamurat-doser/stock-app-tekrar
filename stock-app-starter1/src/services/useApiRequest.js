import axios from "axios";
import { toastErrorNotify, toastSuccessNotify } from "../helper/ToastNotify";
import { fetchFail, fetchStart, loginSuccess, registerSuccess, logoutSuccess } from "../features/authSlice";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import useAxios from "./useAxios"

const useApiRequest = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const {token} = useSelector((state) => state.auth)
  const { axiosPublic} = useAxios()
  const login = async (userData) => {
    /* const BASE_URL = "https://11158.fullstack.clarusway.com" */

    dispatch(fetchStart());
    try {
      const { data } = await axios.post(
        `${process.env.REACT_APP_BASE_URL}/auth/login`,
        userData
      );
      dispatch(loginSuccess(data));
      toastSuccessNotify("Login işlemi başarılı");
      navigate("/stock");
    } catch (error) {
      dispatch(fetchFail());
      toastErrorNotify("Login işlemi başarısız");
      console.log(error);
    }
  };
  const register = async (userInfo) => {
    dispatch(fetchStart());
    try {
      const { data } = await axiosPublic.post("/users/", userInfo);
      dispatch(registerSuccess(data));
      navigate("/stock");
    } catch (error) {
      dispatch(fetchFail());
    }
  };
  const logout = async () => {
    dispatch(fetchStart());
    try {
       await axios(
        `${process.env.REACT_APP_BASE_URL}/auth/logout`, {
          headers: {Authorization: `Token ${token}`}
        }
       
      );
      dispatch(logoutSuccess());
      
    } catch (error) {
      dispatch(fetchFail());
    
    }
  };
  return { login, register, logout };
};

export default useApiRequest;
