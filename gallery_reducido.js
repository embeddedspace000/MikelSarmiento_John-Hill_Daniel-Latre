// ========== RELOJ EN TIEMPO REAL ==========
function updateClock() {
  const now = new Date();
  const timeStr = now.toLocaleTimeString("es-ES", {
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    hour12: false,
  });
  const timeEl = document.getElementById("current-time");
  if (timeEl) timeEl.textContent = timeStr;
}

function initWidget() {
  updateClock();
  setInterval(updateClock, 1000);
  if (typeof getWeatherAndTimezone === "function") getWeatherAndTimezone();
}
document.addEventListener("DOMContentLoaded", initWidget);

// ========== DATOS DE MEDIOS ==========
const mediaItems = [
  // { src: "img_optimizada/PXL_20250126_131916465.MP_resultado.jpg", x: 1000, y: 1900, type: "image" },
  // { src: "img_optimizada/PXL_20250303_155102619.RAW-01.COVER_resultado.jpg",  x: 500, y: 1000, type: "image" },
  //{src: "https://dani-latre.xyz/media/humo_garaje.mp4", x: 500, y: 1500, type: "video"},
  {src: "https://dani-latre.xyz/media/Plastico-Aire-Sala-Luces.mp4", x: 1000, y: 4500, type: "video"},
  {src: "img_optimizada/PXL_20250303_184144172.NIGHT.RAW-01.COVER_resultado.jpg", x: 100, y: 2300, type: "image"},
  {src: "img_optimizada/PXL_20250831_103101053.webp", x: 3000, y: 900, type: "image"},
  {src: "img_optimizada/local humo2 con referencia_resultado.jpg", x: 100, y: 4500, type: "image"},
  {src: "img_optimizada/PXL_20250831_193407976.webp", x: 200, y: 7000, type: "image"},
  {src: "https://dani-latre.xyz/media/humo-forma-suelo.mp4", x: 30, y: 60, type: "video"},
  {src: "img_optimizada/PXL_20250831_103354825.webp", x: 900, y: 800, type: "image"},
  {src: "img_optimizada/PXL_20250211_171848110.RAW-01.COVER_resultado.jpg", x: 600, y: 3000, type: "image"},
  {src: "img_optimizada/editadas portfolio_00_5_resultado.jpg", x: 280, y: 1880, type: "image"},
  {src: "img_optimizada/d4948c53_resultado.jpg", x: 1000, y: 6600, type: "image"},
  {src: "https://dani-latre.xyz/media/proyeccion_local.mp4", x: 1000, y: 2400, type: "video"},
  { src: "img_optimizada/PXL_20250303_183943567.RAW-01.COVER_resultado.jpg", x: 400, y: 400, type: "image" },
  {src: "img_optimizada/camion esquema_resultado.jpg", x: 1500, y: 5500, type: "image"},
    {src: "img_optimizada/PXL_20250114_171008335.NIGHT_resultado.jpg", x: 1010, y: 250, type: "image"},
    {src: "img_optimizada/P8090003_resultado.jpg", x: 1000, y: 9000, type: "image"},
    {src: "https://dani-latre.xyz/media/REFELCTANTE%20OPTIMIZADO.mp4", x: 1000, y: 4500, type: "video"},
    {src: "img_optimizada/pruebas_labo_daniel_latre_00_6_resultado.jpg", x: 900, y: 1800, type: "image"},
    {src: "img_optimizada/editadas camarasony_00_7_resultado.jpg", x: 1000, y: 1900, type: "image"},
    {src: "img_optimizada/PXL_20250211_175218562.RAW-01.COVER_resultado.jpg", x: 900, y: 3000, type: "image"},
    //{src: "img_optimizada/PXL_20250123_181908097_resultado.jpg", x: 900, y: 3500, type: "image"},
    //{src: "img_optimizada/editadas camarasony_00_24_resultado.jpg", x: 0, y: 4000, type: "image"},
    //{src: "img_optimizada/PXL_20250303_174419629.RAW-01.COVER_resultado.jpg", x: 200, y: 5800, type: "image"},
    {src: "img_optimizada/IMG-20250113-WA0029_resultado.jpg", x: 10, y: 5300, type: "image"},
    //{src: "img_optimizada/editadas camarasony_00_20_resultado.jpg", x: 1000, y: 6900, type: "image"},
    {src: "img_optimizada/editadas camarasony_00_21_resultado.jpg", x: 0, y: 7200, type: "image"},
    {src: "img_optimizada/PXL_20250729_153851506-min.jpg", x: 1000, y: 7500, type: "image"},
    {src: "https://dani-latre.xyz/media/cubo_agua.mp4", x: 150, y: 700, type: "video"},
    {src: "img_optimizada/aula_cuenca-min.jpg", x: 1000, y: 7500, type: "image"},
    //{src: "img_optimizada/IMG_20250609_043629-min.jpg", x: 4000, y: 8800, type: "image"},
    {src: "img_optimizada/PXL_20250226_171318569.RAW-01.COVER-min.jpg", x: 9000, y: 800, type: "image"},
    {src: "img_optimizada/PXL_20250830_185121345.webp", x: 7000, y: 800, type: "image"},
    {src: "img_optimizada/PXL_20250831_115327149.webp", x: 900, y: 8000, type: "image"},
    {src: "img_optimizada/PXL_20250903_222242520.webp", x: 100, y: 3000, type: "image"},
    //{src: "img_optimizada/PXL_20250905_104807436.webp", x: 400, y: 7000, type: "image"},
    {src: "img_optimizada/PXL_20250903_222442335.webp", x: 600, y: 4000, type: "image"},
    {src: "img_optimizada/PXL_20250913_122707031.webp", x: 800, y: 2000, type: "image"},
    {src: "img_optimizada/PXL_20250909_211818029.webp", x: 2000, y: 15000, type: "image"},
    {src: "https://dani-latre.xyz/media/Fuegos%20.mp4", x: 1000, y: 4500, type: "video"},
    
   
   
    
    //{src: "https://dani-latre.xyz/media/Ruta%20Modelo.mp4", x: 1000, y: 5000, type: "video"},





     //{src: "https://dani-latre.xyz/media/ruta-3d-modelo.mp4", x: 190, y: 8000, type: "video"},


];

