import React, { useState } from 'react'

const DisplayData=React.memo((props)=>{
    console.log(
        "Hey I'm only rerendered when name gets updated, check React.memo"
      );
    return(
        <>
        <h1>{props.name}</h1>
        </>
    )
})

const PureComponents = () => {
    const [userInfo,setUserInfo]=useState({name:"JHON",lastname:"DOE",age:25});
  return (
    <>
    <DisplayData name={userInfo.name}/>
    <input value={userInfo.name} onChange={(e)=>setUserInfo({...userInfo,name:e.target.value})}/>
    <input value={userInfo.lastname} onChange={(e)=>setUserInfo({...userInfo,lastname:e.target.value})}/>
    </>
  )
}

export default PureComponents