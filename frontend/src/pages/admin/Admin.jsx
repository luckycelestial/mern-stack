import { Link, Outlet } from "react-router-dom";

export default function Admin({ ref, ...props }) {
    

    return (
        <>
        <nav>
            <Link to="/admin/dashboard">Dashboard</Link>
            <Link to="/admin/details">Details</Link>
        </nav>
        <Outlet />
        </>
    );
}
