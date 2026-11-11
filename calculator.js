/**
 * 23MET.RU METAL CALCULATOR ENGINE FOR FERROTECH KAZAKHSTAN
 * High-precision bidirectional theoretical metal calculation system
 * Covering Black steel, Stainless, Non-ferrous, and Fasteners
 * Prices in Kazakhstan Tenge (₸) with 12% VAT
 */

// 1. Metal Category Definitions
const MET23_CATEGORIES = {
  ferrous: {
    name: "Черный металлопрокат",
    icon: "🖤",
    products: [
      { id: "armatura_a3", name: "Арматура рифленая А3 (А500С / 35ГС)", gost: "ГОСТ 5781-82 / ГОСТ 34028-2016", shape: "round_ribbed", unit: "м", defSize: "12", defPriceKg: 420, defLength: 11.7 },
      { id: "armatura_a1", name: "Арматура гладкая А1 (А240)", gost: "ГОСТ 5781-82", shape: "round_bar", unit: "м", defSize: "10", defPriceKg: 410, defLength: 6.0 },
      { id: "balka", name: "Балка двутавровая (Б, Ш, К)", gost: "СТО АСЧМ 20-93 / ГОСТ 26020-83", shape: "beam", unit: "м", defSize: "20Б1", defPriceKg: 480, defLength: 12.0 },
      { id: "shveller", name: "Швеллер горячекатаный (У, П)", gost: "ГОСТ 8240-97", shape: "channel", unit: "м", defSize: "14П", defPriceKg: 460, defLength: 11.7 },
      { id: "shveller_gnuty", name: "Швеллер гнутый равнополочный", gost: "ГОСТ 8278-83", shape: "channel", unit: "м", defSize: "100x50x4", defPriceKg: 470, defLength: 6.0 },
      { id: "ugolok_ravno", name: "Уголок равнополочный", gost: "ГОСТ 8509-93", shape: "angle", unit: "м", defSize: "50x50x4", defPriceKg: 450, defLength: 6.0 },
      { id: "ugolok_neravno", name: "Уголок неравнополочный", gost: "ГОСТ 8510-86", shape: "angle", unit: "м", defSize: "63x40x5", defPriceKg: 460, defLength: 6.0 },
      { id: "truba_vgp", name: "Труба круглая ВГП водогазопроводная", gost: "ГОСТ 3262-75", shape: "pipe_round", unit: "м", defSize: "25x3.0", defPriceKg: 470, defLength: 6.0 },
      { id: "truba_es", name: "Труба электросварная прямошовная", gost: "ГОСТ 10704-91", shape: "pipe_round", unit: "м", defSize: "89x4.0", defPriceKg: 465, defLength: 11.7 },
      { id: "truba_bsh", name: "Труба бесшовная горячедеформированная", gost: "ГОСТ 8732-78", shape: "pipe_round", unit: "м", defSize: "108x6.0", defPriceKg: 620, defLength: 11.7 },
      { id: "truba_kvadr", name: "Труба профильная квадратная", gost: "ГОСТ 8639-82", shape: "pipe_square", unit: "м", defSize: "40x40x3", defPriceKg: 440, defLength: 6.0 },
      { id: "truba_pryam", name: "Труба профильная прямоугольная", gost: "ГОСТ 8645-68", shape: "pipe_rect", unit: "м", defSize: "60x40x3", defPriceKg: 440, defLength: 6.0 },
      { id: "list_gk", name: "Лист горячекатаный", gost: "ГОСТ 19903-74", shape: "sheet", unit: "м²", defSize: "3.0", defPriceKg: 430, defLength: 1.5, defWidth: 6.0 },
      { id: "list_xk", name: "Лист холоднокатаный", gost: "ГОСТ 19904-90", shape: "sheet", unit: "м²", defSize: "1.5", defPriceKg: 470, defLength: 1.25, defWidth: 2.5 },
      { id: "list_rifl", name: "Лист рифленый (ромб / чечевица)", gost: "ГОСТ 8568-77", shape: "sheet", unit: "м²", defSize: "4.0", defPriceKg: 480, defLength: 1.5, defWidth: 6.0 },
      { id: "list_ocink", name: "Лист оцинкованный", gost: "ГОСТ 14918-80", shape: "sheet", unit: "м²", defSize: "0.7", defPriceKg: 520, defLength: 1.25, defWidth: 2.5 },
      { id: "krug", name: "Круг / Пруток стальной", gost: "ГОСТ 2590-2006", shape: "round_bar", unit: "м", defSize: "50", defPriceKg: 460, defLength: 6.0 },
      { id: "kvadrat", name: "Квадрат стальной", gost: "ГОСТ 2591-2006", shape: "square_bar", unit: "м", defSize: "20", defPriceKg: 470, defLength: 6.0 },
      { id: "shestigran", name: "Шестигранник стальной", gost: "ГОСТ 2879-2006", shape: "hex_bar", unit: "м", defSize: "24", defPriceKg: 490, defLength: 6.0 },
      { id: "polosa", name: "Полоса стальная горячекатаная", gost: "ГОСТ 103-2006", shape: "strip", unit: "м", defSize: "40x4", defPriceKg: 450, defLength: 6.0 },
      { id: "provoloka", name: "Проволока вязальная / Катанка", gost: "ГОСТ 3282-74", shape: "wire", unit: "м", defSize: "2.0", defPriceKg: 480, defLength: 100.0 }
    ]
  },
  stainless: {
    name: "Нержавеющий металлопрокат",
    icon: "🛡️",
    products: [
      { id: "nerzh_list", name: "Лист нержавеющий (AISI 304 / 12Х18Н10Т)", gost: "ГОСТ 5582-75 / EN 10088", shape: "sheet", unit: "м²", defSize: "1.5", defPriceKg: 2450, defLength: 1.25, defWidth: 2.5 },
      { id: "nerzh_truba_krug", name: "Труба нержавеющая круглая (AISI 304 / 12Х18Н10Т)", gost: "ГОСТ 9941-81 / DIN 11850", shape: "pipe_round", unit: "м", defSize: "25x2.0", defPriceKg: 3800, defLength: 6.0 },
      { id: "nerzh_truba_prof", name: "Труба нержавеющая профильная (AISI 304)", gost: "DIN 2395 / EN 10219", shape: "pipe_square", unit: "м", defSize: "40x40x2", defPriceKg: 3200, defLength: 6.0 },
      { id: "nerzh_krug", name: "Круг нержавеющий (12Х18Н10Т / AISI 304 / AISI 316L)", gost: "ГОСТ 5949-75 / ASTM A276", shape: "round_bar", unit: "м", defSize: "40", defPriceKg: 2950, defLength: 3.0 },
      { id: "nerzh_ugolok", name: "Уголок нержавеющий", gost: "ГОСТ 8509-93 / DIN 1028", shape: "angle", unit: "м", defSize: "40x40x4", defPriceKg: 3400, defLength: 6.0 },
      { id: "nerzh_polosa", name: "Полоса нержавеющая (AISI 304)", gost: "ГОСТ 103-2006 / DIN 1017", shape: "strip", unit: "м", defSize: "40x4", defPriceKg: 3100, defLength: 4.0 },
      { id: "nerzh_shestigran", name: "Шестигранник нержавеющий (12Х18Н10Т)", gost: "ГОСТ 2879-2006 / ASTM A276", shape: "hex_bar", unit: "м", defSize: "19", defPriceKg: 3600, defLength: 3.0 }
    ]
  },
  nonferrous: {
    name: "Цветной металлопрокат",
    icon: "🔶",
    products: [
      { id: "alum_list", name: "Алюминиевый лист (АД31, АМг2, Д16Т)", gost: "ГОСТ 21631-76", shape: "sheet", unit: "м²", defSize: "2.0", defPriceKg: 2200, defLength: 1.2, defWidth: 3.0 },
      { id: "alum_truba", name: "Алюминиевая круглая труба (АД31Т1)", gost: "ГОСТ 18482-79", shape: "pipe_round", unit: "м", defSize: "50x3.0", defPriceKg: 2600, defLength: 6.0 },
      { id: "alum_prutok", name: "Алюминиевый круг / пруток (Д16Т / В95)", gost: "ГОСТ 21488-97", shape: "round_bar", unit: "м", defSize: "30", defPriceKg: 2450, defLength: 3.0 },
      { id: "alum_ugolok", name: "Алюминиевый уголок равнополочный", gost: "ГОСТ 13737-90", shape: "angle", unit: "м", defSize: "40x40x3", defPriceKg: 2500, defLength: 6.0 },
      { id: "med_prutok", name: "Медный круг / пруток (М1 / М2)", gost: "ГОСТ 1535-2016", shape: "round_bar", unit: "м", defSize: "20", defPriceKg: 7600, defLength: 3.0 },
      { id: "med_shina", name: "Медная электротехническая шина (М1т)", gost: "ГОСТ 434-78", shape: "strip", unit: "м", defSize: "40x4", defPriceKg: 8100, defLength: 4.0 },
      { id: "med_truba", name: "Медная труба (М1 / М2)", gost: "ГОСТ 617-2006", shape: "pipe_round", unit: "м", defSize: "22x1.5", defPriceKg: 8900, defLength: 5.0 },
      { id: "latun_prutok", name: "Латунный пруток (ЛС59-1 / Л63)", gost: "ГОСТ 2060-2006", shape: "round_bar", unit: "м", defSize: "25", defPriceKg: 5400, defLength: 3.0 },
      { id: "latun_shestigran", name: "Латунный шестигранник (ЛС59-1)", gost: "ГОСТ 2060-2006", shape: "hex_bar", unit: "м", defSize: "19", defPriceKg: 5600, defLength: 3.0 },
      { id: "bronza_krug", name: "Бронзовый круг (БрАЖ9-4 / БрОЦС5-5-5)", gost: "ГОСТ 1628-78", shape: "round_bar", unit: "м", defSize: "50", defPriceKg: 6800, defLength: 2.0 },
      { id: "titan_prutok", name: "Титановый круг / пруток (ВТ1-0 / ВТ6)", gost: "ГОСТ 26492-85", shape: "round_bar", unit: "м", defSize: "30", defPriceKg: 16500, defLength: 2.0 },
      { id: "titan_truba", name: "Титановая бесшовная труба (ПТ-7М / ВТ1-0)", gost: "ГОСТ 22897-86", shape: "pipe_round", unit: "м", defSize: "38x2.0", defPriceKg: 21000, defLength: 4.0 },
      { id: "svinec_list", name: "Свинцовый лист (С1 защитный)", gost: "ГОСТ 9559-89", shape: "sheet", unit: "м²", defSize: "2.0", defPriceKg: 3400, defLength: 0.5, defWidth: 1.0 }
    ]
  },
  hardware: {
    name: "Метизы и крепеж",
    icon: "🔩",
    products: [
      { id: "metiz_bolt", name: "Болты с шестигранной головкой", gost: "ГОСТ 7798-70 / DIN 933", shape: "hardware", unit: "шт", defSize: "M12x50", defPriceKg: 950, defLength: 1 },
      { id: "metiz_gaika", name: "Гайки шестигранные", gost: "ГОСТ 5915-70 / DIN 934", shape: "hardware", unit: "шт", defSize: "M12", defPriceKg: 1100, defLength: 1 },
      { id: "metiz_shaiba", name: "Шайбы плоские увеличенные", gost: "ГОСТ 11371-78 / DIN 125", shape: "hardware", unit: "шт", defSize: "M12", defPriceKg: 1050, defLength: 1 },
      { id: "metiz_shpilka", name: "Шпилька резьбовая метровая (DIN 975)", gost: "DIN 975 (класс 8.8)", shape: "hardware", unit: "шт", defSize: "M16x1000", defPriceKg: 1400, defLength: 1 }
    ]
  }
};

