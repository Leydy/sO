document.addEventListener('DOMContentLoaded', () => {
    const daySelect = document.getElementById('day-select');
    const scheduleContent = document.getElementById('schedule-content');

    const schedules = {
        'lunes:fe': `
            <div class="post-it">
                <h2>Lunes - Un Amigo siempre presente</h2>
                <h3>Turno Mañana</h3>
                <table>
                    <tr><th>E.P. Ujieres</th><td>E.P. de Administración</td></tr>
                    <tr><th>Fecha</th><td>Lunes 16</td></tr>
                    <tr><th>Espacio de Alabanzas</th><td>Coral UPeU</td></tr>
                    <tr><th>Bienvenida</th><td>Daniel Pari / Katerine Condori</td></tr>
                    <tr><th>Oración</th><td>Alexander De La Cruz</td></tr>
                    <tr><th>Premiación</th><td>Sara Pazo</td></tr>
                    <tr><th>Alabanza Musical</th><td>Ana Tito</td></tr>
                    <tr><th>Bautismo</th><td>Sandro Panduro / David Mamani</td></tr>
                    <tr><th>Canto de Despedida</th><td>Coral UPeU</td></tr>
                </table>
                <h3>Turno Tarde</h3>
                <table>
                    <tr><th>E.P. Ujieres</th><td>E.P. de Contabilidad</td></tr>
                    <tr><th>Fecha</th><td>Lunes 16</td></tr>
                    <tr><th>Espacio de Alabanzas</th><td>Coral UPeU</td></tr>
                    <tr><th>Bienvenida</th><td>Sarai Cuti / Kevin Hilasaca</td></tr>
                    <tr><th>Oración</th><td>Edgar Mamani</td></tr>
                    <tr><th>Premiación</th><td>Sara Pazo</td></tr>
                    <tr><th>Alabanza Musical</th><td>Alejandro Apaza</td></tr>
                    <tr><th>Bautismo</th><td>Sandro Panduro / David Mamani</td></tr>
                    <tr><th>Canto de Despedida</th><td>Coral UPeU</td></tr>
                </table>
            </div>
        `,
        'martes:esperanza': `
            <div class="post-it">
                <h2>Martes - Un Amigo que capacita</h2>
                <h3>Turno Mañana</h3>
                <table>
                    <tr><th>E.P. Ujieres</th><td>E.P. de Enfermería / E.P. de Nutrición</td></tr>
                    <tr><th>Fecha</th><td>Martes 17</td></tr>
                    <tr><th>Espacio de Alabanzas</th><td>Coral UPeU</td></tr>
                    <tr><th>Bienvenida</th><td>Yojhan Ticona / Lucero Flores</td></tr>
                    <tr><th>Oración</th><td>Ruth Mamani</td></tr>
                    <tr><th>Premiación</th><td>Sara Pazo</td></tr>
                    <tr><th>Alabanza Musical</th><td>Blanca Condori</td></tr>
                    <tr><th>Bautismo</th><td>Sandro Panduro / Wilberth Maluquish</td></tr>
                    <tr><th>Canto de Despedida</th><td>Coral UPeU</td></tr>
                </table>
                <h3>Turno Tarde</h3>
                <table>
                    <tr><th>E.P. Ujieres</th><td>Gestión del Talento Humano / Bienestar Universitario</td></tr>
                    <tr><th>Fecha</th><td>Martes 17</td></tr>
                    <tr><th>Espacio de Alabanzas</th><td>Coral UPeU</td></tr>
                    <tr><th>Bienvenida</th><td>Daniel Pari / Katerine Condori</td></tr>
                    <tr><th>Oración</th><td>Raquel Antesana</td></tr>
                    <tr><th>Premiación</th><td>Sara Pazo</td></tr>
                    <tr><th>Alabanza Musical</th><td>Saraí Chávez</td></tr>
                    <tr><th>Bautismo</th><td>Sandro Panduro / Denis Julián</td></tr>
                    <tr><th>Canto de Despedida</th><td>Coral UPeU</td></tr>
                </table>
            </div>
        `,
        'miercoles:oracion': `
            <div class="post-it">
                <h2>Miércoles - Un Amigo que puede transformar tu vida</h2>
                <h3>Turno Mañana</h3>
                <table>
                    <tr><th>E.P. Ujieres</th><td>E.P. de Ing. Ambiental / E.P. de INDALI</td></tr>
                    <tr><th>Fecha</th><td>Miércoles 18</td></tr>
                    <tr><th>Espacio de Alabanzas</th><td>Coral UPeU</td></tr>
                    <tr><th>Bienvenida</th><td>Kevin Hilasaca / Mileydy Condori</td></tr>
                    <tr><th>Oración</th><td>Eduardo Vigo</td></tr>
                    <tr><th>Premiación</th><td>Sara Pazo</td></tr>
                    <tr><th>Alabanza Musical</th><td>Vocal Confía</td></tr>
                    <tr><th>Bautismo</th><td>Sandro Panduro / Elías Hurtado</td></tr>
                    <tr><th>Canto de Despedida</th><td>Coral UPeU</td></tr>
                </table>
                <h3>Turno Tarde</h3>
                <table>
                    <tr><th>E.P. Ujieres</th><td>E.P. de Ing. Civil</td></tr>
                    <tr><th>Fecha</th><td>Miércoles 18</td></tr>
                    <tr><th>Espacio de Alabanzas</th><td>Coral UPeU</td></tr>
                    <tr><th>Bienvenida</th><td>Yojhan Ticona / Lucero Flores</td></tr>
                    <tr><th>Oración</th><td>Juan Almirón</td></tr>
                    <tr><th>Premiación</th><td>Sara Pazo</td></tr>
                    <tr><th>Alabanza Musical</th><td>Amigos de Jesús</td></tr>
                    <tr><th>Bautismo</th><td>Sandro Panduro / Jack Brañez</td></tr>
                    <tr><th>Canto de Despedida</th><td>Coral UPeU</td></tr>
                </table>
            </div>
        `,
        'jueves:alabanza': `
            <div class="post-it">
                <h2>Jueves -  Un Amigo que te lleva a la salvación</h2>
                <h3>Turno Mañana</h3>
                <table>
                    <tr><th>E.P. Ujieres</th><td>ISTAT / E.P. de Ing. de Sistemas</td></tr>
                    <tr><th>Fecha</th><td>Jueves 19</td></tr>
                    <tr><th>Espacio de Alabanzas</th><td>Coral UPeU</td></tr>
                    <tr><th>Bienvenida</th><td>Kevin Hilasaca / Mileydy Condori</td></tr>
                    <tr><th>Oración</th><td>Marizol Chambi</td></tr>
                    <tr><th>Premiación</th><td>Sara Pazo</td></tr>
                    <tr><th>Alabanza Musical</th><td>Katerin Condori</td></tr>
                    <tr><th>Bautismo</th><td>Sandro Panduro / Grower Maguiña</td></tr>
                    <tr><th>Canto de Despedida</th><td>Coral UPeU</td></tr>
                </table>
                <h3>Turno Tarde</h3>
                <table>
                    <tr><th>E.P. Ujieres</th><td>E.P. de Arquitectura</td></tr>
                    <tr><th>Fecha</th><td>Jueves 19</td></tr>
                    <tr><th>Espacio de Alabanzas</th><td>Coral UPeU</td></tr>
                    <tr><th>Bienvenida</th><td>Daniel Pari / Katerine Condori</td></tr>
                    <tr><th>Oración</th><td>Josué Huaycani</td></tr>
                    <tr><th>Premiación</th><td>Sara Pazo</td></tr>
                    <tr><th>Alabanza Musical</th><td>Josué Mantilla</td></tr>
                    <tr><th>Bautismo</th><td>Sandro Panduro / Grower Maguiña</td></tr>
                    <tr><th>Canto de Despedida</th><td>Coral UPeU</td></tr>
                </table>
            </div>
        `,
        'viernes:musica': `
            <div class="post-it">
                <h2>Viernes - Un Amigo que no quiere dejarte</h2>
                <h3>Turno Mañana</h3>
                <table>
                    <tr><th>E.P. Ujieres</th><td>E.P. de Psicología</td></tr>
                    <tr><th>Fecha</th><td>Viernes 20</td></tr>
                    <tr><th>Espacio de Alabanzas</th><td>Coral UPeU</td></tr>
                    <tr><th>Bienvenida</th><td>Yojhan Ticona / Lucero Flores</td></tr>
                    <tr><th>Oración</th><td>Germán Mamani</td></tr>
                    <tr><th>Premiación</th><td>Sara Pazo</td></tr>
                    <tr><th>Alabanza Musical</th><td>Génesis Coaquira</td></tr>
                    <tr><th>Bautismo</th><td>Sandro Panduro / Faimes Palacios</td></tr>
                    <tr><th>Canto de Despedida</th><td>Coral UPeU</td></tr>
                </table>
            </div>
        `
    };
  
    // Seleccionar el día actual
    const today = new Date();
    const dayMap = {
        1: 'lunes:fe',
        2: 'martes:esperanza',
        3: 'miercoles:oracion',
        4: 'jueves:alabanza',
        5: 'viernes:musica'
    };
    const todayValue = dayMap[today.getDay()];
    if (todayValue && schedules[todayValue]) {
      daySelect.value = todayValue;
      scheduleContent.innerHTML = schedules[todayValue];
    } else {
      scheduleContent.innerHTML = '<p>Programación no disponible para hoy.</p>';
    }
  
    daySelect.addEventListener('change', (event) => {
        const content = schedules[event.target.value];
        scheduleContent.innerHTML = content || '<p>Selecciona un día para ver la programación.</p>';
    });
});