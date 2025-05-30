<script>
        document.addEventListener('DOMContentLoaded', () => {
            const discordMemberCount = document.getElementById('discord-member-count');
            async function fetchDiscordMemberCount() {
                try {
                    discordMemberCount.textContent = '1234'; // Reemplaza con tu lógica real
                } catch (error) {
                    console.error('Error al obtener el número de miembros de Discord:', error);
                    discordMemberCount.textContent = 'Error';
                }
            }
            fetchDiscordMemberCount();
            document.getElementById('main-content').style.opacity = 1; // Mostrar el contenido
        });
    </script>
