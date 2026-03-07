import {useNavigate} from "react-router-dom";

export default function Login(){
const navigate = useNavigate();

function login(){
localStorage.setItem("token","fake-token");
navigate("/dashboard");
}

return(
<div style={{padding:20}}>
<h2>Login</h2>
<button onClick={login}>Login</button>
</div>
);
}
