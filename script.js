
    document.addEventListener('DOMContentLoaded', function () {
        const scroll = new SmoothScroll('a[href*="#"]', {
            speed: 800,
            speedAsDuration: true
        });

        // Download Animation
        const downloadBtn = document.querySelector('.btn[href$="Shashank_Yadav_Resume.pdf"]');
        if (downloadBtn) {
            downloadBtn.addEventListener('click', () => {
                downloadBtn.classList.add('downloading');
                setTimeout(() => {
                    downloadBtn.classList.remove('downloading');
                }, 5000); // Reset animation after 2 seconds
            });
        }
    });
