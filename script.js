/* =================================================================
   Həsən & Hüseyn — charity site
   Translations + lightbox + copy + gallery injection + animations
================================================================= */

// ---------- TRANSLATIONS ----------
const I18N = {
  az: {
    "hero.title":        "İki balaca ürəyin döyünməsi sizin dəstəyinizdən asılıdır",
    "hero.names":        "Həsən və Hüseyn Cəfərov",
    "hero.badge":        "Təcili yardım kampaniyası",
    "cta.donate":        "Yardım et",
    "cta.story":         "Hekayəni oxu",
    "cta.cards":         "Kartlara bax",
    "cta.docs":          "Sənədlərə bax",

    "story.title":       "Hekayələri",
    "story.body":        "Əkiz qardaşlar Həsən və Hüseyn ağır ürək qüsuru ilə mübarizə aparırlar. Onların ürəyində dəlik var və ciddi ürək ritm pozğunluğu (paroksizm) aşkarlanıb. Həkimlər bildirir ki, ürəyin fəaliyyətini qorumaq üçün təcili olaraq ürəyə xüsusi aparat yerləşdirilməlidir. Əks halda ürək hər an fəaliyyətini dayandıra bilər. Təəssüf ki, bu əməliyyatın Azərbaycanda mümkün müalicəsi yoxdur. Həkimlərin tövsiyəsi ilə uşaqların İsraildə əməliyyat olunması planlaşdırılır.",

    "condition.title":   "Tibbi Vəziyyət",
    "condition.hasan":   "Anadangəlmə ürək qüsuru — ürəkdə dəlik. <span class=\"medical\">(tibbi: VSD ~9 mm, PFO, aberran bant)</span>",
    "condition.huseyn":  "Anadangəlmə ürək qüsuru — ürəkdə dəlik. <span class=\"medical\">(tibbi: VSD ~9 mm, PFO, aberran bant)</span>",

    "gallery.title":     "Həsən-Hüseynin gözündən",

    "docs.title":        "Rəsmi Sənədlər",
    "docs.caption":      "Bu sənədlər diaqnozu və müalicənin Azərbaycanda mümkün olmamasını təsdiq edir.",

    "donate.title":      "Yardım Etmək Üçün",
    "donate.caption":    "Bütün kartlar ailənin adına qeydiyyatdadır.",
    "donate.copy":       "Kopyala",
    "donate.copied":     "Kopyalandı",

    "contact.cardTitle":     "Ailə",
    "contact.father":        "Ata",
    "contact.fatherName":    "Daşdəmir Cəfərov",
    "contact.address":       "Ünvan",
    "contact.addressValue":  "Sumqayıt şəhəri, 6-cı mikrorayon, Bina 35K, Mənzil 73 (kirayə)",
    "contact.phone":         "Telefon",

    "footer.note":       "© 2026 Həsən və Hüseyn Cəfərov"
  },

  tr: {
    "hero.title":        "İki küçük yüreğin atışı sizin desteğinize bağlı",
    "hero.names":        "Həsən ve Hüseyn Cəfərov",
    "hero.badge":        "Acil yardım kampanyası",
    "cta.donate":        "Yardım et",
    "cta.story":         "Hikayeyi oku",
    "cta.cards":         "Kartlara bak",
    "cta.docs":          "Belgelere bak",

    "story.title":       "Hikayeleri",
    "story.body":        "İkiz kardeşler Həsən ve Hüseyn ağır kalp kusuru ile mücadele ediyorlar. Kalplerinde delik var ve ciddi kalp ritim bozukluğu (paroksizm) tespit edildi. Doktorlar belirtiyor ki, kalbin işlevini korumak için acilen kalbe özel bir cihaz yerleştirilmelidir. Aksi takdirde kalp her an çalışmayı durdurabilir. Maalesef bu ameliyatın Azerbaycan'da mümkün tedavisi yoktur. Doktorların tavsiyesi üzerine çocukların İsrail'de ameliyat olmaları planlanıyor.",

    "condition.title":   "Tıbbi Durum",
    "condition.hasan":   "Doğuştan kalp kusuru — kalpte delik. <span class=\"medical\">(tıbbi: VSD ~9 mm, PFO, aberran bant)</span>",
    "condition.huseyn":  "Doğuştan kalp kusuru — kalpte delik. <span class=\"medical\">(tıbbi: VSD ~9 mm, PFO, aberran bant)</span>",

    "gallery.title":     "Həsən ve Hüseyn'in gözünden",

    "docs.title":        "Resmi Belgeler",
    "docs.caption":      "Bu belgeler tanıyı ve tedavinin Azerbaycan'da mümkün olmadığını teyit ediyor.",

    "donate.title":      "Yardım için",
    "donate.caption":    "Tüm kartlar ailenin adına kayıtlıdır.",
    "donate.copy":       "Kopyala",
    "donate.copied":     "Kopyalandı",

    "contact.cardTitle":     "Aile",
    "contact.father":        "Baba",
    "contact.fatherName":    "Daşdəmir Cəfərov",
    "contact.address":       "Adres",
    "contact.addressValue":  "Sumqayıt şehri, 6. mikrorayon, Bina 35K, Daire 73 (kira)",
    "contact.phone":         "Telefon",

    "footer.note":       "© 2026 Həsən ve Hüseyn Cəfərov"
  },

  ru: {
    "hero.title":        "Биение двух маленьких сердец зависит от вашей поддержки",
    "hero.names":        "Хасан и Хусейн Джафаровы",
    "hero.badge":        "Срочная кампания помощи",
    "cta.donate":        "Помочь",
    "cta.story":         "Читать историю",
    "cta.cards":         "Посмотреть карты",
    "cta.docs":          "Посмотреть документы",

    "story.title":       "Их история",
    "story.body":        "Братья-близнецы Хасан и Хусейн борются с тяжёлым пороком сердца. У них в сердце имеется отверстие, и выявлено серьёзное нарушение сердечного ритма (пароксизм). Врачи сообщают, что для сохранения работы сердца необходимо срочно установить специальный аппарат. В противном случае сердце может остановиться в любой момент. К сожалению, данная операция недоступна в Азербайджане. По рекомендации врачей планируется проведение операции в Израиле.",

    "condition.title":   "Медицинское состояние",
    "condition.hasan":   "Врождённый порок сердца — отверстие в сердце. <span class=\"medical\">(медицинский: ДМЖП ~9 мм, ООО, аберрантный пучок)</span>",
    "condition.huseyn":  "Врождённый порок сердца — отверстие в сердце. <span class=\"medical\">(медицинский: ДМЖП ~9 мм, ООО, аберрантный пучок)</span>",

    "gallery.title":     "Глазами Хасана и Хусейна",

    "docs.title":        "Официальные документы",
    "docs.caption":      "Эти документы подтверждают диагноз и то, что лечение в Азербайджане недоступно.",

    "donate.title":      "Реквизиты для помощи",
    "donate.caption":    "Все карты оформлены на семью.",
    "donate.copy":       "Копировать",
    "donate.copied":     "Скопировано",

    "contact.cardTitle":     "Семья",
    "contact.father":        "Отец",
    "contact.fatherName":    "Дашдемир Джафаров",
    "contact.address":       "Адрес",
    "contact.addressValue":  "г. Сумгаит, 6-й микрорайон, дом 35К, квартира 73 (съёмная)",
    "contact.phone":         "Телефон",

    "footer.note":       "© 2026 Хасан и Хусейн Джафаровы"
  },

  en: {
    "hero.title":        "The beating of two little hearts depends on your support",
    "hero.names":        "Hasan and Huseyn Jafarov",
    "hero.badge":        "Urgent fundraising campaign",
    "cta.donate":        "Donate",
    "cta.story":         "Read their story",
    "cta.cards":         "View cards",
    "cta.docs":          "View documents",

    "story.title":       "Their Story",
    "story.body":        "Twin brothers Hasan and Huseyn are battling a severe heart defect. They have a hole in their hearts, and a serious heart rhythm disorder (paroxysm) has been detected. Doctors say that a special device must urgently be implanted in the heart to preserve its function. Otherwise, the heart could stop at any moment. Unfortunately, this surgery is not available in Azerbaijan. On the doctors' recommendation, the surgery is planned to be carried out in Israel.",

    "condition.title":   "Medical Condition",
    "condition.hasan":   "Congenital heart defect — a hole in the heart. <span class=\"medical\">(medical: VSD ~9 mm, PFO, aberrant band)</span>",
    "condition.huseyn":  "Congenital heart defect — a hole in the heart. <span class=\"medical\">(medical: VSD ~9 mm, PFO, aberrant band)</span>",

    "gallery.title":     "Through Həsən & Hüseyn's eyes",

    "docs.title":        "Official Documents",
    "docs.caption":      "These documents confirm the diagnosis and that treatment is not available in Azerbaijan.",

    "donate.title":      "How to Donate",
    "donate.caption":    "All cards are registered in the family's name.",
    "donate.copy":       "Copy",
    "donate.copied":     "Copied",

    "contact.cardTitle":     "Family",
    "contact.father":        "Father",
    "contact.fatherName":    "Dashdamir Jafarov",
    "contact.address":       "Address",
    "contact.addressValue":  "Sumgayit city, 6th microdistrict, Building 35K, Apartment 73 (rented)",
    "contact.phone":         "Phone",

    "footer.note":       "© 2026 Hasan and Huseyn Jafarov"
  }
};

