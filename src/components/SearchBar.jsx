import { Search } from 'lucide-react';


//SearchBar.jsx
const SearchBar = () => {
    return (
      <div className="flex text-black font-bold gap-2 item-center justify-center">
      <div className="flex flex-row items-center justify-center">
      <Search w={10} h={10}/>
      <input className="text-black font-primary text-lg rounded-2xl p-1 justify-center items-center pl-3" placeholder="search for songs ...">
      </input>
      </div>
      </div>
    )
}
export default SearchBar;
