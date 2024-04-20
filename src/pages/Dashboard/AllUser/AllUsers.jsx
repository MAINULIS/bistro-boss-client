import { useQuery } from "@tanstack/react-query";
import { Helmet } from "react-helmet-async";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import { FaTrashAlt, FaUserShield } from "react-icons/fa";
import Swal from "sweetalert2";
import useAxiosSecure from "../../../hooks/useAxiosSecure";

const AllUsers = () => {
    const [axiosSecure] = useAxiosSecure();
    const { refetch, data: users = [] } = useQuery({
        queryFn: async () => {
            const res = await axiosSecure.get('/users');
            return res.data;
        }
    })

    const handleDelete = user => {

    }

    const handleMakeAdmin = user => {
        fetch(`http://localhost:5000/users/admin/${user._id}`, {
            method: 'PATCH'
        })
        .then(res => res.json())
        .then(data => {
            if(data.modifiedCount ){
                refetch();
                Swal.fire({
                    position: "top-end",
                    icon: "success",
                    title: `${user.name} is Admin Now!`,
                    showConfirmButton: false,
                    timer: 1500
                  });
            }
        })
    }

    return (
        <div className="w-full">
            <Helmet>
                <title>Bistro Boss | All Users</title>
            </Helmet>
            <SectionTitle
                SubHeading={"how many??"}
                Heading={"manage all users"}
            ></SectionTitle>
            <h3 className="text-3xl text-black font-semibold my-4 uppercase">Total users: {users.length} </h3>
            <div className="overflow-x-auto">
                <table className="table ">
                    {/* head */}
                    <thead className="text-white bg-[#D1A054]">
                        <tr className="uppercase">
                            <th>#</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>role</th>
                            <th>action</th>
                        </tr>
                    </thead>
                    <tbody>
                    {
                        users.map((user, index) =>
                        <tr
                        key={user._id}
                        >
                            <td>{index + 1}</td>
                            <td>{user.name}</td>
                            <td>{user.email}</td>
                            <td>{
                                user.role === 'admin'? "admin" :
                                <button onClick={() => handleMakeAdmin(user)} className="btn btn-ghost btn-sm  text-white bg-[#D1A054]"><FaUserShield className="w-5 h-5"></FaUserShield></button>
                                }</td>
                            <td>
                            <button onClick={() => handleDelete(user)} className="btn btn-ghost btn-sm bg-red-600 text-white"><FaTrashAlt className="w-5 h-5"></FaTrashAlt></button>
                            </td>
                        </tr>
                    )
                    }
                        
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default AllUsers;