const FooterMain = () => {
  return <div style={{height: "100%", textAlign: "center", position: "relative", width: "100%"}}>
    <div>
      <div style={{background: "black"}}>
        <img src="/Ellipse 5.png" alt="" />
        <img style={{width: "10px", height: "10px"}} src="/Ellipse 1.png" alt="" />
        <img src="/Ellipse 5.png" alt="" />
        <img src="/Ellipse 5.png" alt="" />
      </div>
      <div style={{background: "black", padding: "20px 20px"}}>
        <div style={{position :"relative", width: "100%", display: "flex", flexDirection: "column", alignItems: "center", bottom: "0"}}>

        <img style={{position :"relative"}}  src="/Thumbnail Video Trending.png" alt="" />  
         <img style={{position: "absolute",alignItems: "center", justifyContent: "center", top: "5em", left: "13em" }} src="/play-icon.png" alt="" />
        </div>
     
        <img src="/progress-bar.png" alt="" />
        <img style={{position: "absolute", left: "0", paddingLeft: "3.8em", paddingTop: "0.75em"}} src="/Red_line.png" alt="" />
      </div>
    </div>
  </div>
}

export default FooterMain;