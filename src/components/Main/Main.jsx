import MainIMagesTrailer from "./MainImagesTrailer";
import MainIcons from "./MainIcons";
const Main = () => {
  return <div className="main">
    <div className="container__main" style={{ display: "flex", flexDirection: "column" }}>
      <div className="logo__series" style={{ display: "flex", flexDirection: "row", gap: "10px", padding: "20px 30px", alignItems: "center" }}>

        <a href="/">
          <img src="/image-preview.png" alt="" />
        </a>
        <a href="">
          <img src="/SERIES (1).png" alt="" />
        </a>
      </div>
      <div className="text__Lucifer__group" style={{ display: "flex", flexDirection: "column", gap: "2em", padding: "20px 30px" }}>
        <a href="/">
          <img src="/Lucifer.png" alt="" />
        </a>
        <a href="/">
          <img src="/Group 780.png" alt="" />
        </a>
      </div>
      <div className="main__block" style={{ display: "flex", flexDirection: "row", padding: "20px 30px", width: "65%", justifyContent: "space-between" }}>

        <div className="text__popular">
          <a href="">

            <h1 style={{ color: "white", fontFamily: 'Sansation' }}>POPULAR ON NETFLIX</h1>
          </a>

          <div style={{ width: "30%", display: "flex", flexDirection: "row", padding: "10px 0px" }}>
            <MainIMagesTrailer />

          </div>
          <div>
            <MainIcons />
          </div>
        </div>

        <div className="" style={{ display: "flex", flexDirection: "column", gap: "10px" }}>

          <div className="youtube__watch" style={{ alignItems: "center", display: "flex", flexDirection: "row", gap: "20px", padding: "0px 0px" }}>
            <a href="">
              <img src="/button-video-player.webp"
                alt=""
                width={91}
                height={91}
              />
            </a>
            <a href="#">

              <h1 style={{ color: "white", fontFamily: 'Sansation'}}>Watch Trailer</h1>
            </a>
          </div>

          <div>
            <p style={{ color: "white", display: "block", flexDirection: "column", width: "300px", gap: "20px", fontFamily: 'Sansation' }}>

              After an old acquaintance a violent fate, the charming Lucifer vows revenge on perpetrators and makes an unesxpected alliance
            </p>

          </div>
        </div>
      </div>
    </div>
  </div>


}

export default Main;