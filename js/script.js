document.addEventListener('DOMContentLoaded', () => {
    const mainContent = document.getElementById('main-content');
    const scrollSections = document.querySelectorAll('.scroll-section');
    const loginButton = document.getElementById('login-button');
    const discordLoginOverlay = document.getElementById('discord-login-overlay');
    const discordOAuthRedirect = document.getElementById('discord-oauth-redirect');
    const discordMemberCount = document.getElementById('discord-member-count');

    // Mostrar el contenido principal inicialmente
    setTimeout(() => {
        mainContent.classList.add('loaded');
        discordLoginOverlay.style.display = 'flex'; // Mostrar la superposición de inicio de sesión
    }, 50); // Un pequeño retraso para la transición de opacidad

    // Función para mostrar el indicador de carga
    function showLoadingIndicator(section) {
        const indicator = section.querySelector('.loading-indicator');
        if (indicator) {
            indicator.innerHTML = '<div class="loading-spinner"></div>'; // Usar el spinner
        }
        section.classList.add('loading'); // Agregar clase 'loading' a la sección
    }

    // Función para ocultar el indicador de carga
    function hideLoadingIndicator(section) {
        const indicator = section.querySelector('.loading-indicator');
        if (indicator) {
            indicator.innerHTML = 'Cargando...'; // Restaurar texto por defecto (opcional)
        }
        section.classList.remove('loading'); // Remover clase 'loading'
        section.classList.add('loaded'); // Marcar como cargado para la animación
    }

    // Simulación de carga al hacer scroll (reemplazar con lógica real)
    function handleScroll() {
        scrollSections.forEach(section => {
            const rect = section.getBounding
