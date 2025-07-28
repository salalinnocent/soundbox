import { useDispatch, useSelector } from "react-redux";
import { logIn } from "../redux/authSlice";
import sound from "../../public/icons/sound.png"
import Soundbox from "../components/Soundbox";

//SignIn.jsx
const SignIn = () => {
  const dispatch = useDispatch();
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated)

  //handleSignIn
  const handleSignIn = (e) => {
    e.preventDefault();
    dispatch(logIn())
  }
  return (
    <div className="min-h-screen w-screen flex bg-gradient-to-b from-gray-600 to-black">
      {/*SoundBox Animation Text*/}
      <div className="w-1/2 flex items-center justify-center">
        <Soundbox />
      </div>
      {/*Sign In Form*/}
      <div className="w-1/4 bg-gradient-to-b from-gray-600 to-black flex items-center justify-center">
        {/*Form*/}
        <form onSubmit={handleSignIn}>
          <div className="flex flex-row gap-4 justify-center items-center">
            <h2 className="font-bodoni text-transparent mb-2 text-2xl justify-center items-center  bg-[linear-gradient(to_right,_#90ee90,_#1DB954,_#006400,_#FF7F7F,_#FF0000,_#8B0000,_#FFD580,_#FFA500,_#FF8C00)] bg-[length:300%_300%] bg-clip-text animate-gradient">Sign In</h2>
            <div className="w-12 h-12 animate-pulse">
              <img src={sound} className="w-full h-full object-contain" />
            </div>
          </div>
          <div className="flex flex-col gap-4 text-white text-lg items-center justify-center pt-4">
            {/*Username*/}
            <input type="text" placeholder="Username"
              className="bg-transparent text-2xl shadow-xl border-b border-white text-center font-bodoni transition-all duration-600" />
            {/*Email*/}
            <input type="text" placeholder="Email"
              className="bg-transparent shadow-xl text-xl border-b border-white text-center font-bodoni transition-all duration-600 focus:scale-103" />
            {/*Password*/}
            <input type="text" placeholder="Password"
              className="bg-transparent shadow-xl text-2xl border-b border-white text-center font-bodoni transition-all duration-600 focus:scale-103" />
            {/*Button*/}
            <button type="submit" className="text-red-500 text-2xl shadow-xl p-3">Sign In</button>
          </div>
        </form>
        {isAuthenticated && <p>Successfull signed in to SoundBox</p>}
      </div>
    </div>
  )
}
export default SignIn;
