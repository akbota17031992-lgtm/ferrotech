/**
 * FERROTECH KAZAKHSTAN — CORE PORTAL ENGINE
 * ТОО «Ferrotech Kazakhstan» — г. Астана, г. Алматы, г. Караганда, г. Атырау
 */

// 1. Comprehensive Kazakhstan Metal Database (Prices in ₸ with VAT 12%)
const FERRO_PRODUCTS = [
  // 1. Нержавеющая сталь
  {
    id: "nerzh-list-12x18n10t",
    name: "Лист нержавеющий матовый 12Х18Н10Т",
    category: "stainless",
    catName: "Нержавеющая сталь",
    material: "12Х18Н10Т",
    form: "Лист",
    size: "3.0 × 1000 × 2000 мм",
    gost: "ГОСТ 5582-75",
    aisi: "AISI 321",
    din: "1.4541",
    stock: "in_stock",
    warehouse: "Астана / Алматы",
    priceKg: 2950,
    priceUnit: "₸/кг",
    minOrder: "1 лист (47.4 кг)",
    desc: "Коррозионно-стойкая титаносодержащая аустенитная сталь. Применяется для сварных аппаратов и емкостей, работающих в агрессивных средах до +600°C, а также криогенных установках до -269°C.",
    chem: { "C": "до 0.12%", "Cr": "17.0-19.0%", "Ni": "9.0-11.0%", "Ti": "0.4-0.7%", "Fe": "Основа" }
  },
  {
    id: "nerzh-list-aisi304",
    name: "Лист нержавеющий зеркальный (BA) AISI 304",
    category: "stainless",
    catName: "Нержавеющая сталь",
    material: "AISI 304",
    form: "Лист",
    size: "1.5 × 1250 × 2500 мм",
    gost: "ГОСТ 5582-75 / EN 10088-2",
    aisi: "AISI 304",
    din: "1.4301",
    stock: "in_stock",
    warehouse: "Алматы / Шымкент",
    priceKg: 2450,
    priceUnit: "₸/кг",
    minOrder: "1 лист (37.0 кг)",
    desc: "Пищевая немагнитная нержавеющая сталь общего назначения. Идеальна для пищевого машиностроения, резервуаров, ресторанного оборудования и фасадного декора.",
    chem: { "C": "до 0.08%", "Cr": "18.0-20.0%", "Ni": "8.0-10.5%", "Fe": "Основа" }
  },
  {
    id: "nerzh-truba-12x18n10t",
    name: "Труба нержавеющая бесшовная 12Х18Н10Т",
    category: "stainless",
    catName: "Нержавеющая сталь",
    material: "12Х18Н10Т",
    form: "Труба",
    size: "25 × 2.5 мм, L=6м",
    gost: "ГОСТ 9941-81",
    aisi: "AISI 321",
    din: "1.4541",
    stock: "in_stock",
    warehouse: "Астана / Атырау",
    priceKg: 4200,
    priceUnit: "₸/кг",
    minOrder: "1 хлыст 6м (8.4 кг)",
    desc: "Бесшовная коррозионностойкая труба для ответственных трубопроводов высокого давления, химических и нефтехимических заводов.",
    chem: { "C": "до 0.12%", "Cr": "17.0-19.0%", "Ni": "9.0-11.0%", "Ti": "0.5%", "Fe": "Основа" }
  },
  {
    id: "nerzh-krug-aisi316l",
    name: "Круг нержавеющий калиброванный AISI 316L",
    category: "stainless",
    catName: "Нержавеющая сталь",
    material: "AISI 316L (03Х17Н14М3)",
    form: "Круг",
    size: "ф 40 мм, L=3-4м",
    gost: "ГОСТ 7417-75 / ASTM A276",
    aisi: "AISI 316L",
    din: "1.4404",
    stock: "in_stock",
    warehouse: "Атырау (Нефтегаз)",
    priceKg: 4800,
    priceUnit: "₸/кг",
    minOrder: "1 метр (9.86 кг)",
    desc: "Молибденсодержащая нержавеющая сталь повышенной стойкости к морской воде, щелочам и серной кислоте. Применяется на проектах Тенгиз и Кашаган.",
    chem: { "C": "до 0.03%", "Cr": "16.0-18.0%", "Ni": "10.0-14.0%", "Mo": "2.0-3.0%", "Fe": "Основа" }
  },

  // 2. Цветной металлопрокат (Медь, Латунь, Бронза, Алюминий)
  {
    id: "med-prutok-m1",
    name: "Пруток медный тянутый М1т",
    category: "nonferrous",
    catName: "Цветной металлопрокат",
    material: "М1т (99.9% Cu)",
    form: "Круг",
    size: "ф 20 мм, L=3м",
    gost: "ГОСТ 1535-2016",
    aisi: "UNS C11000",
    din: "CW004A",
    stock: "in_stock",
    warehouse: "Астана / Алматы",
    priceKg: 7600,
    priceUnit: "₸/кг",
    minOrder: "1 шт (8.45 кг)",
    desc: "Электротехнический чистый медный пруток. Высокая электропроводность и теплопередача. Используется в электрооборудовании и распределительных щитах.",
    chem: { "Cu": "≥ 99.9%", "Fe": "до 0.005%", "Ni": "до 0.002%", "O": "до 0.05%" }
  },
  {
    id: "med-shina-m1",
    name: "Шина медная электротехническая ШМТ",
    category: "nonferrous",
    catName: "Цветной металлопрокат",
    material: "М1",
    form: "Полоса",
    size: "40 × 4.0 мм, L=4м",
    gost: "ГОСТ 434-78",
    aisi: "Cu-ETP",
    din: "CW004A",
    stock: "in_stock",
    warehouse: "Астана / Алматы",
    priceKg: 7850,
    priceUnit: "₸/кг",
    minOrder: "1 шт (5.73 кг)",
    desc: "Твердая медная шина для высоковольтных подстанций, шкафов КРУ и трансформаторов.",
    chem: { "Cu": "≥ 99.9%" }
  },
  {
    id: "latun-shestigrannik-ls59",
    name: "Шестигранник латунный ЛС59-1",
    category: "nonferrous",
    catName: "Цветной металлопрокат",
    material: "ЛС59-1 (Свинцовая латунь)",
    form: "Шестигранник",
    size: "№ 17 мм, L=3м",
    gost: "ГОСТ 2060-2006",
    aisi: "UNS C38500",
    din: "CW614N",
    stock: "in_stock",
    warehouse: "Алматы",
    priceKg: 4850,
    priceUnit: "₸/кг",
    minOrder: "1 шт (6.35 кг)",
    desc: "Автоматная латунь для скоростной токарной обработки. Идеальна для штуцеров, ниппелей, гаек и высокоточных метизов.",
    chem: { "Cu": "57.0-60.0%", "Pb": "0.8-1.9%", "Zn": "Остальное" }
  },
  {
    id: "bronza-krug-brazh",
    name: "Круг бронзовый безоловянный БрАЖ9-4",
    category: "nonferrous",
    catName: "Цветной металлопрокат",
    material: "БрАЖ9-4",
    form: "Круг",
    size: "ф 80 мм, L=1.5-2м",
    gost: "ГОСТ 1628-78",
    aisi: "C61900",
    din: "CuAl9Fe4",
    stock: "in_stock",
    warehouse: "Караганда / Алматы",
    priceKg: 8200,
    priceUnit: "₸/кг",
    minOrder: "от 10 кг",
    desc: "Алюминиево-железистая бронза с высокими антифрикционными свойствами. Производство втулок, шестерен, подшипников скольжения для горнорудного оборудования.",
    chem: { "Al": "8.0-10.0%", "Fe": "2.0-4.0%", "Cu": "Основа" }
  },
  {
    id: "alyum-plita-d16t",
    name: "Плита дюралюминиевая закаленная Д16Т",
    category: "nonferrous",
    catName: "Цветной металлопрокат",
    material: "Д16Т",
    form: "Лист",
    size: "20 × 1200 × 3000 мм",
    gost: "ГОСТ 17232-99",
    aisi: "AA 2024-T4",
    din: "3.1355",
    stock: "in_stock",
    warehouse: "Астана / Караганда",
    priceKg: 3900,
    priceUnit: "₸/кг",
    minOrder: "1 плита (201.6 кг)",
    desc: "Конструкционный авиационный дюралюминий высокой удельной прочности. Применяется в машиностроении, авиации и силовой гидравлике.",
    chem: { "Cu": "3.8-4.9%", "Mg": "1.2-1.8%", "Mn": "0.3-0.9%", "Al": "Основа" }
  },

  // 3. Спецсплавы и тугоплавкие металлы
  {
    id: "nichrom-provoloka-x20n80",
    name: "Проволока нихромовая Х20Н80",
    category: "special",
    catName: "Спецсплавы и тугоплавкие",
    material: "Х20Н80",
    form: "Проволока",
    size: "ф 0.8 мм, катушка",
    gost: "ГОСТ 12766.1-90",
    aisi: "Nichrome 80",
    din: "2.4869",
    stock: "in_stock",
    warehouse: "Астана (Центральный)",
    priceKg: 17200,
    priceUnit: "₸/кг",
    minOrder: "1 катушка (2-5 кг)",
    desc: "Прецизионный нагревательный сплав с рабочими температурами до 1200°C. Нагреватели промышленных плавильных печей, сушильных шкафов и ТЭНов.",
    chem: { "Ni": "75.0-78.0%", "Cr": "20.0-23.0%", "Fe": "до 1.5%" }
  },
  {
    id: "fehral-x23yu5t",
    name: "Проволока фехраль Х23Ю5Т",
    category: "special",
    catName: "Спецсплавы и тугоплавкие",
    material: "Х23Ю5Т",
    form: "Проволока",
    size: "ф 2.0 мм",
    gost: "ГОСТ 12766.1-90",
    aisi: "Kanthal A1",
    din: "1.4767",
    stock: "in_stock",
    warehouse: "Караганда",
    priceKg: 5800,
    priceUnit: "₸/кг",
    minOrder: "от 5 кг",
    desc: "Экономичный жаростойкий железохромалюминиевый сплав с предельной температурой эксплуатации до 1400°C.",
    chem: { "Cr": "22.0-25.0%", "Al": "5.0-5.8%", "Fe": "Основа" }
  },
  {
    id: "molybden-krug-mch",
    name: "Пруток молибденовый МЧ",
    category: "special",
    catName: "Спецсплавы и тугоплавкие",
    material: "МЧ (чистый молибден)",
    form: "Круг",
    size: "ф 16 мм, L=500 мм",
    gost: "ГОСТ 51007-97",
    aisi: "Molybdenum Grade 361",
    din: "Mo 99.95",
    stock: "in_stock",
    warehouse: "Астана",
    priceKg: 44000,
    priceUnit: "₸/кг",
    minOrder: "от 1 шт (1.02 кг)",
    desc: "Тугоплавкий металл с температурой плавления 2623°C. Вакуумная техника, нагревательные элементы сверхвысоких температур.",
    chem: { "Mo": "≥ 99.9%" }
  },

  // 4. Титан и Никель
  {
    id: "titan-krug-vt1-0",
    name: "Пруток титановый кованый ВТ1-0",
    category: "titanium",
    catName: "Титан и никель",
    material: "ВТ1-0",
    form: "Круг",
    size: "ф 50 мм, L=2-3м",
    gost: "ГОСТ 26492-85",
    aisi: "Titanium Grade 2",
    din: "3.7035",
    stock: "in_stock",
    warehouse: "Астана / Атырау",
    priceKg: 18000,
    priceUnit: "₸/кг",
    minOrder: "от 1 метра (8.85 кг)",
    desc: "Технически чистый титан с превосходной коррозионной стойкостью к агрессивным рассолам, сернистым газам и кислотам. Нефтехимия и авиастроение.",
    chem: { "Ti": "≥ 99.2%", "Fe": "до 0.25%", "C": "до 0.07%" }
  },
  {
    id: "titan-list-vt6",
    name: "Лист титановый высокопрочный ВТ6",
    category: "titanium",
    catName: "Титан и никель",
    material: "ВТ6",
    form: "Лист",
    size: "4.0 × 1000 × 2000 мм",
    gost: "ГОСТ 22178-76",
    aisi: "Ti-6Al-4V (Grade 5)",
    din: "3.7164",
    stock: "in_stock",
    warehouse: "Астана",
    priceKg: 21000,
    priceUnit: "₸/кг",
    minOrder: "1 лист (35.5 кг)",
    desc: "Высокопрочный легированный титановый сплав для ответственных силовых элементов, насосов высокого давления и авиационных конструкций.",
    chem: { "Al": "5.3-6.8%", "V": "3.5-5.3%", "Ti": "Основа" }
  },

  // 5. Инженерные полимеры
  {
    id: "ftoroplast-sterzhen-f4",
    name: "Стержень фторопластовый Ф-4 (PTFE)",
    category: "polymers",
    catName: "Инженерные полимеры",
    material: "Ф-4 (Тефлон)",
    form: "Стержень",
    size: "ф 60 мм, L=1000 мм",
    gost: "ТУ 6-05-810-88",
    aisi: "PTFE Virgin",
    din: "Teflon",
    stock: "in_stock",
    warehouse: "Все склады РК",
    priceKg: 9100,
    priceUnit: "₸/кг",
    minOrder: "1 шт (6.22 кг)",
    desc: "Абсолютная химическая инертность, термостойкость от -269°C до +260°C и минимальный коэффициент трения. Изготовление химических манжет и уплотнений.",
    chem: { "Плотность": "2.20 г/см³", "Диэлектрик": "100%" }
  },
  {
    id: "kaprolon-sterzhen-pa6",
    name: "Капролон стержневой блочный ПА-6",
    category: "polymers",
    catName: "Инженерные полимеры",
    material: "ПА-6 (Полиамид-6)",
    form: "Стержень",
    size: "ф 80 мм, L=1000 мм",
    gost: "ТУ 6-05-988-87",
    aisi: "Nylon 6",
    din: "Polyamide 6",
    stock: "in_stock",
    warehouse: "Караганда / Астана",
    priceKg: 3200,
    priceUnit: "₸/кг",
    minOrder: "1 шт (5.78 кг)",
    desc: "Высокопрочный полимер, заменяющий бронзу и сталь в узлах трения. Изготовление шестерен, шкивов, роликов горнорудных конвейеров.",
    chem: { "Плотность": "1.15 г/см³" }
  },

  // 6. Черный и фасонный прокат (Ferrous)
  {
    id: "truba-profil-09g2s",
    name: "Труба профильная 09Г2С",
    category: "ferrous",
    catName: "Черный и фасонный прокат",
    material: "09Г2С (Низколегированная)",
    form: "Труба",
    size: "120 × 120 × 6.0 мм, L=12м",
    gost: "ГОСТ 30245-2003",
    aisi: "ASTM A500 Gr.B",
    din: "S355J2H",
    stock: "in_stock",
    warehouse: "Астана / Караганда",
    priceKg: 520,
    priceUnit: "₸/кг (520 000 ₸/т)",
    minOrder: "1 хлыст 12м (253 кг)",
    desc: "Морозостойкая профильная труба для несущих металлоконструкций, работающих при температурах до -70°C в северных регионах Казахстана.",
    chem: { "C": "до 0.12%", "Mn": "1.3-1.7%", "Si": "0.5-0.8%", "Fe": "Основа" }
  },
  {
    id: "krug-stal-40xn2ma",
    name: "Круг инструментальный легированный 40ХН2МА",
    category: "ferrous",
    catName: "Черный и фасонный прокат",
    material: "40ХН2МА",
    form: "Круг",
    size: "ф 90 мм, L=4-6м",
    gost: "ГОСТ 4543-71",
    aisi: "AISI 4340",
    din: "34CrNiMo6",
    stock: "in_stock",
    warehouse: "Караганда",
    priceKg: 760,
    priceUnit: "₸/кг (760 000 ₸/т)",
    minOrder: "от 1 метра (49.9 кг)",
    desc: "Высоколегированная конструкционная сталь для коленчатых валов, роторов турбин, шестерен тяжелой горной техники.",
    chem: { "C": "0.37-0.44%", "Cr": "0.6-0.9%", "Ni": "1.25-1.65%", "Mo": "0.15-0.25%" }
  }
];

