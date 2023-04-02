//Only open one <details> HTML element at a time
if (document.querySelector('details')) {
    const details = document.querySelectorAll('details');
    details.forEach((targetDetail) => {
        targetDetail.addEventListener("click", () => {
            details.forEach((detail) => {
                if (detail !== targetDetail) {
                    detail.removeAttribute("open");
                }
            });
        });
    });
}