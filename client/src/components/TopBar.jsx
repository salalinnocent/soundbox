
import { Settings } from 'lucide-react';
import { useState } from 'react';
import SearchBar from './SearchBar';
import bigsmoke from "../assets/icons/unnamed.jpg"
//TopBar.jsx
const TopBar = () => {
  const [logout, setLogout] = useState(false)

  const handleLogout = () => {
    setLogout((prev) => !prev)
  }

  return (
    <>
      <section id="topbar" className="max-width">
        <div className="flex flex-row justify-between shadow-xl">
          {/*left side*/}
          <img src={bigsmoke} className="w-14 h-14 rounded-full object-cover p-1 transition-transform duration-100 hover:scale-110"/>
          {/*middle section - search bar*/}
          <SearchBar />
          {/*right side - logout*/}
          <div className="flex flex-row items-center justify-center gap-4 p-2">
            <button className="text-xl font-primary" onClick={handleLogout}>
              Logout
            </button>
            <button>
              <Settings />
            </button>
          </div>
        </div>
      </section>
    </>
  )
}
export default TopBar;
