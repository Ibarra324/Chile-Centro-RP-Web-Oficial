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
            const rect = section.getBoundingClientRect();
            const isVisible = (rect.top < window.innerHeight * 0.8 && rect.bottom > window.innerHeight * 0.2);

            if (isVisible && !section.classList.contains('loaded') && !section.classList.contains('loading')) {
                showLoadingIndicator(section);
                // Simular carga de contenido
                setTimeout(() => {
                    hideLoadingIndicator(section);
                }, 1500); // Simula 1.5 segundos de carga
            }
        });
    }

    window.addEventListener('scroll', handleScroll);

    // Inicializar la animación de los elementos visibles al cargar la página
    scrollSections.forEach(section => {
        const rect = section.getBoundingClientRect();
        if (rect.top < window.innerHeight) {
            setTimeout(() => {
                section.classList.add('fade-in');
                section.classList.add('loaded');
            }, 500);
        }
    });

    // Función para obtener el número de miembros de Discord (necesita backend)
    async function fetchDiscordMemberCount() {
        try {
            // ... tu código para obtener el número de miembros ...
            discordMemberCount.textContent = '1234'; // Reemplaza con el valor real
        } catch (error) {
            console.error('Error al obtener el número de miembros de Discord:', error);
            discordMemberCount.textContent = 'Error';
        }
    }

    fetchDiscordMemberCount();

    // Redirección a la autorización de Discord (deberás configurar la URL correcta)
    discordOAuthRedirect.addEventListener('click', () => {
        const clientId = 'TU_CLIENT_ID_DE_DISCORD'; // Reemplaza con el ID de tu aplicación
        const redirectUri = encodeURIComponent('https://tu-sitio-web.com/callback'); // Reemplaza con tu URL de redireccionamiento
        const scope = encodeURIComponent('identify guilds.join'); // Reemplaza con los permisos que necesites

        const authorizationUrl = `https://discord.com/oauth2/authorize?client_id=${clientId}&redirect_uri=${redirectUri}&response_type=code&scope=${scope}`;
        window.location.href = authorizationUrl;
    });
});