// 2. Standard ГОСТ Dimensions & Theoretical Weight Table (kg per unit: meter, m², or 1000 pcs)
const GOST_DATA = {
  armatura_a3: [
    { size: "6", weight: 0.222, d: 6 },
    { size: "8", weight: 0.395, d: 8 },
    { size: "10", weight: 0.617, d: 10 },
    { size: "12", weight: 0.888, d: 12 },
    { size: "14", weight: 1.210, d: 14 },
    { size: "16", weight: 1.580, d: 16 },
    { size: "18", weight: 2.000, d: 18 },
    { size: "20", weight: 2.470, d: 20 },
    { size: "22", weight: 2.980, d: 22 },
    { size: "25", weight: 3.850, d: 25 },
    { size: "28", weight: 4.830, d: 28 },
    { size: "32", weight: 6.310, d: 32 },
    { size: "36", weight: 7.990, d: 36 },
    { size: "40", weight: 9.870, d: 40 }
  ],
  armatura_a1: [
    { size: "6", weight: 0.222, d: 6 },
    { size: "8", weight: 0.395, d: 8 },
    { size: "10", weight: 0.617, d: 10 },
    { size: "12", weight: 0.888, d: 12 },
    { size: "14", weight: 1.210, d: 14 },
    { size: "16", weight: 1.580, d: 16 },
    { size: "18", weight: 2.000, d: 18 },
    { size: "20", weight: 2.470, d: 20 },
    { size: "25", weight: 3.850, d: 25 },
    { size: "32", weight: 6.310, d: 32 }
  ],
  balka: [
    { size: "10Б1", weight: 8.1, h: 100, b: 55, s: 4.1, t: 5.7 },
    { size: "12Б1", weight: 10.4, h: 118, b: 64, s: 4.4, t: 6.3 },
    { size: "14Б1", weight: 12.9, h: 138, b: 73, s: 4.7, t: 6.9 },
    { size: "16Б1", weight: 15.7, h: 157, b: 82, s: 5.0, t: 7.4 },
    { size: "18Б1", weight: 18.8, h: 177, b: 91, s: 5.3, t: 8.0 },
    { size: "20Б1", weight: 22.4, h: 198, b: 100, s: 5.5, t: 8.5 },
    { size: "25Б1", weight: 25.7, h: 247, b: 124, s: 5.8, t: 8.0 },
    { size: "30Б1", weight: 32.9, h: 298, b: 149, s: 6.2, t: 8.8 },
    { size: "35Б1", weight: 41.4, h: 346, b: 174, s: 6.9, t: 9.8 },
    { size: "40Б1", weight: 56.6, h: 396, b: 199, s: 8.0, t: 11.2 },
    { size: "20Ш1", weight: 30.6, h: 194, b: 150, s: 6.0, t: 9.0 },
    { size: "25Ш1", weight: 44.1, h: 244, b: 175, s: 7.0, t: 11.0 },
    { size: "30Ш1", weight: 56.8, h: 294, b: 200, s: 8.0, t: 12.0 },
    { size: "20К1", weight: 41.4, h: 196, b: 199, s: 7.5, t: 10.0 },
    { size: "25К1", weight: 62.6, h: 246, b: 249, s: 8.5, t: 12.0 }
  ],
  shveller: [
    { size: "5П / 5У", weight: 4.84, h: 50, b: 32, s: 4.4, t: 7.0 },
    { size: "6.5П / 6.5У", weight: 5.90, h: 65, b: 36, s: 4.4, t: 7.2 },
    { size: "8П / 8У", weight: 7.05, h: 80, b: 40, s: 4.5, t: 7.4 },
    { size: "10П / 10У", weight: 8.59, h: 100, b: 46, s: 4.5, t: 7.6 },
    { size: "12П / 12У", weight: 10.40, h: 120, b: 52, s: 4.8, t: 7.8 },
    { size: "14П / 14У", weight: 12.30, h: 140, b: 58, s: 4.9, t: 8.1 },
    { size: "16П / 16У", weight: 14.20, h: 160, b: 64, s: 5.0, t: 8.4 },
    { size: "18П / 18У", weight: 16.30, h: 180, b: 70, s: 5.1, t: 8.7 },
    { size: "20П / 20У", weight: 18.40, h: 200, b: 76, s: 5.2, t: 9.0 },
    { size: "22П / 22У", weight: 21.00, h: 220, b: 82, s: 5.4, t: 9.5 },
    { size: "24П / 24У", weight: 24.00, h: 240, b: 90, s: 5.6, t: 10.0 },
    { size: "27П / 27У", weight: 27.70, h: 270, b: 95, s: 6.0, t: 10.5 },
    { size: "30П / 30У", weight: 31.80, h: 300, b: 100, s: 6.5, t: 11.0 }
  ],
  shveller_gnuty: [
    { size: "80x40x3", weight: 3.51 },
    { size: "100x50x3", weight: 4.45 },
    { size: "100x50x4", weight: 5.81 },
    { size: "120x60x4", weight: 7.07 },
    { size: "140x60x4", weight: 7.70 },
    { size: "160x80x4", weight: 9.58 },
    { size: "160x80x5", weight: 11.83 },
    { size: "200x80x5", weight: 13.40 }
  ],
  ugolok_ravno: [
    { size: "25x25x3", weight: 1.12, a: 25, s: 3 },
    { size: "25x25x4", weight: 1.46, a: 25, s: 4 },
    { size: "32x32x3", weight: 1.46, a: 32, s: 3 },
    { size: "32x32x4", weight: 1.91, a: 32, s: 4 },
    { size: "40x40x3", weight: 1.85, a: 40, s: 3 },
    { size: "40x40x4", weight: 2.42, a: 40, s: 4 },
    { size: "50x50x4", weight: 3.05, a: 50, s: 4 },
    { size: "50x50x5", weight: 3.77, a: 50, s: 5 },
    { size: "63x63x5", weight: 4.81, a: 63, s: 5 },
    { size: "75x75x5", weight: 5.80, a: 75, s: 5 },
    { size: "75x75x6", weight: 6.89, a: 75, s: 6 },
    { size: "90x90x7", weight: 9.64, a: 90, s: 7 },
    { size: "100x100x8", weight: 12.25, a: 100, s: 8 },
    { size: "125x125x10", weight: 19.10, a: 125, s: 10 },
    { size: "160x160x12", weight: 29.35, a: 160, s: 12 }
  ],
  ugolok_neravno: [
    { size: "63x40x5", weight: 3.91 },
    { size: "75x50x5", weight: 4.79 },
    { size: "100x63x6", weight: 7.53 },
    { size: "125x80x8", weight: 12.55 },
    { size: "140x90x8", weight: 14.13 },
    { size: "160x100x10", weight: 19.85 }
  ],
  truba_vgp: [
    { size: "15x2.5 (Ду 15)", weight: 1.16, d: 21.3, s: 2.5 },
    { size: "20x2.5 (Ду 20)", weight: 1.50, d: 26.8, s: 2.5 },
    { size: "25x3.0 (Ду 25)", weight: 2.39, d: 33.5, s: 3.0 },
    { size: "32x3.0 (Ду 32)", weight: 3.09, d: 42.3, s: 3.0 },
    { size: "40x3.5 (Ду 40)", weight: 3.84, d: 48.0, s: 3.5 },
    { size: "50x3.5 (Ду 50)", weight: 4.88, d: 60.0, s: 3.5 }
  ],
  truba_es: [
    { size: "57x3.5", weight: 4.62, d: 57, s: 3.5 },
    { size: "76x3.5", weight: 6.26, d: 76, s: 3.5 },
    { size: "89x3.5", weight: 7.38, d: 89, s: 3.5 },
    { size: "89x4.0", weight: 8.38, d: 89, s: 4.0 },
    { size: "108x4.0", weight: 10.26, d: 108, s: 4.0 },
    { size: "133x4.5", weight: 14.26, d: 133, s: 4.5 },
    { size: "159x5.0", weight: 18.99, d: 159, s: 5.0 },
    { size: "219x6.0", weight: 31.52, d: 219, s: 6.0 },
    { size: "273x7.0", weight: 45.92, d: 273, s: 7.0 },
    { size: "325x8.0", weight: 62.54, d: 325, s: 8.0 },
    { size: "426x8.0", weight: 82.47, d: 426, s: 8.0 },
    { size: "530x8.0", weight: 102.99, d: 530, s: 8.0 }
  ],
  truba_bsh: [
    { size: "32x3.0", weight: 2.15 },
    { size: "38x3.5", weight: 2.98 },
    { size: "57x4.0", weight: 5.23 },
    { size: "76x5.0", weight: 8.75 },
    { size: "89x6.0", weight: 12.28 },
    { size: "108x6.0", weight: 15.10 },
    { size: "133x8.0", weight: 24.66 },
    { size: "159x9.0", weight: 33.29 },
    { size: "219x10.0", weight: 51.54 },
    { size: "273x12.0", weight: 77.24 }
  ],
  truba_kvadr: [
    { size: "15x15x1.5", weight: 0.60 },
    { size: "20x20x2.0", weight: 1.12 },
    { size: "25x25x2.0", weight: 1.44 },
    { size: "30x30x2.0", weight: 1.75 },
    { size: "40x40x2.0", weight: 2.38 },
    { size: "40x40x3.0", weight: 3.44 },
    { size: "50x50x3.0", weight: 4.38 },
    { size: "60x60x3.0", weight: 5.32 },
    { size: "60x60x4.0", weight: 6.94 },
    { size: "80x80x4.0", weight: 9.33 },
    { size: "100x100x4.0", weight: 11.84 },
    { size: "100x100x5.0", weight: 14.54 },
    { size: "120x120x5.0", weight: 17.52 },
    { size: "140x140x6.0", weight: 24.50 },
    { size: "160x160x6.0", weight: 28.27 },
    { size: "200x200x8.0", weight: 46.50 }
  ],
  truba_pryam: [
    { size: "30x20x2.0", weight: 1.44 },
    { size: "40x20x2.0", weight: 1.75 },
    { size: "50x25x2.5", weight: 2.67 },
    { size: "60x30x3.0", weight: 3.91 },
    { size: "60x40x3.0", weight: 4.38 },
    { size: "80x40x3.0", weight: 5.32 },
    { size: "80x60x4.0", weight: 8.07 },
    { size: "100x50x4.0", weight: 8.70 },
    { size: "100x60x4.0", weight: 9.33 },
    { size: "120x60x5.0", weight: 12.97 },
    { size: "120x80x5.0", weight: 14.54 },
    { size: "140x60x5.0", weight: 14.54 },
    { size: "160x80x6.0", weight: 20.73 },
    { size: "180x100x6.0", weight: 24.50 },
    { size: "200x100x8.0", weight: 34.00 }
  ],
  list_gk: [
    { size: "1.5", weight: 11.78 },
    { size: "2.0", weight: 15.70 },
    { size: "2.5", weight: 19.63 },
    { size: "3.0", weight: 23.55 },
    { size: "4.0", weight: 31.40 },
    { size: "5.0", weight: 39.25 },
    { size: "6.0", weight: 47.10 },
    { size: "8.0", weight: 62.80 },
    { size: "10.0", weight: 78.50 },
    { size: "12.0", weight: 94.20 },
    { size: "14.0", weight: 109.90 },
    { size: "16.0", weight: 125.60 },
    { size: "20.0", weight: 157.00 },
    { size: "25.0", weight: 196.25 },
    { size: "30.0", weight: 235.50 },
    { size: "40.0", weight: 314.00 },
    { size: "50.0", weight: 392.50 }
  ],
  list_xk: [
    { size: "0.5", weight: 3.93 },
    { size: "0.7", weight: 5.50 },
    { size: "0.8", weight: 6.28 },
    { size: "1.0", weight: 7.85 },
    { size: "1.2", weight: 9.42 },
    { size: "1.5", weight: 11.78 },
    { size: "2.0", weight: 15.70 },
    { size: "2.5", weight: 19.63 },
    { size: "3.0", weight: 23.55 }
  ],
  list_rifl: [
    { size: "3.0", weight: 25.10 },
    { size: "4.0", weight: 33.20 },
    { size: "5.0", weight: 41.50 },
    { size: "6.0", weight: 49.80 },
    { size: "8.0", weight: 66.40 }
  ],
  list_ocink: [
    { size: "0.45", weight: 3.65 },
    { size: "0.50", weight: 4.05 },
    { size: "0.55", weight: 4.45 },
    { size: "0.70", weight: 5.65 },
    { size: "0.80", weight: 6.45 },
    { size: "1.00", weight: 8.05 },
    { size: "1.20", weight: 9.65 },
    { size: "1.50", weight: 12.05 }
  ],
  krug: [
    { size: "6", weight: 0.222 },
    { size: "8", weight: 0.395 },
    { size: "10", weight: 0.617 },
    { size: "12", weight: 0.888 },
    { size: "14", weight: 1.210 },
    { size: "16", weight: 1.580 },
    { size: "18", weight: 2.000 },
    { size: "20", weight: 2.470 },
    { size: "25", weight: 3.850 },
    { size: "30", weight: 5.550 },
    { size: "40", weight: 9.870 },
    { size: "50", weight: 15.41 },
    { size: "60", weight: 22.20 },
    { size: "70", weight: 30.21 },
    { size: "80", weight: 39.46 },
    { size: "100", weight: 61.65 },
    { size: "120", weight: 88.78 },
    { size: "150", weight: 138.72 },
    { size: "200", weight: 246.60 }
  ],
  kvadrat: [
    { size: "10", weight: 0.785 },
    { size: "12", weight: 1.130 },
    { size: "14", weight: 1.540 },
    { size: "16", weight: 2.010 },
    { size: "20", weight: 3.140 },
    { size: "25", weight: 4.910 },
    { size: "30", weight: 7.070 },
    { size: "40", weight: 12.56 },
    { size: "50", weight: 19.63 },
    { size: "60", weight: 28.26 }
  ],
  shestigran: [
    { size: "12", weight: 0.979 },
    { size: "14", weight: 1.332 },
    { size: "17", weight: 1.964 },
    { size: "19", weight: 2.454 },
    { size: "22", weight: 3.295 },
    { size: "24", weight: 3.921 },
    { size: "27", weight: 4.962 },
    { size: "30", weight: 6.126 },
    { size: "32", weight: 6.970 },
    { size: "36", weight: 8.822 },
    { size: "41", weight: 11.45 },
    { size: "46", weight: 14.43 },
    { size: "50", weight: 17.02 }
  ],
  polosa: [
    { size: "20x4", weight: 0.63 },
    { size: "25x4", weight: 0.79 },
    { size: "30x4", weight: 0.94 },
    { size: "40x4", weight: 1.26 },
    { size: "40x5", weight: 1.57 },
    { size: "50x5", weight: 1.96 },
    { size: "60x6", weight: 2.83 },
    { size: "80x6", weight: 3.77 },
    { size: "80x8", weight: 5.02 },
    { size: "100x8", weight: 6.28 },
    { size: "100x10", weight: 7.85 },
    { size: "120x10", weight: 9.42 }
  ],
  provoloka: [
    { size: "0.8", weight: 0.0039 },
    { size: "1.0", weight: 0.0062 },
    { size: "1.2", weight: 0.0089 },
    { size: "1.6", weight: 0.0158 },
    { size: "2.0", weight: 0.0247 },
    { size: "2.5", weight: 0.0385 },
    { size: "3.0", weight: 0.0555 },
    { size: "4.0", weight: 0.0987 },
    { size: "5.0", weight: 0.1541 },
    { size: "6.0", weight: 0.2220 },
    { size: "6.5", weight: 0.2600 }
  ],
  // Stainless specific maps
  nerzh_list: [
    { size: "0.5", weight: 3.95 },
    { size: "0.8", weight: 6.32 },
    { size: "1.0", weight: 7.90 },
    { size: "1.5", weight: 11.85 },
    { size: "2.0", weight: 15.80 },
    { size: "3.0", weight: 23.70 },
    { size: "4.0", weight: 31.60 },
    { size: "5.0", weight: 39.50 },
    { size: "6.0", weight: 47.40 },
    { size: "8.0", weight: 63.20 },
    { size: "10.0", weight: 79.00 }
  ],
  nerzh_truba_krug: [
    { size: "12x1.5", weight: 0.39 },
    { size: "16x1.5", weight: 0.54 },
    { size: "20x1.5", weight: 0.69 },
    { size: "25x1.5", weight: 0.88 },
    { size: "25x2.0", weight: 1.15 },
    { size: "32x2.0", weight: 1.50 },
    { size: "38x2.0", weight: 1.80 },
    { size: "50.8x1.5", weight: 1.85 },
    { size: "57x3.0", weight: 4.05 },
    { size: "76x3.0", weight: 5.48 },
    { size: "89x3.0", weight: 6.46 },
    { size: "108x4.0", weight: 10.42 }
  ],
  nerzh_truba_prof: [
    { size: "20x20x1.5", weight: 0.88 },
    { size: "25x25x1.5", weight: 1.12 },
    { size: "30x30x1.5", weight: 1.36 },
    { size: "40x20x1.5", weight: 1.36 },
    { size: "40x40x1.5", weight: 1.84 },
    { size: "40x40x2.0", weight: 2.42 },
    { size: "50x50x2.0", weight: 3.06 },
    { size: "60x40x2.0", weight: 3.06 },
    { size: "80x40x2.0", weight: 3.70 }
  ],
  nerzh_krug: [
    { size: "10", weight: 0.62 },
    { size: "12", weight: 0.89 },
    { size: "16", weight: 1.59 },
    { size: "20", weight: 2.48 },
    { size: "25", weight: 3.87 },
    { size: "30", weight: 5.58 },
    { size: "40", weight: 9.93 },
    { size: "50", weight: 15.51 },
    { size: "60", weight: 22.34 },
    { size: "80", weight: 39.71 },
    { size: "100", weight: 62.05 }
  ],
  nerzh_ugolok: [
    { size: "20x20x3", weight: 0.89 },
    { size: "30x30x3", weight: 1.36 },
    { size: "40x40x4", weight: 2.44 },
    { size: "50x50x5", weight: 3.80 }
  ],
  nerzh_polosa: [
    { size: "20x3", weight: 0.47 },
    { size: "30x4", weight: 0.95 },
    { size: "40x4", weight: 1.27 },
    { size: "50x5", weight: 1.98 }
  ],
  nerzh_shestigran: [
    { size: "14", weight: 1.34 },
    { size: "17", weight: 1.98 },
    { size: "19", weight: 2.47 },
    { size: "24", weight: 3.94 },
    { size: "27", weight: 4.99 },
    { size: "30", weight: 6.16 }
  ],
  // Non-ferrous sizes
  alum_list: [
    { size: "1.0", weight: 2.70 },
    { size: "1.5", weight: 4.05 },
    { size: "2.0", weight: 5.40 },
    { size: "3.0", weight: 8.10 },
    { size: "4.0", weight: 10.80 },
    { size: "5.0", weight: 13.50 },
    { size: "8.0", weight: 21.60 },
    { size: "10.0", weight: 27.00 }
  ],
  alum_truba: [
    { size: "20x2.0", weight: 0.31 },
    { size: "25x2.0", weight: 0.39 },
    { size: "30x2.0", weight: 0.48 },
    { size: "40x2.0", weight: 0.65 },
    { size: "50x3.0", weight: 1.20 },
    { size: "60x3.0", weight: 1.45 },
    { size: "80x4.0", weight: 2.58 }
  ],
  alum_prutok: [
    { size: "10", weight: 0.21 },
    { size: "16", weight: 0.54 },
    { size: "20", weight: 0.85 },
    { size: "30", weight: 1.91 },
    { size: "40", weight: 3.39 },
    { size: "50", weight: 5.30 },
    { size: "80", weight: 13.57 },
    { size: "100", weight: 21.21 }
  ],
  alum_ugolok: [
    { size: "20x20x2", weight: 0.21 },
    { size: "30x30x2", weight: 0.31 },
    { size: "40x40x3", weight: 0.63 },
    { size: "50x50x4", weight: 1.04 }
  ],
  med_prutok: [
    { size: "10", weight: 0.70 },
    { size: "16", weight: 1.80 },
    { size: "20", weight: 2.81 },
    { size: "30", weight: 6.33 },
    { size: "40", weight: 11.26 },
    { size: "50", weight: 17.59 },
    { size: "60", weight: 25.33 }
  ],
  med_shina: [
    { size: "20x3", weight: 0.54 },
    { size: "30x4", weight: 1.08 },
    { size: "40x4", weight: 1.43 },
    { size: "50x5", weight: 2.24 },
    { size: "60x6", weight: 3.23 },
    { size: "80x8", weight: 5.73 },
    { size: "100x10", weight: 8.96 }
  ],
  med_truba: [
    { size: "15x1.0", weight: 0.39 },
    { size: "18x1.0", weight: 0.48 },
    { size: "22x1.5", weight: 0.86 },
    { size: "28x1.5", weight: 1.11 },
    { size: "35x1.5", weight: 1.41 }
  ],
  latun_prutok: [
    { size: "10", weight: 0.67 },
    { size: "16", weight: 1.71 },
    { size: "20", weight: 2.67 },
    { size: "25", weight: 4.17 },
    { size: "30", weight: 6.01 },
    { size: "40", weight: 10.68 },
    { size: "50", weight: 16.69 }
  ],
  latun_shestigran: [
    { size: "14", weight: 1.44 },
    { size: "17", weight: 2.12 },
    { size: "19", weight: 2.65 },
    { size: "24", weight: 4.23 },
    { size: "27", weight: 5.36 }
  ],
  bronza_krug: [
    { size: "20", weight: 2.76 },
    { size: "30", weight: 6.22 },
    { size: "40", weight: 11.06 },
    { size: "50", weight: 17.28 },
    { size: "60", weight: 24.88 },
    { size: "80", weight: 44.23 },
    { size: "100", weight: 69.12 }
  ],
  titan_prutok: [
    { size: "10", weight: 0.35 },
    { size: "16", weight: 0.91 },
    { size: "20", weight: 1.42 },
    { size: "30", weight: 3.19 },
    { size: "40", weight: 5.67 },
    { size: "50", weight: 8.86 },
    { size: "70", weight: 17.36 },
    { size: "100", weight: 35.42 }
  ],
  titan_truba: [
    { size: "25x2.0", weight: 0.58 },
    { size: "38x2.0", weight: 0.91 },
    { size: "57x3.0", weight: 2.05 }
  ],
  svinec_list: [
    { size: "1.0", weight: 11.37 },
    { size: "1.5", weight: 17.06 },
    { size: "2.0", weight: 22.74 },
    { size: "3.0", weight: 34.11 },
    { size: "4.0", weight: 45.48 },
    { size: "5.0", weight: 56.85 }
  ],
  // Hardware weights (kg per 1000 pcs)
  metiz_bolt: [
    { size: "M8x30", weight: 18.2 },
    { size: "M10x40", weight: 36.5 },
    { size: "M12x50", weight: 63.8 },
    { size: "M16x60", weight: 135.0 },
    { size: "M20x70", weight: 254.0 },
    { size: "M24x80", weight: 420.0 }
  ],
  metiz_gaika: [
    { size: "M8", weight: 5.2 },
    { size: "M10", weight: 11.6 },
    { size: "M12", weight: 17.3 },
    { size: "M16", weight: 37.6 },
    { size: "M20", weight: 71.4 },
    { size: "M24", weight: 122.9 }
  ],
  metiz_shaiba: [
    { size: "M8", weight: 2.1 },
    { size: "M10", weight: 4.1 },
    { size: "M12", weight: 6.3 },
    { size: "M16", weight: 11.3 },
    { size: "M20", weight: 17.2 },
    { size: "M24", weight: 32.3 }
  ],
  metiz_shpilka: [
    { size: "M8x1000", weight: 310 },
    { size: "M10x1000", weight: 490 },
    { size: "M12x1000", weight: 710 },
    { size: "M16x1000", weight: 1310 },
    { size: "M20x1000", weight: 2050 }
  ]
};

