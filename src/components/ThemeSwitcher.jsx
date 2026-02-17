import { useState } from "react";

export default function ThemeSwitcher(){
 const [dark,setDark] = useState(true);

 return(
  <button
    onClick={()=>setDark(!dark)}
    className="fixed top-24 right-6 z-50 neon-btn text-sm"
  >
    {dark ? "Light" : "Dark"}
  </button>
 );
}