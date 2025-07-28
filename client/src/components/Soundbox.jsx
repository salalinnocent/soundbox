import { Icons } from "../constants/icons";

//Animation text for the brand name
const Soundbox = () => {
  return (
    <div className="flex flex-col justify-center items-center">
      <h1 className="text-8xl text-transparent font-lexend font-extrabold bg-[linear-gradient(to_right,_#90ee90,_#1DB954,_#006400,_#FF7F7F,_#FF0000,_#8B0000,_#FFD580,_#FFA500,_#FF8C00)] bg-[length:300%_300%] bg-clip-text animate-gradient">SoundBox</h1>
      <div className="flex flex-row">
        <h2 className="text-white font-badoni text-xl">Bring your playlist together
          <div className="flex flex-row gap-5 items-center justify-center mt-3">
            {Object.entries(Icons).map(([name, { src, gradient }]) => (
              <div key={name} className={`flex p-2 rounded-full bg-gradient-to-r ${gradient} w-10 h-10 justify-center items-center`}>
                <img src={src} alt="icons" className="w-10 h-10" />

              </div>
            ))}
          </div>
        </h2>
      </div>
    </div>
  )
}
export default Soundbox;