// 2. City Contacts Data (Kazakhstan Network)
const KZ_CITIES = {
  ast: {
    name: "Астана (Центральный хаб)",
    phone: "+7 (7172) 97-20-40",
    address: "Индустриальный парк №1, ул. А184, здание 14",
    email: "astana@ferrotech.kz",
    hours: "Пн-Пт 08:30 – 18:30, отгрузка 24/7 по согласованию",
    stockDesc: "12 000 м² крытого склада. Все 65 000 позиций в наличии."
  },
  alm: {
    name: "Алматы (Южный филиал)",
    phone: "+7 (727) 350-50-60",
    address: "Жетысуский район, пр. Рыскулова, 143/1",
    email: "almaty@ferrotech.kz",
    hours: "Пн-Пт 09:00 – 18:00, склад: 08:30 – 17:30",
    stockDesc: "Склад цветных металлов, меди, бронзы и тонкостенных нержавеющих труб."
  },
  krg: {
    name: "Караганда (Склад спецсталей)",
    phone: "+7 (7212) 94-05-30",
    address: "Октябрьский район, Учетный квартал 134, стр. 28",
    email: "karaganda@ferrotech.kz",
    hours: "Пн-Пт 08:00 – 17:00",
    stockDesc: "Поковки, круги большого диаметра, конструкционные и инструментальные стали."
  },
  atr: {
    name: "Атырау (Нефтегазовый хаб)",
    phone: "+7 (7122) 76-12-10",
    address: "Северная промзона, трасса Атырау — Доссор, 8",
    email: "atyrau@ferrotech.kz",
    hours: "Пн-Пт 08:30 – 18:00",
    stockDesc: "Нержавейка AISI 316L, 12Х18Н10Т, титан, фланцы под проекты Тенгиз и Кашаган."
  },
  shym: {
    name: "Шымкент",
    phone: "+7 (7252) 98-44-20",
    address: "Индустриальная зона «Оңтүстік», здание 42",
    email: "shymkent@ferrotech.kz",
    hours: "Пн-Пт 09:00 – 18:00",
    stockDesc: "Сортовой, листовой и профильный прокат."
  }
};

