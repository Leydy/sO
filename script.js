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
                            <td>Juan Pérez</td>
                            <td>12/09/2024</td>
                            <td>Grupo Alabanza</td>
                            <td>María López</td>
                            <td>Pastor Smith</td>
                            <td>Premio a la Fe</td>
                            <td>Banda Esperanza</td>
                            <td>La Salvación</td>
                            <td>Carlos Soto</td>
                            <td>Hasta Pronto</td>
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
                            <td>Lucía González</td>
                            <td>12/09/2024</td>
                            <td>Coral Alabanza</td>
                            <td>Pedro Gómez</td>
                            <td>Pastor Morales</td>
                            <td>Premio al Valor</td>
                            <td>Coro Esperanza</td>
                            <td>La Gracia Divina</td>
                            <td>Jorge Ramírez</td>
                            <td>Hasta Mañana</td>
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
                                    <td>Ana Torres</td>
                                    <td>13/09/2024</td>
                                    <td>Coral Esperanza</td>
                                    <td>Pedro Gómez</td>
                                    <td>Sra. Martínez</td>
                                    <td>Premio al Esfuerzo</td>
                                    <td>Coral Esperanza</td>
                                    <td>Esperanza y Fe</td>
                                    <td>Lucía Fernández</td>
                                    <td>Hasta la Próxima</td>
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
                                    <td>José López</td>
                                    <td>13/09/2024</td>
                                    <td>Ministerio de Alabanza</td>
                                    <td>Carlos Ruiz</td>
                                    <td>Pastor Gómez</td>
                                    <td>Premio a la Dedicación</td>
                                    <td>Banda Esperanza</td>
                                    <td>La Fe Inquebrantable</td>
                                    <td>María Gómez</td>
                                    <td>Hasta Siempre</td>
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
                                    <td>Carlos Ruiz</td>
                                    <td>14/09/2024</td>
                                    <td>Ministerio de Alabanza</td>
                                    <td>Esther Pérez</td>
                                    <td>Pastor Morales</td>
                                    <td>Reconocimiento Especial</td>
                                    <td>Grupo Musical</td>
                                    <td>Oración y Esperanza</td>
                                    <td>María Gómez</td>
                                    <td>Adiós</td>
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
                                    <td>Lucía Torres</td>
                                    <td>14/09/2024</td>
                                    <td>Orquesta Sinfónica</td>
                                    <td>Iván Ramírez</td>
                                    <td>Pastor Gómez</td>
                                    <td>Premio a la Fe</td>
                                    <td>Orquesta Sinfónica</td>
                                    <td>Alabanza y Gloria</td>
                                    <td>José Martínez</td>
                                    <td>Hasta Mañana</td>
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
                                    <td>Laura Morales</td>
                                    <td>15/09/2024</td>
                                    <td>Cantata</td>
                                    <td>Iván Ramírez</td>
                                    <td>Pastor Gómez</td>
                                    <td>Premio a la Dedicación</td>
                                    <td>Orquesta Sinfónica</td>
                                    <td>Alabanza y Gloria</td>
                                    <td>José Martínez</td>
                                    <td>Hasta Siempre</td>
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
                                    <td>José Ramírez</td>
                                    <td>15/09/2024</td>
                                    <td>Banda Musical</td>
                                    <td>Esther Ruiz</td>
                                    <td>Pastor Smith</td>
                                    <td>Reconocimiento a la Devoción</td>
                                    <td>Banda Musical</td>
                                    <td>Fe y Esperanza</td>
                                    <td>Laura Torres</td>
                                    <td>Hasta la Próxima</td>
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
                                    <td>Rosa Hernández</td>
                                    <td>16/09/2024</td>
                                    <td>Festival de Música</td>
                                    <td>David Ruiz</td>
                                    <td>Sra. López</td>
                                    <td>Premio de Reconocimiento</td>
                                    <td>Banda de Música</td>
                                    <td>Cantos de Inspiración</td>
                                    <td>Esteban Pérez</td>
                                    <td>Adiós y Bendiciones</td>
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
                                    <td>Jorge Gómez</td>
                                    <td>16/09/2024</td>
                                    <td>Grupo de Cuerdas</td>
                                    <td>María Ramírez</td>
                                    <td>Pastor Morales</td>
                                    <td>Premio al Espíritu</td>
                                    <td>Coral Sinfónica</td>
                                    <td>La Música y la Fe</td>
                                    <td>Claudia Ruiz</td>
                                    <td>Hasta Pronto</td>
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
