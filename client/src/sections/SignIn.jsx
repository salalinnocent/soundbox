import { useDispatch, useSelector } from "react-redux";
import { logIn } from "../redux/authSlice";
import sound from "../../public/icons/sound.png"


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
      <div className="w-1/2 flex items-center justify-center">
        {/*Form*/}
        <form onSubmit={handleSignIn}>
          <div className="flex flex-row gap-4 justify-center items-center">
            <h2 className="font-bodoni text-red-500 mb-2 text-2xl justify-center items-center">Sign In</h2>
            <div className="w-12 h-12 animate-pulse">
              <img src={sound} className="w-full h-full object-contain" />
            </div>
          </div>
          <div className="flex flex-col gap-4 text-white text-lg items-center justify-center pt-4">
            {/*Username*/}
            <input type="text" placeholder="Username"
              className="bg-transparent text-xl shadow-xl border-b border-white text-center font-bodoni transition-all duration-600" />
            {/*Email*/}
            <input type="text" placeholder="Email"
              className="bg-transparent shadow-xl text-xl border-b border-white text-center font-bodoni transition-all duration-600 focus:scale-103" />
            {/*Password*/}
            <input type="text" placeholder="Password"
              className="bg-transparent text-xl border-b border-white text-center font-bodoni transition-all duration-600 focus:scale-103" />
            {/*Button*/}
            <button type="submit" className="text-red-500 text-xl shadow-xl p-3 hover:text-white">Sign In</button>
          </div>
        </form>
        {SignIn}
      </div>
  )
}
export default SignIn;
