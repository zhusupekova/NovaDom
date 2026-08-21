import RepairCalculator from "./repair-calculator";

const services = [
  {
    title: "Косметический",
    price: "от 9 500 ₽/м²",
    time: "от 21 дня",
    text: "Обновление отделки без сложной инженерии: стены, потолки, пол, двери, электрофурнитура.",
  },
  {
    title: "Капитальный",
    price: "от 13 900 ₽/м²",
    time: "от 45 дней",
    text: "Демонтаж, выравнивание, новая электрика, сантехника, черновые и чистовые работы.",
  },
  {
    title: "Новостройка",
    price: "от 12 100 ₽/м²",
    time: "от 35 дней",
    text: "Ремонт с нуля после застройщика: инженерия, стяжка, стены, санузлы, финишная отделка.",
  },
  {
    title: "Дизайнерский",
    price: "от 18 000 ₽/м²",
    time: "от 60 дней",
    text: "Реализация проекта с авторским надзором, заказными позициями и точной детализацией сметы.",
  },
];

const projects = [
  {
    title: "ЖК Сканди, 64 м²",
    type: "Новостройка",
    price: "1,42 млн ₽",
    time: "52 дня",
    image:
      "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1200&q=80",
  },
  {
    title: "Семейная квартира, 82 м²",
    type: "Капитальный",
    price: "2,18 млн ₽",
    time: "74 дня",
    image:
      "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=1200&q=80",
  },
  {
    title: "Студия под аренду, 31 м²",
    type: "Комфорт",
    price: "720 тыс ₽",
    time: "28 дней",
    image:
      "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=1200&q=80",
  },
];

const stages = [
  "Заявка и консультация",
  "Замер и техническое задание",
  "Смета с составом работ",
  "Договор и график оплат",
  "Закупка материалов",
  "Черновые работы",
  "Чистовая отделка",
  "Приемка и гарантия",
];