// ---------- LANGUAGE SWITCHING ----------
const SUPPORTED = ["az", "tr", "ru", "en"];
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
// Track whether we've pushed a history entry for the open lightbox so the
// phone BACK button just closes the lightbox instead of leaving the site.
let lbStatePushed = false;

function openLightbox(list, idx) {
  lbList = list;
  lbIndex = idx;
  lightboxImg.src = list[idx];
  lightbox.classList.add("open");
  lightbox.setAttribute("aria-hidden", "false");
  document.body.style.overflow = "hidden";

  // Push one history entry per open; navigation between photos shares it.
  if (!lbStatePushed) {
    history.pushState({ lightbox: true }, "");
    lbStatePushed = true;
  }
}

// fromPopstate=true means the browser has already popped the history entry
// (user pressed BACK / swiped back), so we must NOT call history.back() again.
function closeLightbox(fromPopstate) {
  lightbox.classList.remove("open");
  lightbox.setAttribute("aria-hidden", "true");
  document.body.style.overflow = "";

  if (lbStatePushed && !fromPopstate) {
    lbStatePushed = false;
    history.back();
  } else {
    lbStatePushed = false;
  }
}

function navLightbox(delta) {
  if (!lbList.length) return;
  lbIndex = (lbIndex + delta + lbList.length) % lbList.length;
  lightboxImg.src = lbList[lbIndex];
}

