import { GoogleLogout } from 'react-google-login';

function LogoutGoogle() {
    const logout = (data) => {
        console.log(data);
    }
    return <>
        return
        <GoogleLogout
            clientId="970775754411-trpfcsos0eom5fs9ssav274jo6vifoqh.apps.googleusercontent.com"
            buttonText="Logout"
            onLogoutSuccess={logout}
        ></GoogleLogout>
    </>;
}

export default LogoutGoogle;