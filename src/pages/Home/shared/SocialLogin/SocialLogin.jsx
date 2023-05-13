import { useContext } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../../../providers/AuthProvider";

const SocialLogin = () => {
    const { googleSignIn } = useContext(AuthContext);
    const location = useLocation();
    const navigate = useNavigate();
    const from = location.state?.from?.pathname || '/';
    const handleGoogleSignIn = () => {
        googleSignIn()
            .then(result => {
                console.log(result.user);
                navigate(from , {replace: true});
            })
            .catch(error => console.log(error))
    }
    return (
        <div>
            <div className="divider">OR</div>
            <div className="text-center">
            <button onClick={handleGoogleSignIn} className="btn btn-circle btn-outline text-red-600">
                    G
                </button>
            </div>
        </div>
    );
};

export default SocialLogin;