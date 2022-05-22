import GoogleLogin from "react-google-login";
import authApi from "~/core/api/authApi";

function LoginGoogle() {


    const handleLogin = function (googleUser) {
        console.log("googleUser: ", googleUser.profileObj);
        authApi.register(googleUser.profileObj)
            .then(response => {
                console.log(response);
            })
            .catch(error => {
                console.log("error: ", error);
            })
    }

    return <>
        <GoogleLogin
            clientId="970775754411-trpfcsos0eom5fs9ssav274jo6vifoqh.apps.googleusercontent.com"
            buttonText="Log in with Google"
            onSuccess={handleLogin}
            onFailure={handleLogin}
            cookiePolicy={'single_host_origin'}
        />
    </>;
}

export default LoginGoogle;