document.addEventListener('DOMContentLoaded', () => {
    const daySelect = document.getElementById('day-select');
    const scheduleContent = document.getElementById('schedule-content');

    const schedules = {
        'lunes:fe': `<h3>Turno Mañana</h3>
                    <table class="program-table">
                        <tr>
                            <th>E.P. Ujieres</th>
                            <th>Fecha</th>
                            <th>Espacio de Alabanzas</th>
                            <th>Bienvenida</th>
                            <th>Oración</th>
                            <th>Premiación</th>
                            <th>Alabanza Musical</th>
                            <th>Tema</th>
                            <th>Bautismo</th>
                            <th>Canto de Despedida</th>
                        </tr>
                        <tr>
                            <td>FCE</td>
                            <td>Lunes 16</td>
                            <td>Coral UPeU</td>
                            <td>Daniel Pari / Katerine Condori</td>
                            <td>Alexander De La Cruz</td>
                            <td>Sara Pazo</td>
                            <td>Ana Tito</td>
                            <td>"Un Amigo siempre presente"</td>
                            <td>Sandro Panduro / David Mamani</td>
                            <td>Coral UPeU</td>
                        </tr>
                    </table>
                    <h3>Turno Tarde</h3>
                    <table class="program-table">
                        <tr>
                            <th>E.P. Ujieres</th>
                            <th>Fecha</th>
                            <th>Espacio de Alabanzas</th>
                            <th>Bienvenida</th>
                            <th>Oración</th>
                            <th>Premiación</th>
                            <th>Alabanza Musical</th>
                            <th>Tema</th>
                            <th>Bautismo</th>
                            <th>Canto de Despedida</th>
                        </tr>
                        <tr>
                            <td>FCE</td>
                            <td>Lunes 16</td>
                            <td>Coral UPeU</td>
                            <td>Sarai Cuti / Kevin Hilasaca</td>
                            <td>Edgar Mamani</td>
                            <td>Sara Pazo</td>
                            <td>Alejandro Apaza</td>
                            <td>"Un Amigo siempre presente"</td>
                            <td>Sandro Panduro / David Mamani </td>
                            <td>Coral UPeU</td>
                        </tr>
                    </table>`,
        'martes:esperanza': `<h3>Turno Mañana</h3>
                            <table class="program-table">
                                <tr>
                                    <th>E.P. Ujieres</th>
                                    <th>Fecha</th>
                                    <th>Espacio de Alabanzas</th>
                                    <th>Bienvenida</th>
                                    <th>Oración</th>
                                    <th>Premiación</th>
                                    <th>Alabanza Musical</th>
                                    <th>Tema</th>
                                    <th>Bautismo</th>
                                    <th>Canto de Despedida</th>
                                </tr>
                                <tr>
                                    <td>FCS</td>
                                    <td>Martes 17</td>
                                    <td>Coral UPeU</td>
                                    <td>Yojhan Ticona / Lucero Flores</td>
                                    <td>Ruth Mamani</td>
                                    <td>Sara Pazo</td>
                                    <td>Blanca Condori</td>
                                    <td>"Un Amigo que te capacita"</td>
                                    <td>Sandro Panduro / Wilberth Maluquish</td>
                                    <td>Coral UPeU</td>
                                </tr>
                            </table>
                            <h3>Turno Tarde</h3>
                            <table class="program-table">
                                <tr>
                                    <th>E.P. Ujieres</th>
                                    <th>Fecha</th>
                                    <th>Espacio de Alabanzas</th>
                                    <th>Bienvenida</th>
                                    <th>Oración</th>
                                    <th>Premiación</th>
                                    <th>Alabanza Musical</th>
                                    <th>Tema</th>
                                    <th>Bautismo</th>
                                    <th>Canto de Despedida</th>
                                </tr>
                                <tr>
                                    <td>FCS</td>
                                    <td>Martes 17</td>
                                    <td>Coral UPeU</td>
                                    <td>Daniel Pari / Katerine Condori </td>
                                    <td>Raquel Antesana</td>
                                    <td>Sara Pazo</td>
                                    <td>Saraí Chávez</td>
                                    <td>"Un Amigo que te capacita"</td>
                                    <td>Sandro Panduro / Denis Julián</td>
                                    <td>Coral UPeU</td>
                                </tr>
                            </table>`,
        'miercoles:oracion': `<h3>Turno Mañana</h3>
                            <table class="program-table">
                                <tr>
                                    <th>E.P. Ujieres</th>
                                    <th>Fecha</th>
                                    <th>Espacio de Alabanzas</th>
                                    <th>Bienvenida</th>
                                    <th>Oración</th>
                                    <th>Premiación</th>
                                    <th>Alabanza Musical</th>
                                    <th>Tema</th>
                                    <th>Bautismo</th>
                                    <th>Canto de Despedida</th>
                                </tr>
                                <tr>
                                    <td>FIA</td>
                                    <td>Miércoles 18</td>
                                    <td>Coral UPeU</td>
                                    <td>Kevin Hilasaca / Mileydy Condori</td>
                                    <td>Eduardo Vigo</td>
                                    <td>Sara Pazo</td>
                                    <td>Vocal Confía</td>
                                    <td>"Un Amigo que puede trasformar tu vida"</td>
                                    <td>Sandro Panduro / Elías Hurtado</td>
                                    <td>Coral UPeU</td>
                                </tr>
                            </table>
                            <h3>Turno Tarde</h3>
                            <table class="program-table">
                                <tr>
                                    <th>E.P. Ujieres</th>
                                    <th>Fecha</th>
                                    <th>Espacio de Alabanzas</th>
                                    <th>Bienvenida</th>
                                    <th>Oración</th>
                                    <th>Premiación</th>
                                    <th>Alabanza Musical</th>
                                    <th>Tema</th>
                                    <th>Bautismo</th>
                                    <th>Canto de Despedida</th>
                                </tr>
                                <tr>
                                    <td>FIA</td>
                                    <td>Miércoles 18</td>
                                    <td>Coral UPeU</td>
                                    <td>Yojhan Ticona / Lucero Flores</td>
                                    <td>Juan Almirón</td>
                                    <td>Sara Pazo</td>
                                    <td>Amigos de Jesús</td>
                                    <td>"Un Amigo que puede trasformar tu vida"</td>
                                    <td>Sandro Panduro / Jack Brañez </td>
                                    <td>Coral UPeU</td>
                                </tr>
                            </table>`,
        'jueves:alabanza': `<h3>Turno Mañana</h3>
                            <table class="program-table">
                                <tr>
                                    <th>E.P. Ujieres</th>
                                    <th>Fecha</th>
                                    <th>Espacio de Alabanzas</th>
                                    <th>Bienvenida</th>
                                    <th>Oración</th>
                                    <th>Premiación</th>
                                    <th>Alabanza Musical</th>
                                    <th>Tema</th>
                                    <th>Bautismo</th>
                                    <th>Canto de Despedida</th>
                                </tr>
                                <tr>
                                    <td>ISTAT</td>
                                    <td>Jueves 19</td>
                                    <td>Coral UPeU</td>
                                    <td>Kevin Hilasaca / Mileydy Condori</td>
                                    <td>Marizol Chambi</td>
                                    <td>Sara Pazo</td>
                                    <td>Katerin Condori</td>
                                    <td>"Un Amigo que te lleva a la salvación"</td>
                                    <td>Sandro Panduro / Grower Maguiña</td>
                                    <td>Coral UPeU</td>
                                </tr>
                            </table>
                            <h3>Turno Tarde</h3>
                            <table class="program-table">
                                <tr>
                                    <th>E.P. Ujieres</th>
                                    <th>Fecha</th>
                                    <th>Espacio de Alabanzas</th>
                                    <th>Bienvenida</th>
                                    <th>Oración</th>
                                    <th>Premiación</th>
                                    <th>Alabanza Musical</th>
                                    <th>Tema</th>
                                    <th>Bautismo</th>
                                    <th>Canto de Despedida</th>
                                </tr>
                                <tr>
                                    <td>ISTAT</td>
                                    <td>Jueves 19</td>
                                    <td>Coral UPeU</td>
                                    <td>Daniel Pari / Katerine Condori</td>
                                    <td>Josué Huaycani</td>
                                    <td>Sara Pazo</td>
                                    <td>Josué Mantilla</td>
                                    <td>"Un Amigo que te lleva a la salvación"</td>
                                    <td>Sandro Panduro / Grower Maguiña</td>
                                    <td>Coral UPeU</td>
                                </tr>
                            </table>`,
        'viernes:musica': `<h3>Turno Mañana</h3>
                            <table class="program-table">
                                <tr>
                                    <th>E.P. Ujieres</th>
                                    <th>Fecha</th>
                                    <th>Espacio de Alabanzas</th>
                                    <th>Bienvenida</th>
                                    <th>Oración</th>
                                    <th>Premiación</th>
                                    <th>Alabanza Musical</th>
                                    <th>Tema</th>
                                    <th>Bautismo</th>
                                    <th>Canto de Despedida</th>
                                </tr>
                                <tr>
                                    <td>FACIHED</td>
                                    <td>Viernes 20</td>
                                    <td>Coral UPeU</td>
                                    <td>Yojhan Ticona / Lucero Flores</td>
                                    <td>Germán Mamani</td>
                                    <td>Sara Pazo</td>
                                    <td>Génesis Coaquira</td>
                                    <td>"Un amigo que no quiere dejarte"</td>
                                    <td>Sandro Panduro / Faimes Palacios</td>
                                    <td>Coral UPeU</td>
                                </tr>
                            </table>`
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