// 3. Density Multiplier Table relative to Carbon Steel 7.85
const MET23_METALS = [
  { id: "steel", name: "Сталь углеродистая Ст3 / Ст20", density: 7.85, factor: 1.0 },
  { id: "steel_ocink", name: "Сталь оцинкованная (+3% цинк)", density: 8.08, factor: 1.03 },
  { id: "nerzh_304", name: "Нержавейка AISI 304 (08Х18Н10)", density: 7.93, factor: 1.01 },
  { id: "nerzh_321", name: "Нержавейка 12Х18Н10Т / AISI 321", density: 7.90, factor: 1.006 },
  { id: "nerzh_316", name: "Нержавейка AISI 316L (03Х17Н14М3)", density: 8.00, factor: 1.019 },
  { id: "alum_ad31", name: "Алюминий АД31 / АМг5", density: 2.70, factor: 0.344 },
  { id: "alum_d16", name: "Алюминиевый сплав Д16Т", density: 2.80, factor: 0.357 },
  { id: "copper", name: "Медь электротехническая М1 / М2", density: 8.96, factor: 1.141 },
  { id: "brass", name: "Латунь Л63 / ЛС59-1", density: 8.50, factor: 1.083 },
  { id: "bronze", name: "Бронза оловянная БрАЖ9-4", density: 8.80, factor: 1.121 },
  { id: "titanium", name: "Титан ВТ1-0 / ВТ6", density: 4.51, factor: 0.575 },
  { id: "nickel", name: "Никель НП2", density: 8.90, factor: 1.134 },
  { id: "lead", name: "Свинец С1", density: 11.37, factor: 1.448 },
  { id: "nichrome", name: "Нихром Х20Н80", density: 8.40, factor: 1.070 },
  { id: "tungsten", name: "Вольфрам ВА / ВЧ", density: 19.30, factor: 2.459 }
];

