/**
 * FERROTECH KAZAKHSTAN — CATALOG PAGE CONTROLLER
 * Filter, Sort, View Modes (Grid/Table), Pagination
 */

let currentCategory = "all";
let currentMaterial = "all";
let currentForm = "all";
let currentSearch = "";
let currentSort = "default";
let currentViewMode = "grid";
let currentPage = 1;
const itemsPerPage = 6;

document.addEventListener("DOMContentLoaded", () => {
  // Check URL params for category or query
  const urlParams = new URLSearchParams(window.location.search);
  if (urlParams.has("cat")) {
    currentCategory = urlParams.get("cat");
  }
  if (urlParams.has("q")) {
    currentSearch = urlParams.get("q");
    const searchInput = document.getElementById("catalogSearchInput");
    if (searchInput) searchInput.value = currentSearch;
  }

  initCatalogUI();
  renderCatalog();
});

function initCatalogUI() {
  // Sidebar category clicks
  document.querySelectorAll(".cat-tree-item > a").forEach(link => {
    link.addEventListener("click", (e) => {
      e.preventDefault();
      document.querySelectorAll(".cat-tree-item").forEach(el => el.classList.remove("active"));
      link.closest(".cat-tree-item").classList.add("active");
      currentCategory = link.dataset.cat || "all";
      currentPage = 1;
      renderCatalog();
    });
  });

  // Filter selects
  const formSelect = document.getElementById("catalogFilterForm");
  if (formSelect) {
    formSelect.addEventListener("change", (e) => {
      currentForm = e.target.value;
      currentPage = 1;
      renderCatalog();
    });
  }

  const sortSelect = document.getElementById("catalogSortSelect");
  if (sortSelect) {
    sortSelect.addEventListener("change", (e) => {
      currentSort = e.target.value;
      renderCatalog();
    });
  }

  const searchInput = document.getElementById("catalogSearchInput");
  if (searchInput) {
    searchInput.addEventListener("input", (e) => {
      currentSearch = e.target.value.trim().toLowerCase();
      currentPage = 1;
      renderCatalog();
    });
  }

  // View mode toggle
  const gridBtn = document.getElementById("viewGridBtn");
  const tableBtn = document.getElementById("viewTableBtn");
  if (gridBtn && tableBtn) {
    gridBtn.addEventListener("click", () => {
      currentViewMode = "grid";
      gridBtn.classList.add("active");
      tableBtn.classList.remove("active");
      renderCatalog();
    });
    tableBtn.addEventListener("click", () => {
      currentViewMode = "table";
      tableBtn.classList.add("active");
      gridBtn.classList.remove("active");
      renderCatalog();
    });
  }
}

function getFilteredProducts() {
  return FERRO_PRODUCTS.filter(p => {
    const matchCat = currentCategory === "all" || p.category === currentCategory;
    const matchForm = currentForm === "all" || p.form.toLowerCase() === currentForm.toLowerCase();
    const q = currentSearch.toLowerCase();
    const matchSearch = !q ||
      p.name.toLowerCase().includes(q) ||
      p.material.toLowerCase().includes(q) ||
      p.gost.toLowerCase().includes(q) ||
      (p.aisi && p.aisi.toLowerCase().includes(q));

    return matchCat && matchForm && matchSearch;
  }).sort((a, b) => {
    if (currentSort === "price_asc") return a.priceKg - b.priceKg;
    if (currentSort === "price_desc") return b.priceKg - a.priceKg;
    if (currentSort === "name_asc") return a.name.localeCompare(b.name);
    return 0;
  });
}

