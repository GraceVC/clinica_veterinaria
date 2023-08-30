import React, { useState } from 'react';
import axios from 'axios';

function CitaForm() {
  // Estados para almacenar los datos del formulario
  const [fecha, setFecha] = useState('');
  const [hora, setHora] = useState('');
  const [mascota, setMascota] = useState('');
  const [propietario, setPropietario] = useState('');
  const [motivo, setMotivo] = useState('');

  // Función para manejar el envío del formulario
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Enviar los datos a través de una solicitud POST a la API
      await axios.post('/api/citas', {
        fecha, hora, mascota, propietario, motivo
      });
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <h2>Crear Cita</h2>
      <form onSubmit={handleSubmit}>
        {/* Campos de formulario */}
        <div>
          <label htmlFor="fecha">Fecha:</label>
          <input
            type="date"
            id="fecha"
            value={fecha}
            onChange={(e) => setFecha(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="hora">Hora:</label>
          <input
            type="time"
            id="hora"
            value={hora}
            onChange={(e) => setHora(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="mascota">Mascota:</label>
          <input
            type="text"
            id="mascota"
            value={mascota}
            onChange={(e) => setMascota(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="propietario">Propietario:</label>
          <input
            type="text"
            id="propietario"
            value={propietario}
            onChange={(e) => setPropietario(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="motivo">Motivo:</label>
          <textarea
            id="motivo"
            value={motivo}
            onChange={(e) => setMotivo(e.target.value)}
            required
          />
        </div>
        <button type="submit">Crear Cita</button>
      </form>
    </div>
  );
}

export default CitaForm;