// 4. Calculator State
let activeCategory = "ferrous";
let activeProduct = "armatura_a3";
let activeSize = "12";
let activeMetalFactor = 1.0;
let activeDensity = 7.85;
let baseWeightPerUnit = 0.888; // kg per meter or m²
let currentLengthOne = 11.7; // length of 1 piece
let currentPriceKg = 420; // ₸ with 12% VAT
let isCustomSize = false;
let lastEditedField = "meters";

// 5. Initialize DOM & Listeners
document.addEventListener("DOMContentLoaded", () => {
  initMet23Tabs();
  initMet23Selects();
  initMet23Inputs();
  populateMetalSelect();
  loadProduct(activeCategory, activeProduct, activeSize);
});

function initMet23Tabs() {
  const tabs = document.querySelectorAll(".met23-type-tab");
  tabs.forEach(tab => {
    tab.addEventListener("click", () => {
      tabs.forEach(t => t.classList.remove("active"));
      tab.classList.add("active");
      activeCategory = tab.dataset.category;
      
      const firstProd = MET23_CATEGORIES[activeCategory].products[0];
      activeProduct = firstProd.id;
      activeSize = firstProd.defSize;
      
      populateProductSelect();
      loadProduct(activeCategory, activeProduct, activeSize);
    });
  });
}

