import useAuth from "../../../hooks/useAuth";

const UserHome = () => {
    const {user} = useAuth()
    return (
        <div className="w-full m-4">
            <h3 className="text-3xl font-semibold text-neutral-700 font-serif">Hi, Welcome back {user?.displayName} </h3>
        </div>
    );
};

export default UserHome;