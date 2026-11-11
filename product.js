/**
 * FERROTECH KAZAKHSTAN — PRODUCT DETAIL CONTROLLER
 * Loads product by ?id=..., renders technical specs, chem analysis, cutting options
 */

document.addEventListener("DOMContentLoaded", () => {
  const urlParams = new URLSearchParams(window.location.search);
  const productId = urlParams.get("id") || "nerzh-list-12x18n10t";

  const product = FERRO_PRODUCTS.find(p => p.id === productId) || FERRO_PRODUCTS[0];
  renderProductDetail(product);
});

function renderProductDetail(p) {
  // Title & Meta
  document.title = `${p.name} — ТОО Ferrotech Казахстан`;
  const crumbEl = document.getElementById("crumbProductTitle");
  if (crumbEl) crumbEl.textContent = p.name;

  const titleEl = document.getElementById("prodDetailTitle");
  if (titleEl) titleEl.textContent = p.name;

  const gostEl = document.getElementById("prodDetailGost");
  if (gostEl) gostEl.textContent = `${p.gost} ${p.aisi ? `• ${p.aisi}` : ""}`;

  const priceEl = document.getElementById("prodDetailPrice");
  if (priceEl) priceEl.textContent = `${p.priceKg.toLocaleString("ru-RU")} ₸`;

  const whEl = document.getElementById("prodDetailWh");
  if (whEl) whEl.textContent = p.warehouse;

  const minOrderEl = document.getElementById("prodDetailMinOrder");
  if (minOrderEl) minOrderEl.textContent = p.minOrder || "от 1 шт";

  const descEl = document.getElementById("prodDetailDesc");
  if (descEl) descEl.textContent = p.desc;

  // Specs List
  const specsList = document.getElementById("prodDetailSpecsList");
  if (specsList) {
    specsList.innerHTML = `
      <div class="quick-spec-item"><span>Марка материала:</span><strong>${p.material}</strong></div>
      <div class="quick-spec-item"><span>Стандарт:</span><strong>${p.gost}</strong></div>
      <div class="quick-spec-item"><span>Форма проката:</span><strong>${p.form}</strong></div>
      <div class="quick-spec-item"><span>Размер / Сечение:</span><strong>${p.size}</strong></div>
      ${p.aisi ? `<div class="quick-spec-item"><span>Аналог AISI (США):</span><strong>${p.aisi}</strong></div>` : ""}
      ${p.din ? `<div class="quick-spec-item"><span>Аналог DIN/EN (ЕС):</span><strong>${p.din}</strong></div>` : ""}
    `;
  }

  // Chemical Table
  const chemHead = document.getElementById("prodDetailChemHead");
  const chemBody = document.getElementById("prodDetailChemBody");
  if (chemHead && chemBody && p.chem) {
    const keys = Object.keys(p.chem);
    chemHead.innerHTML = `<tr>${keys.map(k => `<th>${k}</th>`).join("")}</tr>`;
    chemBody.innerHTML = `<tr>${keys.map(k => `<td>${p.chem[k]}</td>`).join("")}</tr>`;
  }

  // Add to Quote Button
  const addBtn = document.getElementById("prodDetailAddQuoteBtn");
  if (addBtn) {
    addBtn.addEventListener("click", () => {
      const qty = document.getElementById("prodDetailQty")?.value || 1;
      QuoteManager.addItem({
        id: p.id,
        title: `${p.name} (${p.material})`,
        material: p.material,
        size: p.size,
        quantity: `${qty} шт / партия`,
        price: `${p.priceKg} ₸/кг`
      });
      showToast(`Позиция "${p.material}" добавлена в заявку!`);
    });
  }

  // Direct WhatsApp Button
  const waBtn = document.getElementById("prodDetailWaBtn");
  if (waBtn) {
    const msg = `Сәлеметсіз бе! Прошу выставить счет на позицию: ${p.name} (${p.material}, ${p.size}), стандарт ${p.gost}. В наличии на складе ${p.warehouse}?`;
    waBtn.href = "https://wa.me/77005557080?text=" + encodeURIComponent(msg);
  }

  // Tab switching inside product
  document.querySelectorAll(".prod-tab-btn").forEach(btn => {
    btn.addEventListener("click", () => {
      document.querySelectorAll(".prod-tab-btn").forEach(b => b.classList.remove("active"));
      document.querySelectorAll(".prod-tab-pane").forEach(p => p.classList.remove("active"));
      btn.classList.add("active");
      const targetPane = document.getElementById(btn.dataset.tab);
      if (targetPane) targetPane.classList.add("active");
    });
  });
}

