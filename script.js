let pdfjsLib = window['pdfjs-dist/build/pdf'];
if (pdfjsLib) {
    pdfjsLib.GlobalWorkerOptions.workerSrc = 'https://cdnjs.cloudflare.com/ajax/libs/pdf.js/3.4.120/pdf.worker.min.js';
}

const PORTFOLIO_DATA = {
    "Brand-Guidelines": {
        type: "pdf",
        files: [
            "3d Surgical Guidelines.pdf", "Aliopera.pdf", "Barbican.pdf", "Bookipi.pdf",
            "Caldera-Brand-Guidelines.pdf", "Cater-Athens.pdf", "ControlF-Brand-Identity.pdf",
            "David-Tribble.pdf", "Dipole.pdf", "Dnsdad.pdf", "EatCoast.pdf",
            "Enhanced-Radar.pdf", "Events-Solutions.pdf", "Foundry-Berlin.pdf",
            "Friszon.pdf", "Fun domain.pdf", "GFN.pdf", "Garorock.pdf",
            "Glowvida.pdf", "GoCars.pdf", "HPS Wellness.pdf", "HYVE-Branding-Design.pdf",
            "Holiday Matsuri.pdf", "Hosting Site Brand Guidelines.pdf", "IORiver.pdf",
            "InfraCard.pdf", "Jumpp_Brand-Guidelines.pdf", "Kylas.pdf", "LairFrais.pdf",
            "Lorfeo-Brand-Guidelines.pdf", "MascotYou.pdf", "Mipo Design.pdf",
            "Nordic-Attitude.pdf", "Opa.pdf", "Padelsilo.pdf", "Papermans.pdf",
            "PopZaar.pdf", "PuraSweets Brand Guidelines.pdf", "SFA.pdf",
            "Sadbhavna Clinic.pdf", "Skin-Medicals.pdf", "StayCal.pdf",
            "StoryHero.pdf", "Svaya.pdf", "Synthesise.pdf", "Tasky-Brand-Guidelines.pdf",
            "TerraFirm.pdf", "Trraa-Brand-Guidelines.pdf", "VanguardLawyerFirm.pdf",
            "Zen&Steel.pdf", "Minder Brand Guidelines.pdf",
        ]
    },
    "Social-Media-Posts": {
        type: "image",
        files: [
            "AugustaPlasticSurgery-1.png", "AugustaPlasticSurgery-2.png", "BLKResume-0.png",
            "BLKResume-1.png", "BallsClub-1.png", "BallsClub-2.png", "Body-Crush-1.png",
            "Body-Crush-2.png", "Boon.png", "Drop-Box.png", "Dryki-1.png", "Genshare.png",
            "Groke-Pet-1.png", "Groke-Pet-2.png", "Hyve-1.png", "Hyve-2.png",
            "LED-Sign-City.png", "Meine-Studios.png", "NYS-OASAS-1.png", "One-Stop-Pizza-1.png",
            "Simply-Bread.png", "Sports-1.png", "Sports-2.png", "Sports-3.png", "Sports-4.png",
            "Vedson-1.png", "Vedson-2.png", "Vedson-3.png"
        ]
    },
    "Packaging-Design": {
        type: "image",
        files: [
            "Cosmetic-1.png", "Cosmetic-2.png", "DNA-Test-Kit-Packaging.png",
            "Glowvida-2.png", "Glowvida.png", "GoodHydration-Packaging.png",
            "Gulsos-Garlic.png", "Gulsos-Oreganos-Bottle.png", "Gulsos-Oreganos.png",
            "Gulsos-Tomato.png", "JuiceBros-1.png", "JuiceBros-2.png", "JuiceBros-3.png",
            "Paperman-Coffee-Pouch.png", "Poppi-Bear.png", "Poppi-Cherry.png",
            "Poppi-Colada.png", "Poppi-Cream.png", "Poppi-Strawberry.png", "SodaStream.png"
        ]
    },
    "Marketing-Stationary": {
        type: "mixed",
        files: [
            "BillBoard-Outside.png", "Billboard.png", "Book-Cover-Blue.png",
            "Book-Cover.png", "Book.png", "Booth.png", "BusinessCard.png",
            "Chekd.png", "Coffehouse-Menu.png", "Event-Billboard.png",
            "Event-Direction.png", "Event-Tent.png", "Foundry-Berlin.png",
            "Gesswein-Brochure.png", "Instagram post - 1.png", "Kolektif.png",
            "Mobile App.png", "Pen.png", "Post-2.png", "Post.png",
            "Presentation.png", "Reap-Banner.png", "SWAG.png", "Signage-Black.png",
            "Stickers.png", "T-Shirt.png", "Tamoora.png", "The-Second-City.png",
            "IO-RIVER-Marketing-Design-Portfolio.pdf", "Caldera-Spring-Intensive-Flyer-English.pdf"
        ]
    },
    "Email-Templates": {
        type: "pdf",
        files: [
            "Beam-eMail-1.pdf", "Beam-eMail-2.pdf", "Beam-eMail-3.pdf", "Bellroy-eMail.pdf",
            "Birdies-eMail-1.pdf", "Birdies-eMail-2.pdf", "Codecademy-eMail-1.pdf",
            "Codecademy-eMail-2.pdf", "Codecademy-eMail-3.pdf", "GoBrash-eMail.pdf",
            "Greenfield-eMail.pdf", "Jeremy-Lily-eMail.pdf", "JohnRock-eMail.pdf",
            "Magazine-eMail.pdf", "SNS-eMail.pdf", "TaskDuck-eMail.pdf",
            "TravelLove-eMail.pdf", "eCe-eMail.pdf"
        ]
    },
    "Portfolios": {
        type: "pdf",
        files: [
            "Arya-Kagathara-Design-Portfolio.pdf", "BLKResumes.pdf", "Carlton-West.pdf",
            "DA-Studio.pdf", "EatCoast.pdf", "KV-Energy-Revenue.pdf",
            "Medical-Escape.pdf", "Mipo.pdf", "Myotonx.pdf", "NuAI.pdf",
            "OPA.pdf", "One-Stop-Pizza.pdf", "Papermans Coffeehouse.pdf",
            "RMS.pdf", "Recre.pdf", "Roberto Bolle Foundation.pdf", "W3Dart.pdf"
        ]
    }
};

