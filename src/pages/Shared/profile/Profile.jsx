import { useContext } from "react";
import { AuthContext } from "../../../provider/AuthProvider";

const Profile = () => {
    const {user} = useContext(AuthContext);

    return (
        <div className=" flex justify-center items-center p-24 gap-7">
            <img src={user.photoURL} alt="" />
            <div>
            <h2 className="text-3xl font-semibold text-gray-900">This is {user.displayName}</h2>
             <p><span className="text-xl font-semibold text-gray-900">Email:</span> {user.email}</p>
            </div>
        </div>
    );
};

export default Profile;