// 3. Global Quote Cart Store (Persisted across pages in localStorage)
class QuoteManager {
  static getItems() {
    try {
      return JSON.parse(localStorage.getItem("ferro_quote_items") || "[]");
    } catch {
      return [];
    }
  }

  static addItem(item) {
    const items = this.getItems();
    items.push({
      id: item.id || Date.now(),
      title: item.title || item.name,
      material: item.material || "-",
      size: item.size || "-",
      quantity: item.quantity || "1 шт",
      price: item.price || "-"
    });
    localStorage.setItem("ferro_quote_items", JSON.stringify(items));
    this.updateBadges();
  }

  static removeItem(index) {
    const items = this.getItems();
    items.splice(index, 1);
    localStorage.setItem("ferro_quote_items", JSON.stringify(items));
    this.updateBadges();
  }

  static clear() {
    localStorage.removeItem("ferro_quote_items");
    this.updateBadges();
  }

  static updateBadges() {
    const items = this.getItems();
    const count = items.length;
    document.querySelectorAll(".cart-badge, #quoteCountBadge").forEach(el => {
      el.textContent = count;
    });
  }
}

// 4. Toast Notification
function showToast(message) {
  let container = document.getElementById("toastContainer");
  if (!container) {
    container = document.createElement("div");
    container.id = "toastContainer";
    container.className = "toast-container";
    document.body.appendChild(container);
  }

  const toast = document.createElement("div");
  toast.className = "toast";
  toast.innerHTML = `<span>✔</span> <span>${message}</span>`;
  container.appendChild(toast);

  setTimeout(() => {
    toast.style.opacity = "0";
    toast.style.transition = "opacity 0.3s ease";
    setTimeout(() => toast.remove(), 300);
  }, 4000);
}