document.addEventListener('DOMContentLoaded', () => {
    const params = new URLSearchParams(window.location.search);
    const categoryKey = params.get('category');
    const folderName = categoryKey ? categoryKey.replace(/-/g, ' ') : '';

    // --- HOME PAGE LOGIC (PDF THUMBS FOR CATEGORY CARDS) ---
    const cardThumbs = document.querySelectorAll('.pdf-thumb-target');
    cardThumbs.forEach(img => {
        const pdfUrl = img.getAttribute('src');
        renderPdfThumbnailAsImage(pdfUrl, img);
    });

    // --- GALLERY PAGE LOGIC ---
    const galleryGrid = document.getElementById('gallery-content');
    if (galleryGrid && categoryKey) {
        console.log("Loading gallery for:", categoryKey);
        renderGallery(categoryKey, folderName);
    }

    // --- PROJECT LIST LOGIC ---
    const projectGrid = document.getElementById('project-list-grid');
    if (projectGrid && categoryKey) {
        console.log("Loading project list for:", categoryKey);
        renderProjectList(categoryKey, folderName);
    }

    // --- LIGHTBOX LOGIC ---
    const lightbox = document.getElementById('lightbox');
    if (lightbox) {
        const lightboxImg = document.getElementById('lightbox-img');
        const closeBtn = document.querySelector('.close-lightbox');

        closeBtn.onclick = () => lightbox.classList.add('hidden');
        lightbox.onclick = (e) => { if (e.target === lightbox) lightbox.classList.add('hidden'); };
    }
});

