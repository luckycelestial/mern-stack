import { Link, Outlet } from "react-router-dom";

export default function Admin({ ref, ...props }) {
    

    return (
        <div className="flex flex-row">
        <nav className="flex flex-col border-3 w-40 h-screen">
            <div className="border-2 bg-green-300 ">
            <Link to="/admin/dashboard">Dashboard</Link>
            </div>
            <Link to="/admin/details">Details</Link>
            <Link to="/admin/profiles">Profie</Link>
        </nav>
        <Outlet />
        </div>
    );
}