function initMet23Selects() {
  const prodSelect = document.getElementById("select-naimenovanie");
  const sizeSelect = document.getElementById("select-size");
  const metalSelect = document.getElementById("select-cvet");

  if (prodSelect) {
    prodSelect.addEventListener("change", (e) => {
      activeProduct = e.target.value;
      const catProds = MET23_CATEGORIES[activeCategory].products;
      const prodObj = catProds.find(p => p.id === activeProduct) || catProds[0];
      activeSize = prodObj.defSize;
      loadProduct(activeCategory, activeProduct, activeSize);
    });
  }

  if (sizeSelect) {
    sizeSelect.addEventListener("change", (e) => {
      if (e.target.value === "users_size") {
        isCustomSize = true;
        document.getElementById("met23CustomSizeRow").classList.remove("hidden");
        recalculateCustomSize();
      } else {
        isCustomSize = false;
        document.getElementById("met23CustomSizeRow").classList.add("hidden");
        activeSize = e.target.value;
        applySelectedSize(activeSize);
      }
    });
  }

  if (metalSelect) {
    metalSelect.addEventListener("change", (e) => {
      const found = MET23_METALS.find(m => m.id === e.target.value);
      if (found) {
        activeDensity = found.density;
        activeMetalFactor = found.factor;
        recalculateFromCurrentValues();
      }
    });
  }

  // Quick Length Chips
  document.querySelectorAll(".met23-chip").forEach(chip => {
    chip.addEventListener("click", () => {
      const len = parseFloat(chip.dataset.len);
      if (len > 0) {
        document.getElementById("calc_one").value = len;
        currentLengthOne = len;
        recalculateFromField("one");
      }
    });
  });
}

