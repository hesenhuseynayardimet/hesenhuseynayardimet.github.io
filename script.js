/* =================================================================
   Həsən & Hüseyn — charity site
   Translations + lightbox + copy + gallery injection + animations
================================================================= */

// ---------- TRANSLATIONS ----------
const I18N = {
  az: {
    "hero.title":        "İki balaca ürəyin döyünməsi sizin dəstəyinizdən asılıdır",
    "hero.names":        "Həsən və Hüseyn Cəfərov",
    "fab.cards":         "Kartlara bax",

    "story.title":       "Hekayələri",
    "story.body":        "Əkiz qardaşlar Həsən və Hüseyn ağır ürək qüsuru ilə mübarizə aparırlar. Onların ürəyində dəlik var və ciddi ürək ritm pozğunluğu (paroksizm) aşkarlanıb. Həkimlər bildirir ki, ürəyin fəaliyyətini qorumaq üçün təcili olaraq ürəyə xüsusi aparat yerləşdirilməlidir. Əks halda ürək hər an fəaliyyətini dayandıra bilər. Təəssüf ki, bu əməliyyatın Azərbaycanda mümkün müalicəsi yoxdur. Həkimlərin tövsiyəsi ilə uşaqların İsraildə əməliyyat olunması planlaşdırılır.",

    "condition.title":   "Tibbi Vəziyyət",
    "condition.hasan":   "Anadangəlmə ürək qüsuru — ürəkdə dəlik. <span class=\"medical\">(tibbi: VSD ~9 mm, PFO, aberran bant)</span>",
    "condition.huseyn":  "Anadangəlmə ürək qüsuru — ürəkdə dəliklər. <span class=\"medical\">(tibbi: 2 kiçik VSD, PFO)</span>",

    "gallery.title":     "Foto Qalereya",

    "docs.title":        "Rəsmi Sənədlər",
    "docs.caption":      "Bu sənədlər diaqnozu və müalicənin Azərbaycanda mümkün olmamasını təsdiq edir.",

    "donate.title":      "Yardım Etmək Üçün",
    "donate.caption":    "Bütün kartlar ailənin adına qeydiyyatdadır.",
    "donate.copy":       "Kopyala",
    "donate.copied":     "Kopyalandı",

    "contact.title":         "Əlaqə",
    "contact.father":        "Ata",
    "contact.fatherName":    "Daşdəmir Cəfərov",
    "contact.address":       "Ünvan",
    "contact.addressValue":  "Sumqayıt şəhəri, 6-cı mikrorayon, Bina 35K, Mənzil 73 (kirayə)",
    "contact.phone":         "Telefon",

    "footer.note":       "© Həsən və Hüseyn Cəfərov üçün yardım kampaniyası"
  },

  ru: {
    "hero.title":        "Биение двух маленьких сердец зависит от вашей поддержки",
    "hero.names":        "Хасан и Хусейн Джафаровы",
    "fab.cards":         "Посмотреть карты",

    "story.title":       "Их история",
    "story.body":        "Братья-близнецы Хасан и Хусейн борются с тяжёлым пороком сердца. У них в сердце имеется отверстие, и выявлено серьёзное нарушение сердечного ритма (пароксизм). Врачи сообщают, что для сохранения работы сердца необходимо срочно установить специальный аппарат. В противном случае сердце может остановиться в любой момент. К сожалению, данная операция недоступна в Азербайджане. По рекомендации врачей планируется проведение операции в Израиле.",

    "condition.title":   "Медицинское состояние",
    "condition.hasan":   "Врождённый порок сердца — отверстие в сердце. <span class=\"medical\">(медицинский: ДМЖП ~9 мм, ООО, аберрантный пучок)</span>",
    "condition.huseyn":  "Врождённый порок сердца — отверстия в сердце. <span class=\"medical\">(медицинский: 2 малых ДМЖП, ООО)</span>",

    "gallery.title":     "Фотогалерея",

    "docs.title":        "Официальные документы",
    "docs.caption":      "Эти документы подтверждают диагноз и то, что лечение в Азербайджане недоступно.",

    "donate.title":      "Реквизиты для помощи",
    "donate.caption":    "Все карты оформлены на семью.",
    "donate.copy":       "Копировать",
    "donate.copied":     "Скопировано",

    "contact.title":         "Контакты",
    "contact.father":        "Отец",
    "contact.fatherName":    "Дашдемир Джафаров",
    "contact.address":       "Адрес",
    "contact.addressValue":  "г. Сумгаит, 6-й микрорайон, дом 35К, квартира 73 (съёмная)",
    "contact.phone":         "Телефон",

    "footer.note":       "© Кампания помощи Хасану и Хусейну Джафаровым"
  },

  en: {
    "hero.title":        "The beating of two little hearts depends on your support",
    "hero.names":        "Hasan and Huseyn Jafarov",
    "fab.cards":         "View bank cards",

    "story.title":       "Their Story",
    "story.body":        "Twin brothers Hasan and Huseyn are battling a severe heart defect. They have a hole in their hearts, and a serious heart rhythm disorder (paroxysm) has been detected. Doctors say that a special device must urgently be implanted in the heart to preserve its function. Otherwise, the heart could stop at any moment. Unfortunately, this surgery is not available in Azerbaijan. On the doctors' recommendation, the surgery is planned to be carried out in Israel.",

    "condition.title":   "Medical Condition",
    "condition.hasan":   "Congenital heart defect — a hole in the heart. <span class=\"medical\">(medical: VSD ~9 mm, PFO, aberrant band)</span>",
    "condition.huseyn":  "Congenital heart defect — holes in the heart. <span class=\"medical\">(medical: 2 small VSD, PFO)</span>",

    "gallery.title":     "Photo Gallery",

    "docs.title":        "Official Documents",
    "docs.caption":      "These documents confirm the diagnosis and that treatment is not available in Azerbaijan.",

    "donate.title":      "How to Donate",
    "donate.caption":    "All cards are registered in the family's name.",
    "donate.copy":       "Copy",
    "donate.copied":     "Copied",

    "contact.title":         "Contact",
    "contact.father":        "Father",
    "contact.fatherName":    "Dashdamir Jafarov",
    "contact.address":       "Address",
    "contact.addressValue":  "Sumgayit city, 6th microdistrict, Building 35K, Apartment 73 (rented)",
    "contact.phone":         "Phone",

    "footer.note":       "© Fundraising campaign for Hasan and Huseyn Jafarov"
  }
};

