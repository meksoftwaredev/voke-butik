function UrunTanitimBlok() {
    let x = document.getElementById("UrunTanitimEkran");
    x.style.left = "0%";
    x.style.width = "100%";
    x.style.height = "100%";
}

function kapat() {
    let x = document.getElementById("UrunTanitimEkran");
    x.style.left = "-999%";
    x.style.height = "5%";
    x.style.transitionDuration = "0.5s";
    let y = document.getElementById("SiparisVerEkran");
    y.style.left = "-999%";
}

function SiparisVerBlok() {
    let x = document.getElementById("SiparisVerEkran");
    x.style.left = "0%";
    x.style.width = "100%";
    x.style.height = "100%";
    let y = document.getElementById("UrunTanitimEkran");
    y.style.left = "-999%";
}