function populateMetalSelect() {
  const metalSelect = document.getElementById("select-cvet");
  if (!metalSelect) return;
  metalSelect.innerHTML = MET23_METALS.map(m => `
    <option value="${m.id}" ${m.id === 'steel' ? 'selected' : ''}>${m.name} (${m.density} г/см³)</option>
  `).join("");
}

function populateProductSelect() {
  const prodSelect = document.getElementById("select-naimenovanie");
  if (!prodSelect) return;
  const prods = MET23_CATEGORIES[activeCategory].products;
  prodSelect.innerHTML = prods.map(p => `
    <option value="${p.id}" ${p.id === activeProduct ? 'selected' : ''}>${p.name}</option>
  `).join("");
}

function populateSizeSelect(sizesArray, defaultSize) {
  const sizeSelect = document.getElementById("select-size");
  if (!sizeSelect) return;

  let html = `<option value="users_size">⚙️ Произвольный размер (по формуле)...</option>`;
  html += `<option disabled>────────────</option>`;
  html += sizesArray.map(item => `
    <option value="${item.size}" ${item.size === defaultSize ? 'selected' : ''}>
      ${item.size} (${item.weight} кг/${getProductUnit()})
    </option>
  `).join("");

  sizeSelect.innerHTML = html;
}

function getProductUnit() {
  const prods = MET23_CATEGORIES[activeCategory].products;
  const prod = prods.find(p => p.id === activeProduct);
  return prod ? prod.unit : "м";
}

function loadProduct(category, productId, sizeValue) {
  const catProds = MET23_CATEGORIES[category].products;
  const prod = catProds.find(p => p.id === productId) || catProds[0];
  
  populateProductSelect();
  document.getElementById("select-naimenovanie").value = prod.id;

  // Set Default Length
  currentLengthOne = prod.defLength || 6.0;
  document.getElementById("calc_one").value = currentLengthOne;

  // Set Default Price
  currentPriceKg = prod.defPriceKg || 420;
  document.getElementById("calc_price_kg").value = currentPriceKg;
  document.getElementById("calc_price_ton").value = Math.round(currentPriceKg * 1000);

  // Set ГОСТ / Standard Label
  document.getElementById("met23GostLabel").textContent = prod.gost;

  // Unit Labels
  const unit = prod.unit || "м";
  document.querySelectorAll(".met23-dynamic-unit").forEach(el => el.textContent = unit);

  // Sizes List
  const sizes = GOST_DATA[prod.id] || [];
  if (sizes.length > 0) {
    populateSizeSelect(sizes, sizeValue || prod.defSize);
    applySelectedSize(sizeValue || prod.defSize);
  } else {
    // Fallback to custom sizes for products without predefined array
    populateSizeSelect([{ size: "Стандартный", weight: 1.0 }], "Стандартный");
    baseWeightPerUnit = 1.0;
  }

  // Render Blueprint
  renderBlueprint(prod.shape, activeSize);

  // Render Table of standard sizes
  renderGostTable(sizes, activeSize);

  // Set default initial calculation (1 ton)
  document.getElementById("calc_w").value = "1.000";
  recalculateFromField("tons");
}

function applySelectedSize(sizeStr) {
  const sizes = GOST_DATA[activeProduct] || [];
  const found = sizes.find(s => s.size === sizeStr);
  if (found) {
    baseWeightPerUnit = found.weight;
  } else {
    baseWeightPerUnit = sizes[0] ? sizes[0].weight : 1.0;
  }

  updateSpecDetails();
  renderBlueprint(getShapeType(), sizeStr);
  highlightActiveTableRow(sizeStr);
  recalculateFromCurrentValues();
}

function getShapeType() {
  const prods = MET23_CATEGORIES[activeCategory].products;
  const prod = prods.find(p => p.id === activeProduct);
  return prod ? prod.shape : "round_bar";
}

function updateSpecDetails() {
  const effWeight = baseWeightPerUnit * activeMetalFactor;
  document.getElementById("specWeightPerM").textContent = effWeight.toFixed(3) + " кг/" + getProductUnit();
  
  const metersPerTon = effWeight > 0 ? (1000 / effWeight).toFixed(1) : "0.0";
  document.getElementById("specMetersPerTon").textContent = metersPerTon + " " + getProductUnit() + "/т";

  document.getElementById("specDensity").textContent = activeDensity.toFixed(2) + " г/см³";
}

