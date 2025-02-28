import { useEffect } from "react";

useEffect(()=>{
    const timer = setInterval(()=>{
        console.log("react OP")
    },1000)

    //To clear interval in use effect , we need to use return fn(Unmounting)
    return()=>{
       clearInterval(timer);
    }
}, [])

const User = ({name}) =>{
  return(
    <div className="user-card">
        <h2>Name: {name}</h2>
        <h3>Location: Delhi</h3>
    </div>
  )
};

export default User;