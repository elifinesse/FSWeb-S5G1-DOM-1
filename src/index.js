const siteContent = {
  // BU NESNEYİ DEĞİŞTİRMEYİN
  nav: {
    "nav-item-1": "Servisler",
    "nav-item-2": "Ürünler",
    "nav-item-3": "Vizyon",
    "nav-item-4": "Özellikler",
    "nav-item-5": "Hakkımızda",
    "nav-item-6": "İletişim",
  },
  cta: {
    h1: "Bu DOM Mükemmel",
    button: "Başlayın",
  },
  "ana-içerik": {
    "özellikler-h4": "Özellikler",
    "özellikler-içerik":
      "Özellikler içeriği elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "hakkımızda-h4": "Hakkında",
    "hakkımızda-içerik":
      "Hakkında içeriği elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "servisler-h4": "Servisler",
    "servisler-içeriği":
      "Servisler içeriği elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "ürünler-h4": "Ürünler",
    "ürünler-içeriği":
      "Ürünler içeriği elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vizyon-h4": "Vizyon",
    "vizyon-içeriği":
      "Vizyon içeriği elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  iletisim: {
    "iletişim-h4": "İletişim",
    adres: "100 numara Bilmem ne sokak Ankara'da bir semt, Türkiye",
    telefon: "+90 (123) 456-7899",
    email: "satis@birsirketsitesi.com.tr",
  },
  footer: {
    copyright: "Copyright Bir Şirket Sitesi 2022",
  },
  images: {
    "logo-img": "http://localhost:9000/img/logo.png",
    "cta-img": "http://localhost:9000/img/cta.png",
    "accent-img": "http://localhost:9000/img/accent.png",
  },
};

console.log("Proje açıldı!");

/* Kodlar Buradan aşağıya */

const nav2 = document.querySelectorAll("header nav a");
for (let i = 0; i < nav2.length; i++) {
  nav2[i].textContent = siteContent.nav[`nav-item-${i + 1}`];
  nav2[i].setAttribute("class", "italic");
}
document.querySelector(".cta-text h1").textContent = siteContent.cta.h1;
document.querySelector(".cta-text button").textContent = siteContent.cta.button;
const textContentArr = document.querySelectorAll(".text-content h4");
textContentArr[0].textContent = siteContent["ana-içerik"]["özellikler-h4"];
textContentArr[1].textContent = siteContent["ana-içerik"]["hakkımızda-h4"];
const parArray = document.querySelectorAll(".text-content p");
parArray[0].textContent = siteContent["ana-içerik"]["özellikler-içerik"];
parArray[1].textContent = siteContent["ana-içerik"]["hakkımızda-içerik"];

document.querySelectorAll(".bottom-content .text-content h4")[0].textContent =
  siteContent["ana-içerik"]["servisler-h4"];
document.querySelectorAll(".bottom-content .text-content h4")[1].textContent =
  siteContent["ana-içerik"]["ürünler-h4"];
document.querySelectorAll(".bottom-content .text-content h4")[2].textContent =
  siteContent["ana-içerik"]["vizyon-h4"];
document.querySelectorAll(".bottom-content .text-content p")[0].textContent =
  siteContent["ana-içerik"]["servisler-içeriği"];
document.querySelectorAll(".bottom-content .text-content p")[1].textContent =
  siteContent["ana-içerik"]["ürünler-içeriği"];
document.querySelectorAll(".bottom-content .text-content p")[2].textContent =
  siteContent["ana-içerik"]["vizyon-içeriği"];
document.querySelector(".contact h4").textContent =
  siteContent.iletisim["iletişim-h4"];
document.querySelectorAll(".contact p")[0].textContent =
  siteContent.iletisim.adres;
document.querySelectorAll(".contact p")[1].textContent =
  siteContent.iletisim.telefon;
document.querySelectorAll(".contact p")[2].textContent =
  siteContent.iletisim.email;
document.querySelector("footer a").textContent = siteContent.footer.copyright;
document.querySelector("footer a").setAttribute("class", "bold");
document.getElementById("logo-img").src = siteContent.images["logo-img"];
document.getElementById("cta-img").src = siteContent.images["cta-img"];
document.getElementById("middle-img").src = siteContent.images["accent-img"];
