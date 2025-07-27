import { useDispatch, useSelector } from "react-redux";
import { signIn } from "../redux/authSlice";
import Soundbox from "../components/Soundbox";

//SignIn.jsx
const SignIn = () => {
  const dispath = useDispatch();
  const isSignedIn = useSelector((state) => state.auth.isSignedIn)
  //handleSignIn
  const handleSignIn = (e) => {
    e.preventDefault();
    dispath(signIn())
  }
  return (
    <div className="min-h-screen w-full flex bg-gradient-to-b from-gray-600 to-black">
      {/*SoundBox Animation Text*/}
      <Soundbox/>
      {/*Sign In Form*/}
      <div className="w-1/2 bg-gradient-to-b from-gray-600 to-black flex items-center justify-center">
        <form onSubmit={handleSignIn}>
          <h2 className="text-white text-4xl">Sign In</h2>
          <div className="flex flex-col gap-4 text-white text-lg border-2 border-black items-center justify-center">
            <input type="text" placeholder="Username" />
            <input type="text" placeholder="Email" />
            <input type="text" placeholder="Password" />
            <button type="submit" className="bg-blue-700 text-red-500 text-4xl">Sign In</button>
          </div>
        </form>
        {isSignedIn && <p>Successfull signed in to SoundBox</p>}
      </div>
    </div>
  )
}
export default SignIn;
