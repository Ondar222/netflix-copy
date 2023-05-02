

const Main = () => {
  
  return <div className="main">
    <main className="main__container" >
      <div className="main__menu">
        <ul className="ul__main__menu" id="navbar">
          <li><a href="">Меню</a></li>
          <li><a href="#">Доставка</a></li>
          <li><a href="#">Оплата</a></li>
          <button className="button__main__menu" >
            Бронь столика
          </button>

        </ul>
      </div>
      <div className="container__Food__Exxe__heading">
        <h1 style={{ color: "white" }}>
          <a href="#">Видовой ресторан Food Exxe Relo на Крестовском острове</a>
        </h1>
      </div>
      <img className="img__main" src="/Rectangle_30.png" alt="" />

    </main>
 

  </div>
}

export default Main