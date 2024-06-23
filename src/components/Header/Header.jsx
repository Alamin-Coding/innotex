"use client"
import Link from "next/link"
import { useState } from "react"

const Header = () => {
    
// const uri = encodeURI("https://example.com?a=1&b=2");  // Encodes URI
// const decodedUri = decodeURI(uri);

    const [language, setLanguage] = useState("English");
    const [toggle, setToggle] = useState(false);

    const handleToggle = () => {
        setToggle(state => state? false: true)
    }

    const handleLanguage = (e) => {
        setLanguage(e.target.innerText)
        handleToggle()
    }

  return (
    <nav className="bg-gray-100 py-4">
        <div className="container">
            <div className="flex justify-between gap-8">
                <ul className="flex items-center gap-6">
                    <li>Home</li>
                    <li>Blog</li>
                    <li>About Us</li>
                    <li>Contact Us</li>
                </ul>
                <div className="grid grid-cols-1 relative">
                    <button onClick={handleToggle} className="py-2 px-3 rounded-sm bg-black text-white">{language}</button>
                    { toggle &&
                            <div className="absolute top-full right-0 grid grid-cols-1 bg-slate-800 w-full text-slate-50">
                                <Link onClick={handleLanguage} className="bg-slate-500 p-1 border-b border-b-slate-200 text-xs" href="/en">English</Link>
                                <Link onClick={handleLanguage} className="bg-slate-500 p-1 border-b border-b-slate-200 text-xs" href="/bn">বাংলা</Link>
                            </div>
                    }
                </div>
            </div>
        </div>
    </nav>
  )
}

export default Header