async function renderPdfThumbnailAsImage(url, imgElement) {
    if (!pdfjsLib) return;

    // Add a loading class or style to indicate processing
    imgElement.style.opacity = '0.5';

    try {
        const loadingTask = pdfjsLib.getDocument(url);
        const pdf = await loadingTask.promise;
        const page = await pdf.getPage(1);

        // Calculate scale to hit a target width (e.g., 800px) for consistent quality
        const unscaledViewport = page.getViewport({ scale: 1 });
        const targetWidth = 800;
        const scale = targetWidth / unscaledViewport.width;
        const viewport = page.getViewport({ scale: scale });

        const canvas = document.createElement('canvas');
        canvas.width = viewport.width;
        canvas.height = Math.min(viewport.height, 1200); // Cap height for hub preview
        const context = canvas.getContext('2d');

        await page.render({ canvasContext: context, viewport: viewport }).promise;

        // Replace image src with canvas data
        imgElement.src = canvas.toDataURL('image/jpeg', 0.82); // Use JPEG for better performance/memory
        imgElement.style.opacity = '1';
    } catch (e) {
        console.error("PDF Thumb failed for " + url, e);
        // Fallback: if it's a PDF, we can't show it in <img>, 
        // maybe show a generic "PDF" icon or keep it semi-transparent
        imgElement.style.backgroundColor = '#1a1a1a';
    }
}

function renderGallery(key, folder) {
    const data = PORTFOLIO_DATA[key];
    const grid = document.getElementById('gallery-content');
    if (!data || !grid) return;

    data.files.forEach(file => {
        const isPdf = file.endsWith('.pdf');
        const item = document.createElement('div');
        item.classList.add('gallery-item');

        if (isPdf) {
            item.innerHTML = `
                <div class="pdf-card-preview" style="height: 300px; position: relative; overflow: hidden;">
                    <canvas class="thumbnail-canvas" data-pdf="${folder}/${file}"></canvas>
                    <div class="loader"></div>
                    <a href="viewer.html?file=${folder}/${file}" class="see-more-btn" style="position: absolute; bottom: 10px; left: 50%; transform: translateX(-50%);">View PDF</a>
                </div>
            `;
            const canvas = item.querySelector('.thumbnail-canvas');
            const pdfUrl = encodeURI(`${folder}/${file}`);
            renderCanvasThumbnail(pdfUrl, canvas, item.querySelector('.loader'));
        } else {
            const imgPath = encodeURI(`${folder}/${file}`);
            item.innerHTML = `<img src="${imgPath}" alt="${file}">`;
            item.onclick = () => openLightbox(imgPath);
        }
        grid.appendChild(item);
    });
}

function renderProjectList(key, folder) {
    const data = PORTFOLIO_DATA[key];
    const grid = document.getElementById('project-list-grid');
    if (!data || !grid) return;

    data.files.forEach(file => {
        const card = document.createElement('div');
        card.classList.add('portfolio-card');
        card.innerHTML = `
            <div class="card-preview">
                <canvas class="thumbnail-canvas"></canvas>
                <div class="loader"></div>
            </div>
            <div class="card-info">
                <h3>${file.replace(/-/g, ' ').replace('.pdf', '')}</h3>
                <a href="viewer.html?file=${encodeURI(folder + '/' + file)}" class="see-more-btn">See More</a>
            </div>
        `;
        const canvas = card.querySelector('.thumbnail-canvas');
        renderCanvasThumbnail(encodeURI(`${folder}/${file}`), canvas, card.querySelector('.loader'));
        grid.appendChild(card);
    });
}

async function renderCanvasThumbnail(url, canvas, loader) {
    if (!pdfjsLib) return;
    try {
        const loadingTask = pdfjsLib.getDocument(url);
        const pdf = await loadingTask.promise;
        const page = await pdf.getPage(1);
        const viewport = page.getViewport({ scale: 1.5 });

        canvas.width = viewport.width;
        canvas.height = Math.min(viewport.height, 2000);
        const context = canvas.getContext('2d');

        await page.render({ canvasContext: context, viewport: viewport }).promise;
        if (loader) loader.classList.add('hidden');
    } catch (e) {
        console.error("Canvas PDF Thumb failed", e);
    }
}

function openLightbox(src) {
    const lightbox = document.getElementById('lightbox');
    const lightboxImg = document.getElementById('lightbox-img');
    lightboxImg.src = src;
    lightbox.classList.remove('hidden');
}
