import {NavLink,useNavigate} from "react-router-dom";

export default function Navbar(){

const navigate = useNavigate();

function logout(){
localStorage.removeItem("token");
navigate("/login");
}

const style=({isActive})=>({
marginRight:12,
textDecoration:"none",
fontWeight:isActive?"700":"400"
});

return(
<div style={{padding:12,borderBottom:"1px solid #ddd"}}>
<NavLink to="/dashboard" style={style}>Dashboard</NavLink>
<NavLink to="/dashboard/water" style={style}>Water Tracker</NavLink>
<button style={{float:"right"}} onClick={logout}>Logout</button>
</div>
);
}