// 6. Two-Way Bidirectional Calculation Engine
function initMet23Inputs() {
  const inTons = document.getElementById("calc_w");
  const inKg = document.getElementById("calc_kg");
  const inMeters = document.getElementById("calc_l");
  const inOne = document.getElementById("calc_one");
  const inCount = document.getElementById("calc_count");
  const inArea = document.getElementById("calc_area");
  const inPriceTon = document.getElementById("calc_price_ton");
  const inPriceKg = document.getElementById("calc_price_kg");

  inTons.addEventListener("input", () => recalculateFromField("tons"));
  inKg.addEventListener("input", () => recalculateFromField("kg"));
  inMeters.addEventListener("input", () => recalculateFromField("meters"));
  inOne.addEventListener("input", () => recalculateFromField("one"));
  inCount.addEventListener("input", () => recalculateFromField("count"));
  if (inArea) inArea.addEventListener("input", () => recalculateFromField("area"));

  inPriceTon.addEventListener("input", () => {
    const val = parseFloat(inPriceTon.value) || 0;
    currentPriceKg = Math.round(val / 1000);
    inPriceKg.value = currentPriceKg;
    updateTotalCost();
  });

  inPriceKg.addEventListener("input", () => {
    currentPriceKg = parseFloat(inPriceKg.value) || 0;
    inPriceTon.value = Math.round(currentPriceKg * 1000);
    updateTotalCost();
  });

  // Action Buttons
  const addBtn = document.getElementById("met23AddToQuoteBtn");
  if (addBtn) addBtn.addEventListener("click", addCalculationToQuote);

  const waBtn = document.getElementById("met23WhatsAppBtn");
  if (waBtn) waBtn.addEventListener("click", openWhatsAppWithCalculation);

  const printBtn = document.getElementById("met23PrintBtn");
  if (printBtn) printBtn.addEventListener("click", () => window.print());
}

function recalculateFromCurrentValues() {
  updateSpecDetails();
  recalculateFromField(lastEditedField);
}

function recalculateFromField(source) {
  lastEditedField = source;
  const effWeight = baseWeightPerUnit * activeMetalFactor; // kg per unit (meter/m²)
  if (effWeight <= 0) return;

  const inTons = document.getElementById("calc_w");
  const inKg = document.getElementById("calc_kg");
  const inMeters = document.getElementById("calc_l");
  const inOne = document.getElementById("calc_one");
  const inCount = document.getElementById("calc_count");
  const inArea = document.getElementById("calc_area");

  currentLengthOne = parseFloat(inOne.value) || 6.0;

  let totalKg = 0;
  let totalMeters = 0;
  let totalCount = 0;

  if (source === "tons") {
    const tons = parseFloat(inTons.value) || 0;
    totalKg = tons * 1000;
    totalMeters = totalKg / effWeight;
    totalCount = currentLengthOne > 0 ? (totalMeters / currentLengthOne) : 0;

    inKg.value = totalKg > 0 ? totalKg.toFixed(1) : "";
    inMeters.value = totalMeters > 0 ? totalMeters.toFixed(2) : "";
    inCount.value = totalCount > 0 ? totalCount.toFixed(1) : "";
  } else if (source === "kg") {
    totalKg = parseFloat(inKg.value) || 0;
    const tons = totalKg / 1000;
    totalMeters = totalKg / effWeight;
    totalCount = currentLengthOne > 0 ? (totalMeters / currentLengthOne) : 0;

    inTons.value = tons > 0 ? tons.toFixed(3) : "";
    inMeters.value = totalMeters > 0 ? totalMeters.toFixed(2) : "";
    inCount.value = totalCount > 0 ? totalCount.toFixed(1) : "";
  } else if (source === "meters") {
    totalMeters = parseFloat(inMeters.value) || 0;
    totalKg = totalMeters * effWeight;
    const tons = totalKg / 1000;
    totalCount = currentLengthOne > 0 ? (totalMeters / currentLengthOne) : 0;

    inTons.value = tons > 0 ? tons.toFixed(3) : "";
    inKg.value = totalKg > 0 ? totalKg.toFixed(1) : "";
    inCount.value = totalCount > 0 ? totalCount.toFixed(1) : "";
  } else if (source === "count") {
    totalCount = parseFloat(inCount.value) || 0;
    totalMeters = totalCount * currentLengthOne;
    totalKg = totalMeters * effWeight;
    const tons = totalKg / 1000;

    inMeters.value = totalMeters > 0 ? totalMeters.toFixed(2) : "";
    inTons.value = tons > 0 ? tons.toFixed(3) : "";
    inKg.value = totalKg > 0 ? totalKg.toFixed(1) : "";
  } else if (source === "one") {
    // If length of 1 pc changes, recalculate pieces from meters
    totalMeters = parseFloat(inMeters.value) || 0;
    totalCount = currentLengthOne > 0 ? (totalMeters / currentLengthOne) : 0;
    inCount.value = totalCount > 0 ? totalCount.toFixed(1) : "";
  }

  // Update Surface Area for pipes or sheets if applicable
  if (inArea) {
    inArea.value = (totalMeters * 0.35).toFixed(2); // approximate perimeter coverage
  }

  updateTotalCost();
}

function updateTotalCost() {
  const inKg = document.getElementById("calc_kg");
  const totalKg = parseFloat(inKg.value) || 0;
  const totalCost = Math.round(totalKg * currentPriceKg);

  const displayEl = document.getElementById("calc_total_cost");
  if (displayEl) {
    displayEl.textContent = totalCost.toLocaleString("ru-RU") + " ₸";
  }
}

// 7. Interactive SVG Blueprint Generator
function renderBlueprint(shape, size) {
  const container = document.getElementById("met23BlueprintContainer");
  if (!container) return;

  let svgHtml = "";
  if (shape === "round_ribbed" || shape === "round_bar") {
    svgHtml = `
      <svg viewBox="0 0 160 120" width="140" height="100">
        <circle cx="80" cy="60" r="38" fill="#e0f2fe" stroke="#0284c7" stroke-width="3" />
        <line x1="42" y1="60" x2="118" y2="60" stroke="#0284c7" stroke-width="1.5" stroke-dasharray="3,3" />
        <line x1="80" y1="22" x2="80" y2="98" stroke="#0284c7" stroke-width="1.5" stroke-dasharray="3,3" />
        <text x="80" y="65" text-anchor="middle" font-size="12" font-weight="700" fill="#0f172a">∅ ${size} мм</text>
      </svg>
    `;
  } else if (shape === "beam") {
    svgHtml = `
      <svg viewBox="0 0 160 120" width="140" height="100">
        <path d="M 40,25 L 120,25 L 120,35 L 85,35 L 85,85 L 120,85 L 120,95 L 40,95 L 40,85 L 75,85 L 75,35 L 40,35 Z" fill="#e0f2fe" stroke="#0284c7" stroke-width="2" />
        <text x="80" y="65" text-anchor="middle" font-size="11" font-weight="800" fill="#0f172a">${size}</text>
      </svg>
    `;
  } else if (shape === "channel") {
    svgHtml = `
      <svg viewBox="0 0 160 120" width="140" height="100">
        <path d="M 45,20 L 115,20 L 115,32 L 60,32 L 60,88 L 115,88 L 115,100 L 45,100 Z" fill="#e0f2fe" stroke="#0284c7" stroke-width="2" />
        <text x="80" y="65" text-anchor="middle" font-size="12" font-weight="800" fill="#0f172a">${size}</text>
      </svg>
    `;
  } else if (shape === "angle") {
    svgHtml = `
      <svg viewBox="0 0 160 120" width="140" height="100">
        <path d="M 45,20 L 58,20 L 58,87 L 115,87 L 115,100 L 45,100 Z" fill="#e0f2fe" stroke="#0284c7" stroke-width="2" />
        <text x="75" y="70" text-anchor="middle" font-size="11" font-weight="800" fill="#0f172a">${size}</text>
      </svg>
    `;
  } else if (shape === "pipe_round") {
    svgHtml = `
      <svg viewBox="0 0 160 120" width="140" height="100">
        <circle cx="80" cy="60" r="42" fill="#e0f2fe" stroke="#0284c7" stroke-width="2" />
        <circle cx="80" cy="60" r="32" fill="#ffffff" stroke="#0284c7" stroke-width="2" />
        <text x="80" y="64" text-anchor="middle" font-size="10" font-weight="700" fill="#0f172a">${size} мм</text>
      </svg>
    `;
  } else if (shape === "pipe_square" || shape === "pipe_rect") {
    svgHtml = `
      <svg viewBox="0 0 160 120" width="140" height="100">
        <rect x="40" y="25" width="80" height="70" rx="4" fill="#e0f2fe" stroke="#0284c7" stroke-width="2" />
        <rect x="48" y="33" width="64" height="54" rx="2" fill="#ffffff" stroke="#0284c7" stroke-width="1.5" />
        <text x="80" y="64" text-anchor="middle" font-size="11" font-weight="700" fill="#0f172a">${size}</text>
      </svg>
    `;
  } else if (shape === "sheet") {
    svgHtml = `
      <svg viewBox="0 0 160 120" width="140" height="100">
        <rect x="30" y="35" width="100" height="50" rx="2" fill="#e0f2fe" stroke="#0284c7" stroke-width="2" />
        <line x1="30" y1="42" x2="130" y2="42" stroke="#0284c7" stroke-width="1" stroke-dasharray="2,2" />
        <text x="80" y="65" text-anchor="middle" font-size="12" font-weight="700" fill="#0f172a">s = ${size} мм</text>
      </svg>
    `;
  } else {
    svgHtml = `
      <svg viewBox="0 0 160 120" width="140" height="100">
        <polygon points="80,25 115,45 115,85 80,105 45,85 45,45" fill="#e0f2fe" stroke="#0284c7" stroke-width="2" />
        <text x="80" y="68" text-anchor="middle" font-size="11" font-weight="700" fill="#0f172a">${size}</text>
      </svg>
    `;
  }

  container.innerHTML = svgHtml;
}