// 5. Initialize Global Header & UI Components
document.addEventListener("DOMContentLoaded", () => {
  QuoteManager.updateBadges();

  // City Selector
  const citySelect = document.getElementById("citySelect");
  const headerPhone = document.getElementById("headerPhone");
  const storedCity = localStorage.getItem("ferro_city") || "ast";

  if (citySelect) {
    citySelect.value = storedCity;
    const current = KZ_CITIES[storedCity] || KZ_CITIES.ast;
    if (headerPhone) {
      headerPhone.textContent = current.phone;
      headerPhone.href = "tel:" + current.phone.replace(/[^+\d]/g, "");
    }

    citySelect.addEventListener("change", (e) => {
      const cityKey = e.target.value;
      localStorage.setItem("ferro_city", cityKey);
      const sel = KZ_CITIES[cityKey] || KZ_CITIES.ast;
      if (headerPhone) {
        headerPhone.textContent = sel.phone;
        headerPhone.href = "tel:" + sel.phone.replace(/[^+\d]/g, "");
      }
      showToast(`Регион изменен: ${sel.name}. Склады РК синхронизированы.`);
    });
  }

  // Bilingual Language Switcher (RU / KZ)
  initBilingualSwitcher();

  // Global Search Autocomplete
  const globalSearch = document.getElementById("globalSearch");
  const searchDropdown = document.getElementById("searchDropdown");
  const searchBtn = document.getElementById("searchSubmitBtn");

  if (globalSearch && searchDropdown) {
    globalSearch.addEventListener("input", (e) => {
      const q = e.target.value.trim().toLowerCase();
      if (!q) {
        searchDropdown.classList.add("hidden");
        return;
      }

      const matches = FERRO_PRODUCTS.filter(p =>
        p.name.toLowerCase().includes(q) ||
        p.material.toLowerCase().includes(q) ||
        p.gost.toLowerCase().includes(q) ||
        (p.aisi && p.aisi.toLowerCase().includes(q))
      );

      if (matches.length === 0) {
        searchDropdown.innerHTML = `<div class="suggest-item" style="color:#94a3b8">Ничего не найдено в наличии. Нажмите Enter для запроса под заказ.</div>`;
      } else {
        searchDropdown.innerHTML = matches.slice(0, 7).map(item => `
          <div class="suggest-item" data-id="${item.id}">
            <div>
              <strong>${item.name}</strong>
              <span style="color:#d97706; margin-left:6px;">${item.material}</span>
            </div>
            <div class="suggest-meta">${item.warehouse} | ${item.priceKg} ₸/кг</div>
          </div>
        `).join("");
      }
      searchDropdown.classList.remove("hidden");
    });

    searchDropdown.addEventListener("click", (e) => {
      const itemEl = e.target.closest(".suggest-item");
      if (itemEl && itemEl.dataset.id) {
        window.location.href = `product.html?id=${itemEl.dataset.id}`;
      }
    });

    document.addEventListener("click", (e) => {
      if (!e.target.closest(".header-search-box")) {
        searchDropdown.classList.add("hidden");
      }
    });

    if (searchBtn) {
      searchBtn.addEventListener("click", () => {
        const val = globalSearch.value.trim();
        if (val) {
          window.location.href = `catalog.html?q=${encodeURIComponent(val)}`;
        }
      });
    }
  }

  // Floating WhatsApp Button
  let waBtn = document.querySelector(".floating-whatsapp-btn");
  if (!waBtn) {
    waBtn = document.createElement("a");
    waBtn.className = "floating-whatsapp-btn";
    waBtn.href = "https://wa.me/77005557080?text=" + encodeURIComponent("Сәлеметсіз бе! Интересует наличие и цена на металлопрокат в ТОО Ferrotech Kazakhstan.");
    waBtn.target = "_blank";
    waBtn.innerHTML = `<span>💬</span> <span>WhatsApp отдел сбыта</span>`;
    document.body.appendChild(waBtn);
  }

  // Quote Cart Modal Triggers
  const openQuoteBtn = document.getElementById("openQuoteModal");
  const quoteModal = document.getElementById("quoteModal");
  const closeQuoteBtn = document.getElementById("closeQuoteModal");

  if (openQuoteBtn && quoteModal) {
    openQuoteBtn.addEventListener("click", () => {
      renderQuoteModalContent();
      quoteModal.classList.remove("hidden");
    });
  }

  if (closeQuoteBtn && quoteModal) {
    closeQuoteBtn.addEventListener("click", () => quoteModal.classList.add("hidden"));
    quoteModal.addEventListener("click", (e) => {
      if (e.target === quoteModal) quoteModal.classList.add("hidden");
    });
  }

  // Print Quote -> Open Official Commercial Proposal (КП) with Seal & Signatures
  const printQuoteBtn = document.getElementById("printQuoteBtn");
  if (printQuoteBtn) {
    printQuoteBtn.addEventListener("click", () => {
      openOfficialKpDocument();
    });
  }

  // Export to WhatsApp button
  const exportWaBtn = document.getElementById("exportQuoteToWaBtn");
  if (exportWaBtn) {
    exportWaBtn.addEventListener("click", () => {
      const items = QuoteManager.getItems();
      if (items.length === 0) {
        showToast("Заявка пуста!");
        return;
      }
      let text = "Здравствуйте! Прошу выставить счет на ТОО от компании Ferrotech Kazakhstan:\n\n";
      items.forEach((it, idx) => {
        text += `${idx + 1}. ${it.title} | ${it.size} | ${it.quantity}\n`;
      });
      text += "\nПлательщик НДС 12%. Ждем КП!";
      window.open("https://wa.me/77005557080?text=" + encodeURIComponent(text), "_blank");
    });
  }
});

