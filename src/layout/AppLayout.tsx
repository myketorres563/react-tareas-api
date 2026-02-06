import { NavLink, Outlet } from "react-router-dom";
import { useAuth } from "../auth/authContext";

export default function AppLayout() {
    const {isAuthenticated, user, logout } = useAuth();
    /* TODO Obtener del contexto los datos y funciones necesarios */ 
    return (
        <div>
            <header className="navbar">
                <div className="navbar-inner">
                    <span className="brand">React Tareas</span>
                    <nav className="navlinks">
                        { isAuthenticated && user && <NavLink to="/tasks">Tareas</NavLink> }
                        <NavLink to="/about">About</NavLink>
                        { isAuthenticated && user && <NavLink to="/profile">Perfil</NavLink> }
                        { !isAuthenticated && <NavLink to="/login">Login</NavLink> }
                        { !isAuthenticated && <NavLink to="/register">Register</NavLink> }
                        { isAuthenticated && user && <>
                            <div className="nav-username"><span className="username-message">Usuario:</span><span className="username-name">{user.name}</span></div>
                            <button className="nav-btn logout" onClick={logout}>Logout</button>
                            </>}
                    </nav>
                </div>
            </header>

            <main className="page">
                <Outlet />
            </main>
        </div>
    );
}