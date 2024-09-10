document.addEventListener('DOMContentLoaded', () => {
  const daySelect = document.getElementById('day-select');
  const scheduleContent = document.getElementById('schedule-content');

  // Objeto con la programación de cada día
  const schedules = {
      'lunes:fe': `
          <h3>Lunes - La Fe y la Esperanza</h3>
          <table class="program-table">
              <tr>
                  <th>Turno</th>
                  <th>Actividad</th>
                  <th>Responsable</th>
              </tr>
              <tr>
                  <td>Mañana</td>
                  <td>Bienvenida</td>
                  <td>Líder de la Institución</td>
              </tr>
              <tr>
                  <td>Mañana</td>
                  <td>Oración 1</td>
                  <td>Voluntario</td>
              </tr>
              <tr>
                  <td>Mañana</td>
                  <td>Alabanza Especial</td>
                  <td>Coro Institucional</td>
              </tr>
              <tr>
                  <td>Mañana</td>
                  <td>Lista de Cantos</td>
                  <td>Director de Música</td>
              </tr>
          </table>
      `,
      'martes:esperanza': `
          <h3>Martes - La Esperanza</h3>
          <table class="program-table">
              <tr>
                  <th>Turno</th>
                  <th>Actividad</th>
                  <th>Responsable</th>
              </tr>
              <tr>
                  <td>Mañana</td>
                  <td>Inauguración</td>
                  <td>Equipo de Organización</td>
              </tr>
              <tr>
                  <td>Tarde</td>
                  <td>Estudio Bíblico</td>
                  <td>Pastor</td>
              </tr>
          </table>
      `,
      'miercoles:oracion': `
          <h3>Miércoles - La Oración</h3>
          <table class="program-table">
              <tr>
                  <th>Turno</th>
                  <th>Actividad</th>
                  <th>Responsable</th>
              </tr>
              <tr>
                  <td>Mañana</td>
                  <td>Oración de Alabanza</td>
                  <td>Grupo de Oración</td>
              </tr>
              <tr>
                  <td>Noche</td>
                  <td>Reflexión Espiritual</td>
                  <td>Miembro de la Comunidad</td>
              </tr>
          </table>
      `,
      'jueves:alabanza': `
          <h3>Jueves - La Alabanza</h3>
          <table class="program-table">
              <tr>
                  <th>Turno</th>
                  <th>Actividad</th>
                  <th>Responsable</th>
              </tr>
              <tr>
                  <td>Mañana</td>
                  <td>Alabanza Matutina</td>
                  <td>Grupo de Alabanza</td>
              </tr>
              <tr>
                  <td>Tarde</td>
                  <td>Cantos Especiales</td>
                  <td>Coro</td>
              </tr>
          </table>
      `,
      'viernes:musica': `
          <h3>Viernes - La Música</h3>
          <table class="program-table">
              <tr>
                  <th>Turno</th>
                  <th>Actividad</th>
                  <th>Responsable</th>
              </tr>
              <tr>
                  <td>Mañana</td>
                  <td>Concierto</td>
                  <td>Director de Música</td>
              </tr>
              <tr>
                  <td>Noche</td>
                  <td>Estudio Musical</td>
                  <td>Instructor de Música</td>
              </tr>
          </table>
      `,
      'sabado:reflexion': `
          <h3>Sábado - La Reflexión</h3>
          <table class="program-table">
              <tr>
                  <th>Turno</th>
                  <th>Actividad</th>
                  <th>Responsable</th>
              </tr>
              <tr>
                  <td>Mañana</td>
                  <td>Reflexión del Día</td>
                  <td>Pastor</td>
              </tr>
              <tr>
                  <td>Tarde</td>
                  <td>Estudio Bíblico</td>
                  <td>Grupo de Estudio</td>
              </tr>
          </table>
      `,
      'domingo:celebracion': `
          <h3>Domingo - La Celebración</h3>
          <table class="program-table">
              <tr>
                  <th>Turno</th>
                  <th>Actividad</th>
                  <th>Responsable</th>
              </tr>
              <tr>
                  <td>Mañana</td>
                  <td>Celebraremos la Semana</td>
                  <td>Equipo de Celebración</td>
              </tr>
              <tr>
                  <td>Tarde</td>
                  <td>Servicio de Clausura</td>
                  <td>Líder de la Institución</td>
              </tr>
          </table>
      `,
  };

  const getDayOfWeekValue = (dayIndex) => {
    const days = ['domingo', 'lunes', 'martes', 'miercoles', 'jueves', 'viernes', 'sabado'];
    return `${days[dayIndex]}:${days[dayIndex]}`;
  };

  const setDefaultDay = () => {
    const today = new Date().getDay(); // Sunday - 0, Monday - 1, ..., Saturday - 6
    const dayValue = getDayOfWeekValue(today);
    if (schedules[dayValue]) {
      daySelect.value = dayValue;
      scheduleContent.innerHTML = schedules[dayValue];
    } else {
      scheduleContent.innerHTML = '<p>Selecciona un día para ver la programación.</p>';
    }
  };

  daySelect.addEventListener('change', (event) => {
    const content = schedules[event.target.value];
    scheduleContent.innerHTML = content || '<p>Selecciona un día para ver la programación.</p>';
  });

  setDefaultDay();
});
