document.addEventListener('DOMContentLoaded', function() {
    document.body.classList.add('zooming-in');

    setTimeout(() => {
        document.body.classList.remove('zooming-in');
    }, 600);
});