function renderQuoteModalContent() {
  const items = QuoteManager.getItems();
  const listEl = document.getElementById("quoteItemsList");
  const emptyEl = document.getElementById("quoteEmptyNotice");
  const tableEl = document.getElementById("quoteItemsTableWrap");

  if (!listEl) return;

  if (items.length === 0) {
    if (emptyEl) emptyEl.classList.remove("hidden");
    if (tableEl) tableEl.classList.add("hidden");
  } else {
    if (emptyEl) emptyEl.classList.add("hidden");
    if (tableEl) tableEl.classList.remove("hidden");

    listEl.innerHTML = items.map((it, idx) => `
      <tr>
        <td><strong>${it.title}</strong></td>
        <td>${it.size || "-"}</td>
        <td>${it.quantity || "1"}</td>
        <td><button type="button" class="btn btn-sm btn-outline" style="color:#ef4444;" onclick="deleteQuoteItem(${idx})">&times;</button></td>
      </tr>
    `).join("");
  }
}

// 6. Bilingual Language Dictionary & Switcher (RU / KZ)
const I18N = {
  ru: {
    brandSubtitle: "Специальная металлургия Казахстана",
    vatNotice: "✓ Плательщик НДС 12% • ЭСФ и СНТ",
    schedule: "Прием заявок: Пн-Пт 08:30 – 18:30",
    catalogBtn: "☰ ВЕСЬ КАТАЛОГ МЕТАЛЛОПРОКАТА",
    searchPlaceholder: "Поиск по марке стали, ГОСТ, размерам (напр. 12Х18Н10Т, медь М1, ВТ1-0, нихром)...",
    searchBtn: "Найти",
    callbackBtn: "Звонок",
    quoteBtn: "Заявка (КП)",
    navStainless: "Нержавеющая сталь",
    navNonferrous: "Цветные металлы",
    navSpecial: "Спецсплавы и нихром",
    navTitanium: "Титан и никель",
    navPolymers: "Инженерные полимеры",
    navFerrous: "Черный прокат",
    navServices: "Услуги резки",
    navCalc: "🧮 Калькулятор веса",
    navDelivery: "Доставка по РК",
    navAbout: "О компании",
    navContacts: "Склады"
  },
  kz: {
    brandSubtitle: "Қазақстанның арнайы металлургиясы",
    vatNotice: "✓ 12% ҚҚС төлеуші • ЭШФ және ТІЖ",
    schedule: "Өтінімдерді қабылдау: Дс-Жм 08:30 – 18:30",
    catalogBtn: "☰ МЕТАЛЛ ПРОКАТЫНЫҢ ТОЛЫҚ КАТАЛОГЫ",
    searchPlaceholder: "Болат маркасы, МЕМСТ, өлшемдері бойынша іздеу (мыс. 12Х18Н10Т, М1 мыс, ВТ1-0, нихром)...",
    searchBtn: "Іздеу",
    callbackBtn: "Қоңырау",
    quoteBtn: "Өтінім (КП)",
    navStainless: "Тот баспайтын болат",
    navNonferrous: "Түсті металдар",
    navSpecial: "Арнайы қорытпалар",
    navTitanium: "Титан мен никель",
    navPolymers: "Инженерлік полимерлер",
    navFerrous: "Қара металл прокаты",
    navServices: "Кесу қызметтері",
    navCalc: "🧮 Металл калькуляторы",
    navDelivery: "ҚР бойынша жеткізу",
    navAbout: "Компания туралы",
    navContacts: "Қоймалар"
  }
};

