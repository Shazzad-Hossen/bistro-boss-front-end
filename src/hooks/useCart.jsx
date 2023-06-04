import { useContext } from "react"
import { AuthContext } from "../providers/AuthProviders"
import { useQuery } from "@tanstack/react-query";
import { API } from "../utilities/variables";


const useCart= ()=>{
    const {user}=useContext(AuthContext);
    
    
    const { refetch, data: cart=[] } = useQuery({
        queryKey: ['cart',user?.email],
        queryFn: async()=>{
            const response= await fetch(`${API}/carts?email=${user.email}`);
            return response.json()
        },
      })

      return [cart,refetch]



}
export default useCart;