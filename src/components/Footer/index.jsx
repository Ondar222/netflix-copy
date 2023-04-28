import FooterMain from "./FooterMain/FooterMain";

const Footer = () => {
  return (
    <div className="Footer">
      <div className="container__footer" style={{ background: "black",color: "white", width: "100%", height: "100%", textAlign: "center", padding: "20px 0px" }}>
        <a href="">
          <h1>TRENDING ON NETFLIX</h1>
        </a>
      </div>
      <div>
        <FooterMain />
      </div>
    </div>
  )
}

export default Footer;