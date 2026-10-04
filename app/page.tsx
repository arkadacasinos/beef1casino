export default function Page() {
  return (
    <div className="x9k-shell">
      <header className="x9k-topbar">
        <a href="/" className="x9k-logo">
          Beef Casino
        </a>
        <nav className="x9k-nav" aria-label="Основная навигация">
          <a href="#official">Официальный сайт</a>
          <a href="#online">Онлайн</a>
          <a href="#play">Играть</a>
          <a href="#mirror">Зеркало</a>
        </nav>
      </header>

      <main className="x9k-main">
        <section className="x9k-hero">
          <div className="x9k-hero-copy">
            <h1 className="x9k-lead">
              Beef Casino — <em>официальный сайт</em> для игры онлайн
            </h1>
            <p className="x9k-kicker">
              Beef Casino открывает двери в мир честных ставок, быстрых выплат и щедрых
              бонусов. Играйте в слоты, рулетку и карты прямо в браузере — без скачивания и
              лишних шагов.
            </p>
            <a href="#play" className="x9k-action">
              Играть в Beef Casino
            </a>
          </div>
          <img
            className="x9k-hero-media"
            src="/images/hero-table.jpg"
            alt="Игровой стол Beef Casino с фишками и картами"
            width={1200}
            height={800}
            fetchPriority="high"
          />
        </section>

        <section className="x9k-block" id="official">
          <h2 className="x9k-heading">Beef Casino официальный сайт</h2>
          <p className="x9k-copy">
            Beef Casino официальный сайт — это главная площадка, где собраны лучшие слоты,
            рулетка и карточные игры. Заходите только на официальный сайт Beef Casino, чтобы не
            попасть на подделку. Официальный сайт Beef Casino работает круглосуточно и открыт
            для игроков из любых регионов. Биф Казино ценит каждого гостя и предлагает честные
            условия с прозрачными правилами.
          </p>
        </section>

        <section className="x9k-block" id="online">
          <h2 className="x9k-heading">Биф Казино онлайн</h2>
          <p className="x9k-copy">
            Биф Казино онлайн — это удобный формат игры без скачивания. Достаточно открыть
            браузер, и Биф Казино уже готово к ставкам. Онлайн-режим Биф Казино работает быстро
            даже на слабом интернете. Beef Casino онлайн адаптировано под телефоны и планшеты,
            поэтому играть можно в любом месте и в любое время.
          </p>
          <img
            className="x9k-media"
            src="/images/slots.jpg"
            alt="Слоты Биф Казино онлайн"
            width={1200}
            height={800}
            loading="lazy"
          />
        </section>

        <section className="x9k-block" id="play">
          <h2 className="x9k-heading">Beef Casino играть</h2>
          <p className="x9k-copy">
            Beef Casino играть просто: регистрируетесь, пополняете счёт и выбираете игру. Играть
            в Beef Casino можно на реальные деньги или в демо-режиме без риска. Биф Казино
            играть удобно и новичкам, и опытным игрокам. Каждый раунд в Beef Casino проходит
            честно, а результат определяет генератор случайных чисел.
          </p>
          <ol className="x9k-steps">
            <li>Зарегистрируйтесь на официальном сайте Beef Casino</li>
            <li>Пополните счёт удобным способом</li>
            <li>Выберите слот или рулетку и начните игру</li>
          </ol>
          <img
            className="x9k-media"
            src="/images/roulette.jpg"
            alt="Рулетка Beef Casino"
            width={1200}
            height={800}
            loading="lazy"
          />
        </section>

        <section className="x9k-block" id="mirror">
          <h2 className="x9k-heading">Биф Казино зеркало рабочее</h2>
          <p className="x9k-copy">
            Биф Казино зеркало рабочее помогает зайти на площадку, если основной адрес временно
            недоступен. Рабочее зеркало Биф Казино полностью повторяет функционал сайта и
            сохраняет ваш прогресс. Beef Casino зеркало хранит аккаунт, баланс и историю ставок.
            Биф Казино зеркало обновляется регулярно, поэтому вход всегда остаётся стабильным.
          </p>
        </section>

        <section className="x9k-block" id="official2">
          <h2 className="x9k-heading">Биф Казино официальный</h2>
          <p className="x9k-copy">
            Биф Казино официальный — это гарантия безопасности и честных выплат. Официальный сайт
            Биф Казино защищает данные игроков современным шифрованием. Beef Casino официальный
            работает по лицензии и соблюдает правила ответственной игры. Выбирайте только
            официальный Beef Casino, чтобы ваши средства и личные данные были в безопасности.
          </p>
          <ul className="x9k-list">
            <li>Быстрые выплаты на карту и кошелёк</li>
            <li>Честные игры с генератором случайных чисел</li>
            <li>Бонусы новичкам и программа лояльности</li>
            <li>Поддержка 24/7 на русском языке</li>
          </ul>
        </section>
      </main>

      <footer className="x9k-foot">
        <p className="x9k-foot-brand">Beef Casino</p>
        <div className="x9k-hashtags">
          <a href="#official" className="x9k-hashtag">
            #beefcasinoофициальныйсайт
          </a>
          <a href="#official" className="x9k-hashtag">
            #beefcasinoофициальный
          </a>
          <a href="#play" className="x9k-hashtag">
            #beefcasinoиграть
          </a>
          <a href="#mirror" className="x9k-hashtag">
            #beefcasinoзеркало
          </a>
          <a href="#official" className="x9k-hashtag">
            #бифказиноофициальныйсайт
          </a>
          <a href="#official2" className="x9k-hashtag">
            #бифказиноофициальный
          </a>
          <a href="#online" className="x9k-hashtag">
            #бифказиноонлайн
          </a>
          <a href="#play" className="x9k-hashtag">
            #бифказиноиграть
          </a>
          <a href="#mirror" className="x9k-hashtag">
            #бифказинозеркало
          </a>
          <a href="#mirror" className="x9k-hashtag">
            #бифказинозеркалорабочее
          </a>
          <a href="/" className="x9k-hashtag">
            #beefcasino
          </a>
          <a href="/" className="x9k-hashtag">
            #бифказино
          </a>
        </div>
        <p className="x9k-foot-note">
          Beef Casino — официальный сайт и рабочее зеркало для игры онлайн. Играйте ответственно.
          Доступно только для лиц старше 18 лет.
        </p>
      </footer>
    </div>
  )
}
