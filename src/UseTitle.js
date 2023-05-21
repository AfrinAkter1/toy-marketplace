import { useEffect } from "react"

const UseTitle = (title) =>{
 useEffect(() =>{
   document.title =`${title}-Toy Hut`;
 },[title])
}
export default UseTitle