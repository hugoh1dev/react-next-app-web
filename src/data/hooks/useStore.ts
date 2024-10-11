import { useContext } from "react";
import ContextShop from "../contexts/ContextShop";

const useStore = () => useContext(ContextShop)

export default useStore