function initBilingualSwitcher() {
  const switchWrap = document.querySelector(".top-lang-switch");
  if (!switchWrap) return;

  const currentLang = localStorage.getItem("ferro_lang") || "ru";
  applyLanguage(currentLang, false);

  switchWrap.querySelectorAll(".lang-btn").forEach(btn => {
    btn.style.cursor = "pointer";
    btn.addEventListener("click", () => {
      const text = btn.textContent.trim().toUpperCase();
      const lang = text.includes("ҚАЗ") || text.includes("KZ") ? "kz" : "ru";
      localStorage.setItem("ferro_lang", lang);
      applyLanguage(lang, true);
    });
  });
}

function applyLanguage(lang, notify) {
  const dict = I18N[lang] || I18N.ru;

  // Update active state on buttons
  document.querySelectorAll(".top-lang-switch .lang-btn").forEach(btn => {
    const text = btn.textContent.trim().toUpperCase();
    if (lang === "kz") {
      btn.classList.toggle("active", text.includes("ҚАЗ") || text.includes("KZ"));
    } else {
      btn.classList.toggle("active", text.includes("РУС") || text.includes("RU"));
    }
  });

  // UI labels
  const brandSub = document.querySelector(".brand-subtext");
  if (brandSub) brandSub.textContent = dict.brandSubtitle;

  const vatNotice = document.querySelector(".vat-notice");
  if (vatNotice) vatNotice.textContent = dict.vatNotice;

  const schedule = document.querySelector(".contact-schedule");
  if (schedule) schedule.textContent = dict.schedule;

  const searchInput = document.getElementById("globalSearch");
  if (searchInput) searchInput.placeholder = dict.searchPlaceholder;

  const searchBtn = document.getElementById("searchSubmitBtn");
  if (searchBtn) searchBtn.textContent = dict.searchBtn;

  const catMenuBtn = document.querySelector(".catalog-menu-btn");
  if (catMenuBtn) {
    const textSpan = catMenuBtn.querySelector("span:last-child");
    if (textSpan) textSpan.textContent = dict.catalogBtn.replace("☰ ", "");
  }

  // Nav links
  const navLinks = document.querySelectorAll(".main-site-nav a");
  navLinks.forEach(link => {
    const href = link.getAttribute("href") || "";
    if (href.includes("cat=stainless")) link.textContent = dict.navStainless;
    else if (href.includes("cat=nonferrous")) link.textContent = dict.navNonferrous;
    else if (href.includes("cat=special")) link.textContent = dict.navSpecial;
    else if (href.includes("cat=titanium")) link.textContent = dict.navTitanium;
    else if (href.includes("cat=polymers")) link.textContent = dict.navPolymers;
    else if (href.includes("cat=ferrous")) link.textContent = dict.navFerrous;
    else if (href.includes("services.html")) link.textContent = dict.navServices;
    else if (href.includes("calculator.html")) link.textContent = dict.navCalc;
    else if (href.includes("delivery.html")) link.textContent = dict.navDelivery;
    else if (href.includes("about.html")) link.textContent = dict.navAbout;
    else if (href.includes("contacts.html")) link.textContent = dict.navContacts;
  });

  if (notify) {
    showToast(lang === "kz" ? "Тіл ауыстырылды: Қазақ тілі 🇰🇿" : "Язык переключен: Русский 🇷🇺");
  }
}

