const MainIMagesTrailer = () => {
  return <div className="" style={{ display: "flex", flexDirection: "row", width: "50%" }}>
    <button style={{width: "50px", height: "50px", display: "block", flexDirection: "column", margin: "30px 10px", background: "red", borderRadius: "25%"}}>
      <img src="/Click_left.png" alt="" />
    </button>

      <img style={{position: "relative"}} src="/first__image.png" alt="" />
      <div style={{display: "flex", flexDirection: "row"}}>

      <img style={{position: "absolute",  height: "13%", paddingLeft: "1em", paddingRight: "1em"}} src="/wednesday.jpeg" alt="" />
      <img style={{position: "relative", paddingLeft: "15em"}} src="/three_images.png" alt="" />
      </div>
      <button style={{width: "50px", height: "50px", display: "block", flexDirection: "column", margin: "30px 10px", background: "red", borderRadius: "25%"}}>
        <img src="/Click_right.png" alt="" />
      </button>
 
  </div>
}

export default MainIMagesTrailer