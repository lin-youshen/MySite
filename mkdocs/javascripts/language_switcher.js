document.addEventListener('DOMContentLoaded', function () {
    const switcher = document.getElementById('language-switcher');
    if (switcher) {
        switcher.addEventListener('change', function () {
            const selectedLanguage = switcher.value;
            window.location.href = selectedLanguage;
        });
    }
});