import { useEffect, useState } from "react";

export default function ScrollProgress(){
 const [width,setWidth] = useState(0);

 useEffect(()=>{
  const onScroll = ()=>{
    const scrollTop = document.documentElement.scrollTop;
    const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    setWidth((scrollTop/height)*100);
  };
  window.addEventListener("scroll", onScroll);
  return ()=>window.removeEventListener("scroll", onScroll);
 },[]);

 return(
  <div className="fixed top-0 left-0 h-1 bg-cyan-400 z-50" style={{width: `${width}%`}}></div>
 );
}