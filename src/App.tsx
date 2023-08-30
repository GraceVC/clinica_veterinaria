import { Header } from './components/Header'
import { Patient } from './components/Patient';
import { PetForm } from './components/PetForm';
import { useDatePet } from './hooks/useDatePet'

function App() {
  // Desestructura las funciones proporcionadas por el hook useDatePet para su uso 
  const { registerPet, listPet, editDate, setEditDate, deleteDatePet, editDatePet } = useDatePet();

  return (
    <div className="container mx-auto">
      {/* Componente de encabezado */}
      <Header />

      {/* Contenedor principal con disposición de columnas en dispositivos pequeños */}
      <div className="flex flex-col sm:flex-row">

        {/* Formulario de registro de mascotas */}
        <div className="ml-8 mr-3 sm:w-1/2">
          <PetForm
            registerPet={registerPet}
            editDate={editDate}
            editDatePet={editDatePet}
            setEditDate={setEditDate}
          />
        </div>

        {/* Lista de pacientes o mascotas registradas */}
        <div className="ml-8 mr-3 sm:w-1/2">
          <Patient
            listPet={listPet}
            setEditDate={setEditDate}
            deleteDatePet={deleteDatePet}
          />
        </div>

      </div>
    </div>
  )
}

export default App
