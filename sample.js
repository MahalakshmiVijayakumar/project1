document.addEventListener("DOMContentLoaded", function() {
    const icon = document.getElementById('menu-icon');
    const modal = document.getElementById('menu-modal');
    const closeBtn = document.querySelector('.close');

    icon.addEventListener('click', function() {
        modal.style.display = "block";
    });

    closeBtn.addEventListener('click', function() {
        modal.style.display = "none";
    });

    window.addEventListener('click', function(event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    });

    // Function to close the modal when screen size is >= 700px
    function closeModalOnResize() {
        if (window.innerWidth >= 700) {
            modal.style.display = "none";
        }
    }

    // Close modal initially on page load if screen size is >= 700px
    closeModalOnResize();

    // Close modal on window resize
    window.addEventListener('resize', closeModalOnResize);
});
function Mypdf() {
    window.open('mypdf/sample.pdf'); 
}
