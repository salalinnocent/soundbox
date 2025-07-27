
import { Heart, Share2, Repeat, MoreHorizontal } from "lucide-react";

//InteractionBar.jsx
const InteractionBar = () => {
  return (
    <div className="flex flex-row gap-10 min-h-[40px] items-center justify-start text-black">
      <Heart size={20} />
      <Share2 size={20} />
      <Repeat size={20} />
      <MoreHorizontal size={20} />
    </div>
  )
}
export default InteractionBar;
