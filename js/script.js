document.addEventListener('DOMContentLoaded', () => {
    const loadingScreen = document.getElementById('loading-screen');
    const mainContent = document.getElementById('main-content');
    const scrollSections = document.querySelectorAll('.scroll-section');
    const loginButton = document.getElementById('login-button');
    const discordLoginOverlay = document.getElementById('discord-login-overlay');
    const discordOAuthRedirect = document.getElementById('discord-oauth-redirect');
    const discordMemberCount = document.getElementById('discord-member-count');

    // Simulación de carga (reemplazar con la lógica real)
    setTimeout(() => {
        loadingScreen.style.display = 'none';
        mainContent.style.display = 'block';
        setTimeout(() => {
            mainContent.style.opacity = 1;
            discordLoginOverlay.style.display = 'flex'; // Mostrar la superposición de inicio de sesión
        }, 50);
    }, 2500); // Simula 2.5 segundos de carga

    // Redirección a la autorización de Discord (deberás configurar la URL correcta)
    discordOAuthRedirect.addEventListener('click', () => {
        window.location.href = 'TU_URL_DE_AUTORIZACION_DE_DISCORD';
        // Ejemplo: 'https://discord.com/oauth2/authorize?client_id=YOUR_CLIENT_ID&redirect_uri=YOUR_REDIRECT_URI&response_type=code&scope=identify%20guilds.join';
    });

    // Lógica para mostrar/ocultar la superposición después del inicio de sesión (necesita backend)
    // Aquí deberías verificar si el usuario ya está logueado y ocultar la superposición si es así.

    // Función para mostrar el indicador de carga
    function showLoadingIndicator(section) {
        const indicator = section.querySelector('.loading-indicator');
        if (indicator)
