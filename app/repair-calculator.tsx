"use client";

import { useMemo, useState } from "react";

const repairRates: Record<string, number> = {
  cosmetic: 3500,
  comfort: 5500,
  capital: 7500,
  design: 11000,
};

const repairLabels: Record<string, string> = {
  cosmetic: "Косметический",
  comfort: "Комфорт",
  capital: "Капитальный",
  design: "Дизайнерский",
};

export default function RepairCalculator() {
  const [area, setArea] = useState(62);
  const [repair, setRepair] = useState("comfort");
  const [homeType, setHomeType] = useState("new");
  const [materials, setMaterials] = useState(true);
  const [design, setDesign] = useState(false);

  const estimate = useMemo(() => {
    const base = area * repairRates[repair];
    const typeMultiplier = homeType === "secondary" ? 1.14 : 1;
    const materialCost = materials ? area * 3500 : 0;
    const designCost = design ? area * 1800 : 0;
    const total =
      Math.round((base * typeMultiplier + materialCost + designCost) / 10000) *
      10000;
    const low = Math.round((total * 0.92) / 10000) * 10000;
    const high = Math.round((total * 1.12) / 10000) * 10000;
    const days = Math.max(
      24,
      Math.round(
        area * (repair === "design" ? 1.05 : repair === "capital" ? 0.9 : 0.65),
      ),
    );

    return { low, high, days };
  }, [area, repair, homeType, materials, design]);

  return (
    <div className="calculator">
      <div className="calc-controls">
        <label>
          Площадь квартиры
          <input
            type="number"
            min="18"
            max="180"
            value={area}
            onChange={(event) => setArea(Number(event.target.value))}
          />
        </label>

        <label>
          Тип ремонта
          <select
            value={repair}
            onChange={(event) => setRepair(event.target.value)}
          >
            {Object.entries(repairLabels).map(([value, label]) => (
              <option value={value} key={value}>
                {label}
              </option>
            ))}
          </select>
        </label>

        <fieldset>
          <legend>Тип жилья</legend>
          <label>
            <input
              type="radio"
              name="homeType"
              checked={homeType === "new"}
              onChange={() => setHomeType("new")}
            />
            Новостройка
          </label>
          <label>
            <input
              type="radio"
              name="homeType"
              checked={homeType === "secondary"}
              onChange={() => setHomeType("secondary")}
            />
            Вторичка
          </label>
        </fieldset>

        <div className="checks">
          <label>
            <input
              type="checkbox"
              checked={materials}
              onChange={(event) => setMaterials(event.target.checked)}
            />
            Материалы и доставка
          </label>
          <label>
            <input
              type="checkbox"
              checked={design}
              onChange={(event) => setDesign(event.target.checked)}
            />
            Дизайн-проект
          </label>
        </div>
      </div>

      <aside className="calc-result">
        <span>Предварительная стоимость</span>
        <strong>
          {estimate.low.toLocaleString("ru-RU")} -{" "}
          {estimate.high.toLocaleString("ru-RU")} сом
        </strong>
        <p>
          Ориентировочный срок: от {estimate.days} дней. Точность онлайн-расчета
          зависит от состояния объекта и выбранных материалов.
        </p>
        <a href="#contact">Получить точную смету</a>
      </aside>
    </div>
  );
}