function renderCatalog() {
  const filtered = getFilteredProducts();
  const countEl = document.getElementById("catalogTotalCount");
  if (countEl) countEl.textContent = `Найдено: ${filtered.length} позиций в РК`;

  const totalPages = Math.ceil(filtered.length / itemsPerPage) || 1;
  if (currentPage > totalPages) currentPage = totalPages;

  const startIndex = (currentPage - 1) * itemsPerPage;
  const pageItems = filtered.slice(startIndex, startIndex + itemsPerPage);

  const container = document.getElementById("catalogOutputContainer");
  if (!container) return;

  if (pageItems.length === 0) {
    container.innerHTML = `
      <div style="background:#ffffff; border:1px solid #e2e8f0; border-radius:8px; padding:40px; text-align:center;">
        <h3 style="margin-bottom:10px;">Позиций по заданным критериям не найдено</h3>
        <p style="color:#64748b; margin-bottom:16px;">Попробуйте сбросить фильтры или обратитесь в отдел продаж для поставки редких марок под заказ.</p>
        <button class="btn btn-primary" onclick="resetCatalogFilters()">Сбросить фильтры</button>
      </div>
    `;
    renderPagination(0);
    return;
  }

  if (currentViewMode === "grid") {
    container.innerHTML = `
      <div class="products-grid">
        ${pageItems.map(p => `
          <div class="product-card">
            <span class="card-gost-tag">${p.gost} ${p.aisi ? `• ${p.aisi}` : ""}</span>
            <h3 class="product-card-title"><a href="product.html?id=${p.id}">${p.name}</a></h3>
            <div class="product-card-specs">
              <span>Марка: <strong>${p.material}</strong></span>
              <span>Форма / Размер: <strong>${p.size}</strong></span>
              <span>Склады: <strong>${p.warehouse}</strong></span>
            </div>
            <div class="product-card-footer">
              <div class="product-card-price">
                ${p.priceKg.toLocaleString("ru-RU")} ₸ <small>/кг с НДС</small>
              </div>
              <button class="btn btn-primary btn-sm" onclick="addToQuoteQuick('${p.id}')">+ В заявку</button>
            </div>
          </div>
        `).join("")}
      </div>
    `;
  } else {
    container.innerHTML = `
      <div class="table-responsive">
        <table class="data-table">
          <thead>
            <tr>
              <th>Наименование позиции</th>
              <th>Марка</th>
              <th>Стандарт (ГОСТ/AISI)</th>
              <th>Размер</th>
              <th>Склад в РК</th>
              <th>Цена с НДС</th>
              <th>Действие</th>
            </tr>
          </thead>
          <tbody>
            ${pageItems.map(p => `
              <tr>
                <td><strong><a href="product.html?id=${p.id}">${p.name}</a></strong></td>
                <td><span style="font-family:var(--font-mono); font-weight:700; color:#0284c7;">${p.material}</span></td>
                <td style="font-size:12px; color:#64748b;">${p.gost}</td>
                <td style="font-family:var(--font-mono); font-size:12px;">${p.size}</td>
                <td><span class="stock-tag in-stock">${p.warehouse}</span></td>
                <td style="font-family:var(--font-mono); font-weight:700; color:#d97706;">${p.priceKg.toLocaleString("ru-RU")} ₸</td>
                <td><button class="btn btn-outline btn-sm" onclick="addToQuoteQuick('${p.id}')">+ Заявка</button></td>
              </tr>
            `).join("")}
          </tbody>
        </table>
      </div>
    `;
  }

  renderPagination(totalPages);
}

function renderPagination(totalPages) {
  const paginationWrap = document.getElementById("catalogPagination");
  if (!paginationWrap) return;

  if (totalPages <= 1) {
    paginationWrap.innerHTML = "";
    return;
  }

  let html = "";
  for (let i = 1; i <= totalPages; i++) {
    html += `<button class="page-btn ${i === currentPage ? 'active' : ''}" onclick="goToPage(${i})">${i}</button>`;
  }
  paginationWrap.innerHTML = html;
}

function goToPage(page) {
  currentPage = page;
  renderCatalog();
  window.scrollTo({ top: 300, behavior: 'smooth' });
}

function addToQuoteQuick(productId) {
  const p = FERRO_PRODUCTS.find(item => item.id === productId);
  if (p) {
    QuoteManager.addItem({
      title: `${p.name} (${p.material})`,
      material: p.material,
      size: p.size,
      quantity: "1 шт / партия",
      price: `${p.priceKg} ₸/кг`
    });
    showToast(`Позиция "${p.material}" добавлена в спецификацию!`);
  }
}

function resetCatalogFilters() {
  currentCategory = "all";
  currentMaterial = "all";
  currentForm = "all";
  currentSearch = "";
  currentSort = "default";
  document.querySelectorAll(".cat-tree-item").forEach(el => el.classList.toggle("active", el.dataset.cat === "all"));
  const searchInput = document.getElementById("catalogSearchInput");
  if (searchInput) searchInput.value = "";
  const formSelect = document.getElementById("catalogFilterForm");
  if (formSelect) formSelect.value = "all";
  currentPage = 1;
  renderCatalog();
}

/**
 * Export Catalog to Excel-compatible CSV with UTF-8 BOM
 */
function downloadPricelistExcel() {
  const headers = [
    "Код позиции",
    "Наименование",
    "Категория",
    "Марка стали / сплава",
    "Форма проката",
    "Размеры",
    "Стандарт (ГОСТ/ASTM/DIN)",
    "Наличие и склады в РК",
    "Цена с НДС 12% (₸/кг)",
    "Минимальный объем заказа"
  ];

  const rows = FERRO_PRODUCTS.map(p => [
    p.id,
    `"${(p.name || '').replace(/"/g, '""')}"`,
    `"${(p.catName || '').replace(/"/g, '""')}"`,
    `"${(p.material || '').replace(/"/g, '""')}"`,
    `"${(p.form || '').replace(/"/g, '""')}"`,
    `"${(p.size || '').replace(/"/g, '""')}"`,
    `"${(p.gost || '').replace(/"/g, '""')}"`,
    `"${(p.warehouse || '').replace(/"/g, '""')}"`,
    p.priceKg || 0,
    `"${(p.minOrder || '').replace(/"/g, '""')}"`
  ]);

  const csvContent = "\uFEFF" + [headers.join(";"), ...rows.map(r => r.join(";"))].join("\r\n");
  const blob = new Blob([csvContent], { type: "text/csv;charset=utf-8;" });
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = `Прайс_лист_ТОО_Ferrotech_Kazakhstan_${new Date().toISOString().slice(0, 10)}.csv`;
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  URL.revokeObjectURL(url);
  showToast("Прайс-лист успешно выгружен в Excel (.CSV)!");
}