// ---------- LANGUAGE SWITCHING ----------
const SUPPORTED = ["az", "ru", "en"];
const DEFAULT_LANG = "az";

function getStoredLang() {
  const stored = localStorage.getItem("lang");
  return SUPPORTED.includes(stored) ? stored : DEFAULT_LANG;
}

function applyLang(lang) {
  const dict = I18N[lang];
  if (!dict) return;

  document.documentElement.lang = lang;
  localStorage.setItem("lang", lang);

  // Update all i18n nodes
  document.querySelectorAll("[data-i18n]").forEach((el) => {
    const key = el.getAttribute("data-i18n");
    if (dict[key] !== undefined) {
      el.innerHTML = dict[key];
    }
  });

  // Toggle active state on language buttons
  document.querySelectorAll(".lang-btn").forEach((btn) => {
    btn.classList.toggle("active", btn.dataset.lang === lang);
  });
}

function initLangSwitcher() {
  document.querySelectorAll(".lang-btn").forEach((btn) => {
    btn.addEventListener("click", () => applyLang(btn.dataset.lang));
  });
}

// ---------- GALLERY & DOCS INJECTION ----------
const PHOTOS = Array.from({ length: 9 }, (_, i) => `images/photo-${i + 1}.jpg`);
const DOCS   = Array.from({ length: 5 }, (_, i) => `images/doc-${i + 1}.jpg`);

function buildGallery() {
  const grid = document.getElementById("galleryGrid");
  PHOTOS.forEach((src, idx) => {
    const div = document.createElement("div");
    div.className = "gallery-item fade-in";
    div.innerHTML = `<img src="${src}" alt="Həsən və Hüseyn — foto ${idx + 1}" loading="lazy" />`;
    div.addEventListener("click", () => openLightbox(PHOTOS, idx));
    grid.appendChild(div);
  });
}

function buildDocs() {
  const grid = document.getElementById("docsGrid");
  DOCS.forEach((src, idx) => {
    const div = document.createElement("div");
    div.className = "doc-item fade-in";
    div.innerHTML = `<img src="${src}" alt="Sənəd ${idx + 1}" loading="lazy" />`;
    div.addEventListener("click", () => openLightbox(DOCS, idx));
    grid.appendChild(div);
  });
}

