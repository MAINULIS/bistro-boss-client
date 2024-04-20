import { useQuery } from '@tanstack/react-query';
import useAxiosSecure from './useAxiosSecure';
import useAuth from './useAuth';

const useCart = () => {
    const {user, loading} = useAuth();
    // const token = localStorage.getItem('access-token');
    const [axiosInstance] = useAxiosSecure();


    const { refetch, data: cart = [] } = useQuery({
        queryKey: ['carts', user?.email],
        enabled: !loading,
        // queryFn: async () =>{
        //     const response = await fetch(`http://localhost:5000/carts?email=${user.email}`,{headers:{
        //         authorization: `bearer ${token}`
        //     }})

        //     return response.json();
        // },
        // or
        queryFn: async () =>{
            const response = await axiosInstance(`/carts?email=${user?.email}`)
            console.log('res from axios', response)
            return response.data
        },
      })

      return [cart, refetch]
};

export default useCart;
