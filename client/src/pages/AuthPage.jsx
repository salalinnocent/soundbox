import Soundbox from "../components/Soundbox";
import Login from "../components/Auth/Login.jsx"
import SignIn from "../sections/SignIn.jsx";
import { useDispatch, useSelector } from "react-redux";
import { toggleAuthForm } from "../redux/authSlice.js";

//Hint: territory operator 
//condition : expressIfTrue : expressionIfFalse
//AuthPage
const AuthPage = () => {
  const dispatch = useDispatch();
  const showSignIn = useSelector((state) => state.auth.showSignIn);
  return (
    <>
      <div className="min-h-screen w-screen flex bg-gradient-to-b from-gray-600 to-black">
      <div className="w-1/2 flex items-center justify-center">
      <Soundbox/>
      </div>
      <div className="w-1/2 flex items-center justify-center">
      {showSignIn ? <SignIn/> : <Login/>}
      <button type="submit" className="text-red-500 font-bodoni" onClick={() => dispatch(toggleAuthForm())}>
      {showSignIn ? "Already have an account ? Login" : "Dont have an account : SignUp"}
        </button>
      </div>
      </div>
    </>
  )
  
}
export default AuthPage;
