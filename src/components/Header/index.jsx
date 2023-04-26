const Header = () => {
  return (
    <div className="header" style={{width: "100%", background: "black", display: "flex", justifyContent: "space-between", padding: "20px 40px"}}>
      <div className="container" style={{justifyContent: "space-between", display: "flex", flexDirection: "row", position: "relative", width: "100%"}}>   
      <a href="">
        <img src="/humburger-icon.png" alt="" />
        </a>   
      <a className="logo__netflix" href="/">
        <img src="/Logo Netflix.png" alt="" />
      </a>
      <a href="">
        <img src="/search-icon.png" alt="" />
      </a>
      </div>
    </div>
  )
}

export default Header;