function initLightbox() {
  lightboxClose.addEventListener("click", () => closeLightbox(false));
  lightboxPrev.addEventListener("click", () => navLightbox(-1));
  lightboxNext.addEventListener("click", () => navLightbox(1));

  // Click outside image closes
  lightbox.addEventListener("click", (e) => {
    if (e.target === lightbox) closeLightbox(false);
  });

  // Keyboard navigation
  document.addEventListener("keydown", (e) => {
    if (!lightbox.classList.contains("open")) return;
    if (e.key === "Escape")      closeLightbox(false);
    if (e.key === "ArrowLeft")   navLightbox(-1);
    if (e.key === "ArrowRight")  navLightbox(1);
  });

  // Phone BACK button / browser back closes the lightbox instead of the site.
  window.addEventListener("popstate", () => {
    if (lightbox.classList.contains("open")) closeLightbox(true);
  });
}

// ---------- COPY-TO-CLIPBOARD ----------
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
    const labelEl = btn.querySelector(".btn-copy-label");
    let revertTimer;

    btn.addEventListener("click", async () => {
      const num = btn.getAttribute("data-copy");
      const ok = await copyToClipboard(num);
      if (!ok) return;

      // Swap label to "Kopyalandı" + green success state for ~2 seconds.
      const dict = I18N[getStoredLang()];
      labelEl.textContent = dict["donate.copied"];
      btn.classList.add("copied");

      clearTimeout(revertTimer);
      revertTimer = setTimeout(() => {
        labelEl.textContent = I18N[getStoredLang()]["donate.copy"];
        btn.classList.remove("copied");
      }, 2000);
    });
  });
}

// ---------- STICKY DONATE BAR ----------
// Button scrolls to the donation section; the bar itself appears only after
// the hero is scrolled out of view, and hides while the donate section shows.
function initCardsFab() {
  const fab = document.getElementById("cardsFab");
  const bar = document.getElementById("donateBar");
  if (!fab || !bar) return;

  fab.addEventListener("click", () => {
    const target = document.getElementById("donate");
    if (!target) return;
    target.scrollIntoView({ behavior: "smooth", block: "center" });
  });

  const hero = document.getElementById("hero");
  const donate = document.getElementById("donate");
  let heroVisible = true;
  let donateVisible = false;

  const update = () =>
    bar.classList.toggle("visible", !heroVisible && !donateVisible);

  const obs = new IntersectionObserver((entries) => {
    entries.forEach((e) => {
      if (e.target === hero) heroVisible = e.isIntersecting;
      if (e.target === donate) donateVisible = e.isIntersecting;
    });
    update();
  }, { threshold: 0.15 });

  if (hero) obs.observe(hero);
  if (donate) obs.observe(donate);
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