// 8. ГОСТ Table of Standard Sizes
function renderGostTable(sizes, currentSize) {
  const tableBody = document.getElementById("met23GostTableBody");
  if (!tableBody) return;

  if (!sizes || sizes.length === 0) {
    tableBody.innerHTML = `<tr><td colspan="4" style="text-align:center; color:#94a3b8;">Стандартные размеры задаются по техническому заданию</td></tr>`;
    return;
  }

  tableBody.innerHTML = sizes.map(s => {
    const isActive = s.size === currentSize;
    const effWeight = (s.weight * activeMetalFactor).toFixed(3);
    const mPerTon = (1000 / (s.weight * activeMetalFactor)).toFixed(1);

    return `
      <tr class="${isActive ? 'active-size' : ''}" onclick="selectGostSizeRow('${s.size}')">
        <td><strong>${s.size}</strong></td>
        <td>${effWeight} кг/${getProductUnit()}</td>
        <td>${mPerTon} ${getProductUnit()}</td>
        <td><button type="button" class="btn btn-sm ${isActive ? 'btn-primary' : 'btn-outline'}">Выбрать</button></td>
      </tr>
    `;
  }).join("");
}

function selectGostSizeRow(sizeStr) {
  document.getElementById("select-size").value = sizeStr;
  activeSize = sizeStr;
  applySelectedSize(sizeStr);
}

function highlightActiveTableRow(sizeStr) {
  document.querySelectorAll("#met23GostTableBody tr").forEach(row => {
    const firstCol = row.querySelector("strong");
    if (firstCol && firstCol.textContent.trim() === sizeStr) {
      row.classList.add("active-size");
    } else {
      row.classList.remove("active-size");
    }
  });
}

// 9. B2B Actions (Quote Cart & WhatsApp)
function addCalculationToQuote() {
  const inTons = document.getElementById("calc_w");
  const inMeters = document.getElementById("calc_l");
  const inCount = document.getElementById("calc_count");
  const costDisplay = document.getElementById("calc_total_cost");

  const tons = inTons.value || "0";
  const meters = inMeters.value || "0";
  const count = inCount.value || "1";
  const cost = costDisplay ? costDisplay.textContent : "0 ₸";

  const prodObj = MET23_CATEGORIES[activeCategory].products.find(p => p.id === activeProduct);
  const prodName = prodObj ? prodObj.name : "Металлопрокат";
  const metalObj = MET23_METALS.find(m => m.density === activeDensity);
  const metalName = metalObj ? metalObj.name.split(" ")[0] : "Сталь";

  QuoteManager.addItem({
    title: `${prodName} — ${activeSize} (${metalName})`,
    material: metalName,
    size: activeSize,
    quantity: `${tons} т (${meters} ${getProductUnit()} / ${count} шт)`,
    price: cost
  });

  showToast(`Расчет "${prodName} ${activeSize}" добавлен в спецификацию (КП)!`);
}

function openWhatsAppWithCalculation() {
  const inTons = document.getElementById("calc_w").value || "0";
  const inKg = document.getElementById("calc_kg").value || "0";
  const inMeters = document.getElementById("calc_l").value || "0";
  const inCount = document.getElementById("calc_count").value || "1";
  const cost = document.getElementById("calc_total_cost").textContent;

  const prodObj = MET23_CATEGORIES[activeCategory].products.find(p => p.id === activeProduct);
  const prodName = prodObj ? prodObj.name : "Металлопрокат";
  const gost = document.getElementById("met23GostLabel").textContent;

  const message = `Сәлеметсіз бе! Прошу рассчитать наличие и выставить счет в ТОО Ferrotech Kazakhstan:\n\n` +
    `• Позиция: ${prodName}\n` +
    `• Размер / ГОСТ: ${activeSize} (${gost})\n` +
    `• Объем: ${inTons} т (${inKg} кг / ${inMeters} ${getProductUnit()} / ${inCount} шт)\n` +
    `• Расчетная сумма: ${cost} (с НДС 12%)\n\n` +
    `Прошу подтвердить наличие на складе в Астане / Алматы.`;

  window.open("https://wa.me/77005557080?text=" + encodeURIComponent(message), "_blank");
}

function recalculateCustomSize() {
  const dim1 = parseFloat(document.getElementById("customDim1")?.value) || 10;
  const dim2 = parseFloat(document.getElementById("customDim2")?.value) || 100;
  const dim3 = parseFloat(document.getElementById("customDim3")?.value) || 3.0;

  const shape = getShapeType();
  let weight = 1.0;

  if (shape === "sheet") {
    weight = (dim1 * 7.85); // kg per m²
    activeSize = `Лист s=${dim1} мм`;
  } else if (shape === "round_bar" || shape === "round_ribbed" || shape === "wire") {
    weight = (Math.PI * Math.pow(dim1 / 2, 2) * 7.85) / 1000;
    activeSize = `∅ ${dim1} мм`;
  } else if (shape === "pipe_round") {
    weight = (Math.PI * (dim1 - dim3) * dim3 * 7.85) / 1000;
    activeSize = `${dim1}x${dim3} мм`;
  } else if (shape === "pipe_square" || shape === "pipe_rect") {
    weight = (2 * dim3 * (dim1 + dim2 - 2 * dim3) * 7.85) / 1000;
    activeSize = `${dim1}x${dim2}x${dim3} мм`;
  } else if (shape === "angle") {
    weight = ((dim1 + dim2 - dim3) * dim3 * 7.85) / 1000;
    activeSize = `${dim1}x${dim2}x${dim3} мм`;
  } else if (shape === "strip") {
    weight = (dim1 * dim2 * 7.85) / 1000;
    activeSize = `${dim2}x${dim1} мм`;
  } else {
    weight = (dim1 * dim1 * 7.85) / 1000;
    activeSize = `${dim1}x${dim1} мм`;
  }

  baseWeightPerUnit = weight;
  updateSpecDetails();
  renderBlueprint(shape, activeSize);
  recalculateFromCurrentValues();
  showToast(`Установлен произвольный размер: ${activeSize}`);
}

