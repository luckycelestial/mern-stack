export default function Student({ ref, ...props }) {
    return (
        <>
        <nav>
            <Link to="/student/dashboard">Dashboard</Link>
            <Link to="/student/profile">Profile</Link>
        </nav>
        <Outlet />
        </>
    );
}