export default function Home() {
  return (
    <main>
      <section className="hero">
        <nav className="nav" aria-label="Основная навигация">
          <a className="brand" href="#top" aria-label="NovaDom ремонт">
            <span className="brand-mark">ND</span>
            <span>NovaDom</span>
          </a>
          <div className="nav-links">
            <a href="#services">Услуги</a>
            <a href="#calculator">Калькулятор</a>
            <a href="#projects">Портфолио</a>
            <a href="#prices">Цены</a>
          </div>
          <a className="phone" href="tel:+74951234567">
            +7 495 123-45-67
          </a>
        </nav>

        <div className="hero-grid" id="top">
          <div className="hero-copy">
            <p className="eyebrow">Москва и Московская область</p>
            <h1>Ремонт квартир под ключ с фиксированной сметой и гарантией</h1>
            <p className="lead">
              Берем на себя дизайн-проект, материалы, работы, технадзор и
              сдачу объекта по понятному графику. Предварительный расчет
              показываем сразу, точную смету готовим после замера.
            </p>
            <div className="hero-actions">
              <a className="button primary" href="#calculator">
                Рассчитать стоимость
              </a>
              <a className="button secondary" href="#contact">
                Вызвать замерщика
              </a>
            </div>
            <div className="proof-row" aria-label="Ключевые преимущества">
              <span>от 9 500 ₽/м²</span>
              <span>гарантия 3 года</span>
              <span>оплата по этапам</span>
            </div>
          </div>

          <div className="hero-card" aria-label="Квартира после ремонта">
            <div className="hero-photo" />
            <div className="status-panel">
              <span>Сейчас в работе</span>
              <strong>38 объектов</strong>
              <small>еженедельные фотоотчеты и контроль прораба</small>
            </div>
          </div>
        </div>
      </section>

      <section className="trust">
        {[
          ["01", "Фиксируем смету", "Стоимость меняется только при изменении задачи."],
          ["02", "Работаем по договору", "Сроки, этапы и гарантия прописаны до старта."],
          ["03", "Контролируем качество", "Прораб и технадзор принимают скрытые работы."],
          ["04", "Закупаем материалы", "Считаем, заказываем, доставляем и закрываем логистику."],
        ].map(([num, title, text]) => (
          <article className="trust-item" key={title}>
            <span>{num}</span>
            <h2>{title}</h2>
            <p>{text}</p>
          </article>
        ))}
      </section>

      <section className="section" id="services">
        <div className="section-head">
          <p className="eyebrow">Услуги</p>
          <h2>Форматы ремонта под разные квартиры и бюджеты</h2>
          <p>
            Пакеты можно адаптировать под ваш дизайн-проект, состояние квартиры
            и требования к материалам.
          </p>
        </div>
        <div className="service-grid">
          {services.map((service) => (
            <article className="service-card" key={service.title}>
              <h3>{service.title}</h3>
              <p>{service.text}</p>
              <div className="card-meta">
                <strong>{service.price}</strong>
                <span>{service.time}</span>
              </div>
              <a href="#calculator">Посчитать проект</a>
            </article>
          ))}
        </div>
      </section>

      <section className="calculator-band" id="calculator">
        <div className="section-head compact">
          <p className="eyebrow">Калькулятор</p>
          <h2>Получите диапазон стоимости без звонка менеджера</h2>
          <p>
            Выберите параметры квартиры. Телефон понадобится только если нужно
            подготовить точную смету.
          </p>
        </div>
        <RepairCalculator />
      </section>

      <section className="section" id="projects">
        <div className="section-head">
          <p className="eyebrow">Портфолио</p>
          <h2>Показываем не только фото, но и бюджет со сроками</h2>
        </div>
        <div className="project-grid">
          {projects.map((project) => (
            <article className="project-card" key={project.title}>
              <img src={project.image} alt={project.title} />
              <div>
                <span>{project.type}</span>
                <h3>{project.title}</h3>
                <dl>
                  <div>
                    <dt>Бюджет</dt>
                    <dd>{project.price}</dd>
                  </div>
                  <div>
                    <dt>Срок</dt>
                    <dd>{project.time}</dd>
                  </div>
                </dl>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="prices" id="prices">
        <div className="section-head compact">
          <p className="eyebrow">Цены</p>
          <h2>Пакеты с понятным составом работ</h2>
        </div>
        <div className="price-table" role="table" aria-label="Пакеты ремонта">
          {[
            ["Базовый", "от 9 500 ₽/м²", "Обновить отделку без перепланировки"],
            ["Комфорт", "от 12 100 ₽/м²", "Сделать квартиру готовой к переезду"],
            ["Капитальный", "от 13 900 ₽/м²", "Заменить инженерные системы и отделку"],
            ["Дизайнерский", "от 18 000 ₽/м²", "Реализовать проект с авторским надзором"],
          ].map(([name, price, text]) => (
            <article className="price-row" key={name}>
              <h3>{name}</h3>
              <strong>{price}</strong>
              <p>{text}</p>
              <a href="#contact">Получить смету</a>
            </article>
          ))}
        </div>
      </section>

      <section className="process">
        <div className="section-head">
          <p className="eyebrow">Процесс</p>
          <h2>Этапы ремонта видны заранее</h2>
        </div>
        <ol className="stage-list">
          {stages.map((stage) => (
            <li key={stage}>{stage}</li>
          ))}
        </ol>
      </section>

      <section className="team">
        <div>
          <p className="eyebrow">Контроль качества</p>
          <h2>За объект отвечают не только мастера</h2>
          <p>
            В проекте участвуют сметчик, прораб, инженер и специалист
            комплектации. Скрытые работы фиксируются актами и фотоотчетами, а
            оплата привязана к принятым этапам.
          </p>
        </div>
        <div className="team-metrics">
          <span>
            <strong>3 года</strong> гарантия
          </span>
          <span>
            <strong>24 часа</strong> на расчет
          </span>
          <span>
            <strong>0 ₽</strong> замер
          </span>
        </div>
      </section>

      <section className="faq">
        <div className="section-head">
          <p className="eyebrow">FAQ</p>
          <h2>Частые вопросы перед стартом</h2>
        </div>
        {[
          [
            "Сколько стоит ремонт квартиры?",
            "Предварительно от 9 500 ₽/м². Точная цена зависит от площади, состояния квартиры, класса материалов и инженерных работ.",
          ],
          [
            "Можно ли зафиксировать смету?",
            "Да. После замера и согласования состава работ смета фиксируется в договоре.",
          ],
          [
            "Как происходит оплата?",
            "Поэтапно: вы оплачиваете только принятые работы согласно графику.",
          ],
          [
            "Что если уже есть дизайн-проект?",
            "Мы проверим проект, подготовим смету и предложим график закупок и работ.",
          ],
        ].map(([question, answer]) => (
          <details key={question}>
            <summary>{question}</summary>
            <p>{answer}</p>
          </details>
        ))}
      </section>

      <section className="contact" id="contact">
        <div>
          <p className="eyebrow">Заявка</p>
          <h2>Получите предварительную смету за 24 часа</h2>
          <p>
            Оставьте параметры квартиры, и специалист подготовит расчет по
            работам, материалам и срокам.
          </p>
        </div>
        <form className="lead-form">
          <label>
            Имя
            <input name="name" placeholder="Анна" />
          </label>
          <label>
            Телефон
            <input name="phone" placeholder="+7 ___ ___-__-__" />
          </label>
          <label>
            Площадь
            <input name="area" placeholder="64 м²" />
          </label>
          <button type="button">Получить расчет</button>
        </form>
      </section>

      <div className="mobile-cta" aria-label="Быстрые действия">
        <a href="#calculator">Расчет</a>
        <a href="tel:+74951234567">Позвонить</a>
      </div>
    </main>
  );
}