// ---------- LIGHTBOX ----------
const lightbox     = document.getElementById("lightbox");
const lightboxImg  = document.getElementById("lightboxImg");
const lightboxClose= document.getElementById("lightboxClose");
const lightboxPrev = document.getElementById("lightboxPrev");
const lightboxNext = document.getElementById("lightboxNext");

let lbList = [];
let lbIndex = 0;

function openLightbox(list, idx) {
  lbList = list;
  lbIndex = idx;
  lightboxImg.src = list[idx];
  lightbox.classList.add("open");
  lightbox.setAttribute("aria-hidden", "false");
  document.body.style.overflow = "hidden";
}

function closeLightbox() {
  lightbox.classList.remove("open");
  lightbox.setAttribute("aria-hidden", "true");
  document.body.style.overflow = "";
}

function navLightbox(delta) {
  if (!lbList.length) return;
  lbIndex = (lbIndex + delta + lbList.length) % lbList.length;
  lightboxImg.src = lbList[lbIndex];
}

function initLightbox() {
  lightboxClose.addEventListener("click", closeLightbox);
  lightboxPrev.addEventListener("click", () => navLightbox(-1));
  lightboxNext.addEventListener("click", () => navLightbox(1));

  // Click outside image closes
  lightbox.addEventListener("click", (e) => {
    if (e.target === lightbox) closeLightbox();
  });

  // Keyboard navigation
  document.addEventListener("keydown", (e) => {
    if (!lightbox.classList.contains("open")) return;
    if (e.key === "Escape")      closeLightbox();
    if (e.key === "ArrowLeft")   navLightbox(-1);
    if (e.key === "ArrowRight")  navLightbox(1);
  });
}

// ---------- COPY-TO-CLIPBOARD ----------
const toast = document.getElementById("toast");
let toastTimer;

function showToast() {
  const lang = getStoredLang();
  toast.textContent = I18N[lang]["donate.copied"];
  toast.classList.add("show");
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => toast.classList.remove("show"), 2000);
}

async function copyToClipboard(text) {
  try {
    await navigator.clipboard.writeText(text);
    return true;
  } catch {
    // Fallback for older browsers / non-secure contexts
    const ta = document.createElement("textarea");
    ta.value = text;
    ta.style.position = "fixed";
    ta.style.opacity = "0";
    document.body.appendChild(ta);
    ta.select();
    let ok = false;
    try { ok = document.execCommand("copy"); } catch (_) {}
    document.body.removeChild(ta);
    return ok;
  }
}

function initCopyButtons() {
  document.querySelectorAll(".btn-copy").forEach((btn) => {
    btn.addEventListener("click", async () => {
      const num = btn.getAttribute("data-copy");
      const ok = await copyToClipboard(num);
      if (ok) {
        showToast();
        btn.classList.add("copied");
        setTimeout(() => btn.classList.remove("copied"), 1200);
      }
    });
  });
}

// ---------- FLOATING "VIEW CARDS" BUTTON ----------
// Click smooth-scrolls to the donation section and centers it in the viewport.
function initCardsFab() {
  const fab = document.getElementById("cardsFab");
  if (!fab) return;
  fab.addEventListener("click", () => {
    const target = document.getElementById("donate");
    if (!target) return;
    target.scrollIntoView({ behavior: "smooth", block: "center" });
  });
}

// ---------- SCROLL ANIMATIONS ----------
function initScrollAnimations() {
  // Mark anything that should fade-in
  document.querySelectorAll(
    ".hero-title, .hero-names, " +
    ".story-text, .condition-card, .bank-card, " +
    ".section-title, .section-caption"
  ).forEach((el) => el.classList.add("fade-in"));

  const obs = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
          obs.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.12, rootMargin: "0px 0px -40px 0px" }
  );

  document.querySelectorAll(".fade-in").forEach((el) => obs.observe(el));
}

// ---------- INIT ----------
document.addEventListener("DOMContentLoaded", () => {
  buildGallery();
  buildDocs();
  initLangSwitcher();
  initLightbox();
  initCopyButtons();
  initCardsFab();
  applyLang(getStoredLang());
  initScrollAnimations();
});
