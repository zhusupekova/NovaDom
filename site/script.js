const rates = {
  cosmetic: 3500,
  comfort: 5500,
  capital: 7500,
  design: 11000,
};

const formatMoney = (value) => `${value.toLocaleString("ru-RU")} сом`;

function updateEstimate() {
  const area = Number(document.querySelector("#area").value || 0);
  const repair = document.querySelector("#repair").value;
  const homeType = document.querySelector('input[name="homeType"]:checked').value;
  const materials = document.querySelector("#materials").checked;
  const design = document.querySelector("#design").checked;

  const base = area * rates[repair];
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

  document.querySelector("#estimate").textContent =
    `${formatMoney(low)} - ${formatMoney(high)}`;
  document.querySelector("#estimate-days").textContent =
    `Ориентировочный срок: от ${days} дней. Точность онлайн-расчета зависит от состояния объекта и выбранных материалов.`;
}

document
  .querySelectorAll("#area, #repair, input[name='homeType'], #materials, #design")
  .forEach((input) => input.addEventListener("input", updateEstimate));

updateEstimate();