// ========== GALERÍA ==========
function initGallery() {
  const imageSpace = document.getElementById("imageSpace");
  if (!imageSpace) return;
  imageSpace.innerHTML = "";

  mediaItems.forEach((item, index) => {
    const container = document.createElement("div");
    container.className = "image-container";

    let media;
    if (item.type === "video") {
      media = document.createElement("video");
      media.src = item.src;
      media.loop = true;
      media.muted = true;
      media.autoplay = true;
      media.controls = false;
    } else {
      media = document.createElement("img");
      media.src = item.src;
      media.loading = "lazy";
    }

    media.dataset.index = index;
    media.draggable = false;
    container.appendChild(media);
    imageSpace.appendChild(container);
  });

  setupModal();
}

// ========== MODAL CON FLECHAS Y CRUZ FLOTANTES ==========
function setupModal() {
  const modal = document.getElementById("mediaModal");
  const modalContainer = document.getElementById("modalMediaContainer");
  if (!modal || !modalContainer) return;

  let currentIndex = 0;

  // Crear controles flotantes
  const controls = document.createElement("div");
  controls.className = "modal-controls";

  const closeBtn = document.createElement("div");
  closeBtn.className = "modal-close";
  closeBtn.innerHTML = `<svg viewBox="0 0 24 24" width="24" height="24" fill="black"><line x1="4" y1="4" x2="20" y2="20" stroke="black" stroke-width="2"/><line x1="20" y1="4" x2="4" y2="20" stroke="black" stroke-width="2"/></svg>`;
  controls.appendChild(closeBtn);

  const prevBtn = document.createElement("div");
  prevBtn.className = "modal-prev";
  prevBtn.innerHTML = `<svg viewBox="0 0 24 24" width="24" height="24" fill="black"><polyline points="15 4 7 12 15 20" stroke="black" stroke-width="2" fill="none"/></svg>`;
  controls.appendChild(prevBtn);

  const nextBtn = document.createElement("div");
  nextBtn.className = "modal-next";
  nextBtn.innerHTML = `<svg viewBox="0 0 24 24" width="24" height="24" fill="black"><polyline points="9 4 17 12 9 20" stroke="black" stroke-width="2" fill="none"/></svg>`;
  controls.appendChild(nextBtn);

  modal.appendChild(controls);

  function showMedia(index) {
    modalContainer.innerHTML = "";
    const item = mediaItems[index];
    let media;
    if (item.type === "video") {
      media = document.createElement("video");
      media.src = item.src;
      media.controls = true;
      media.autoplay = true;
    } else {
      media = document.createElement("img");
      media.src = item.src;
    }
    modalContainer.appendChild(media);
    currentIndex = index;
  }

  // Abrir modal al hacer clic en la galería
  document.querySelectorAll(".image-container img, .image-container video").forEach((media) => {
    media.addEventListener("click", (e) => {
      e.preventDefault();
      e.stopPropagation();
      showMedia(parseInt(media.dataset.index));
      modal.style.display = "flex";
    });
  });

  // Funciones de navegación
  function nextMedia() {
    showMedia((currentIndex + 1) % mediaItems.length);
  }
  function prevMedia() {
    showMedia((currentIndex - 1 + mediaItems.length) % mediaItems.length);
  }
  function closeModal() {
    modal.style.display = "none";
    modalContainer.innerHTML = "";
  }

  // Eventos clic
  closeBtn.addEventListener("click", closeModal);
  nextBtn.addEventListener("click", (e) => { e.stopPropagation(); nextMedia(); });
  prevBtn.addEventListener("click", (e) => { e.stopPropagation(); prevMedia(); });
  modal.addEventListener("click", (e) => { if (e.target === modal) closeModal(); });

  // Navegación con teclado
  document.addEventListener("keydown", (e) => {
    if (modal.style.display !== "flex") return;
    if (e.key === "ArrowRight") nextMedia();
    else if (e.key === "ArrowLeft") prevMedia();
    else if (e.key === "Escape") closeModal();
  });
}

// ========== INICIALIZAR ==========
document.addEventListener("DOMContentLoaded", initGallery);
