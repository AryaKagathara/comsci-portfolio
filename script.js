const pdfjsLib = window['pdfjs-dist/build/pdf'];
pdfjsLib.GlobalWorkerOptions.workerSrc = 'https://cdnjs.cloudflare.com/ajax/libs/pdf.js/3.4.120/pdf.worker.min.js';

document.addEventListener('DOMContentLoaded', () => {
    const cards = document.querySelectorAll('.portfolio-card');

    // --- PDF THUMBNAIL LOGIC ---
    async function renderThumbnail(card) {
        const pdfUrl = card.dataset.pdf;
        const canvas = card.querySelector('.thumbnail-canvas');
        const loader = card.querySelector('.loader');

        try {
            const loadingTask = pdfjsLib.getDocument(pdfUrl);
            const pdf = await loadingTask.promise;
            const page = await pdf.getPage(1);

            // Calculate scale to fit width 100%
            const unscaledViewport = page.getViewport({ scale: 1 });
            const containerWidth = card.querySelector('.card-preview').clientWidth || 400;
            const scale = (containerWidth / unscaledViewport.width) * 2; // HD multiplier
            
            const viewport = page.getViewport({ scale: scale });
            const context = canvas.getContext('2d');
            
            // Set canvas size (we want top part, so we height-limit it)
            canvas.width = viewport.width;
            canvas.height = Math.min(viewport.height, 2000); 

            const renderContext = {
                canvasContext: context,
                viewport: viewport
            };
            
            await page.render(renderContext).promise;
            loader.classList.add('hidden');
        } catch (error) {
            console.error('Error rendering thumbnail:', error);
            loader.innerHTML = '<span style="color: grey; font-size: 12px;">Preview Unavailable</span>';
        }
    }

    // Initialize thumbnails for all cards
    cards.forEach(card => renderThumbnail(card));
});
