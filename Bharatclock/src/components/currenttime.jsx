let currentTime=()=>{
    let time=new Date();
  return <p>This is current Time:{time.toLocaleDateString()}-{""}
  {time.toLocaleTimeString()}
  </p>
}

export default currentTime;