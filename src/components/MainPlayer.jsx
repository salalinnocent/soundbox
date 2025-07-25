import { Play } from "lucide-react";
import InteractionBar from "./InteractionBar";

//MainPlayer.jsx
const MainPlayer = () => {
  return (
    <>
      <section id="mainplayer" className="flex-col justify-center items-center mt-5 min-h-[300px] bg-gradient-to-b from-gradient-gray-400 to-gradient-gray-700 shadow-xl rounded-xl">
        {/*Main Song Playing*/}
        <div className="flex items-center justify-start w-full max-w-4xl px-3 py-4 gap-4">
          <div className="flex flex-row p-2 items-center justify-between gap-10">
            <Play size={90} className="text-green-500 border-1 border-black rounded-full p-2" />
            <div className="text-2xl font-primary">
              <p>Kendrick Lamar - They not like us</p>
            </div>
            <div className="flex flex-row justify-end items-end">5 years ago</div>
          </div>
        </div>
      </section>
      <div className="flex justify-center items-center bg-blue-300">
        <InteractionBar />
      </div>
    </>
  )
}
export default MainPlayer;