function deleteQuoteItem(idx) {
  QuoteManager.removeItem(idx);
  renderQuoteModalContent();
}

/**
 * Open Official Commercial Proposal (КП) with Blue Corporate Seal & Signatures
 */
function openOfficialKpDocument() {
  const items = QuoteManager.getItems();
  if (items.length === 0) {
    showToast("Спецификация пуста! Сначала добавьте позиции из каталога или калькулятора.");
    return;
  }

  let modal = document.getElementById("officialKpModal");
  if (!modal) {
    modal = document.createElement("div");
    modal.id = "officialKpModal";
    modal.className = "modal-overlay";
    document.body.appendChild(modal);
  }

  const kpNumber = "КП-KZ-" + new Date().getFullYear() + "-" + String(Math.floor(100 + Math.random() * 900));
  const currentDate = new Date().toLocaleDateString("ru-RU", { day: '2-digit', month: 'long', year: 'numeric' });

  // Generate Items Rows
  let tableRows = items.map((it, idx) => `
    <tr>
      <td style="text-align:center;">${idx + 1}</td>
      <td><strong>${it.title}</strong></td>
      <td>${it.size || "По ТЗ"}</td>
      <td style="text-align:center;">ГОСТ / СТ РК</td>
      <td style="text-align:center;">${it.quantity || "1 партия"}</td>
      <td style="text-align:right; font-family:var(--font-mono);">${it.price || "По расчету"}</td>
      <td style="text-align:right; font-family:var(--font-mono); font-weight:700;">${it.price || "В счете"}</td>
    </tr>
  `).join("");

  modal.innerHTML = `
    <div class="modal-card kp-modal-container">
      <div class="kp-toolbar">
        <span style="font-weight:700; font-size:13px;">📄 Предпросмотр официального КП ТОО «Ferrotech Kazakhstan»</span>
        <div style="display:flex; gap:10px;">
          <button type="button" class="btn btn-sm btn-primary" onclick="window.print()">🖨️ Распечатать / Сохранить в PDF</button>
          <button type="button" class="btn btn-sm btn-outline" style="color:#ffffff; border-color:#475569;" onclick="document.getElementById('officialKpModal').classList.add('hidden')">✕ Закрыть</button>
        </div>
      </div>

      <div class="kp-document-paper" id="kpPrintableArea">
        <!-- Letterhead Header -->
        <div class="kp-header-row">
          <div>
            <div class="kp-logo-brand">
              <span style="color:#d97706;">⬢</span>
              <span>FERRO<span style="color:#d97706;">TECH</span> KAZAKHSTAN</span>
            </div>
            <div style="font-size:12px; font-weight:700; color:#0f172a; margin-top:2px;">ТОО «Ferrotech Kazakhstan» / «ФЕРРОТЕК КАЗАХСТАН» ЖШС</div>
            <div style="font-size:11px; color:#64748b; margin-top:4px;">
              БИН 210840029145 • Плательщик НДС 12%<br>
              010000, Республика Казахстан, г. Астана, Индустриальный парк №1, ул. А184, зд. 14<br>
              Тел.: +7 (7172) 97-20-40, +7 (700) 555-70-80 • E-mail: info@ferrotech.kz • Web: www.ferrotech.kz
            </div>
          </div>
          <div class="kp-meta-info">
            <div style="font-size:13px; font-weight:800; color:#0f172a;">Исх. № ${kpNumber}</div>
            <div>от ${currentDate} г.</div>
            <div style="margin-top:8px; font-weight:600; color:#0f172a;">
              Кому: Руководству предприятия /<br>Отделу снабжения и закупок
            </div>
          </div>
        </div>

        <!-- Document Title -->
        <div class="kp-title-block">
          <h2>КОММЕРЧЕСКОЕ ПРЕДЛОЖЕНИЕ</h2>
          <div style="font-size:13px; color:#475569;">на поставку сертифицированного металлопроката и сплавов по Республике Казахстан</div>
        </div>

        <!-- Table of Items -->
        <table class="kp-table">
          <thead>
            <tr>
              <th style="width:35px; text-align:center;">№</th>
              <th>Наименование продукции / Марка</th>
              <th>Типоразмер</th>
              <th style="text-align:center;">Стандарт</th>
              <th style="text-align:center;">Количество</th>
              <th style="text-align:right;">Цена (₸ с НДС)</th>
              <th style="text-align:right;">Сумма (₸ с НДС 12%)</th>
            </tr>
          </thead>
          <tbody>
            ${tableRows}
          </tbody>
        </table>

        <!-- Terms and Conditions -->
        <div class="kp-terms-block">
          <div style="font-weight:700; margin-bottom:6px; color:#0f172a; text-transform:uppercase; font-size:11px;">
            Условия поставки и финансовые обязательства:
          </div>
          <ol style="margin-left:16px; display:flex; flex-direction:column; gap:4px;">
            <li><strong>Условия оплаты:</strong> 100% безналичный расчет. Выписка Электронных счетов-фактур (ЭСФ) и Сопроводительных накладных (СНТ) через ИС ЭСФ КГД МФ РК в течение 24 часов.</li>
            <li><strong>Срок отгрузки:</strong> 1-2 рабочих дня с момента поступления оплаты. Отгрузка с центральных складов (г. Астана / г. Алматы / г. Караганда).</li>
            <li><strong>Сертификация:</strong> Продукция сопровождается паспортами завода-изготовителя, актами химсостава и сертификатами СТ-KZ.</li>
            <li><strong>Срок действия предложения:</strong> 5 (пять) банковских дней с даты выдачи.</li>
            <li><strong>Банковские реквизиты:</strong> ИИК KZ456012345678901234 в АО «Halyk Bank», БИК HSBKKZKX.</li>
          </ol>
        </div>

        <!-- Signature and Blue Corporate Seal -->
        <div class="kp-sign-seal-row">
          <div>
            <div style="font-weight:700; color:#0f172a;">Генеральный директор ТОО «Ferrotech Kazakhstan»</div>
            <div style="font-size:12px; color:#64748b; margin-top:20px;">Смагулов Е. Б. _________________</div>
          </div>

          <!-- Blue Facsimile Seal (SVG) -->
          <div class="kp-stamp-seal">
            <svg viewBox="0 0 160 160" width="130" height="130" style="opacity:0.88; transform:rotate(-4deg);">
              <circle cx="80" cy="80" r="76" fill="none" stroke="#0055b3" stroke-width="3" stroke-dasharray="6,2" />
              <circle cx="80" cy="80" r="70" fill="none" stroke="#0055b3" stroke-width="1.5" />
              <circle cx="80" cy="80" r="48" fill="none" stroke="#0055b3" stroke-width="1.5" />
              
              <!-- Circular Text -->
              <path id="sealTextOuter" d="M 80,80 m -60,0 a 60,60 0 1,1 120,0 a 60,60 0 1,1 -120,0" fill="none" />
              <text font-size="8" font-weight="700" fill="#0055b3" letter-spacing="1.2">
                <textPath href="#sealTextOuter" startOffset="0%">
                  ҚАЗАҚСТАН РЕСПУБЛИКАСЫ АСТАНА Қ. ТОО FERROTECH KAZAKHSTAN ЖШС *
                </textPath>
              </text>

              <path id="sealTextInner" d="M 80,80 m -38,0 a 38,38 0 1,1 76,0 a 38,38 0 1,1 -76,0" fill="none" />
              <text font-size="7" font-weight="700" fill="#0055b3">
                <textPath href="#sealTextInner" startOffset="0%">
                  БИН 210840029145 * ДЛЯ ДОКУМЕНТОВ ЖӘНЕ КП *
                </textPath>
              </text>

              <!-- Central Seal Logo & Signature Scribble -->
              <text x="80" y="76" text-anchor="middle" font-size="14" font-weight="900" fill="#0055b3">⬢</text>
              <text x="80" y="88" text-anchor="middle" font-size="7" font-weight="800" fill="#0055b3">FERROTECH</text>
              
              <!-- Ink Signature flourish -->
              <path d="M 55,95 Q 75,70 95,92 T 115,85 Q 125,80 105,95" fill="none" stroke="#003380" stroke-width="2" stroke-linecap="round" />
            </svg>
          </div>

          <div style="text-align:right;">
            <div style="font-weight:700; color:#0f172a;">Главный бухгалтер</div>
            <div style="font-size:12px; color:#64748b; margin-top:20px;">Касымова А. Т. _________________</div>
          </div>
        </div>
      </div>
    </div>
  `;

  modal.classList.remove("hidden");
  modal.onclick = (e) => {
    if (e.target === modal) modal.classList.add("hidden");
  };
}

