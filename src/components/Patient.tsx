// Importando la interfaz "Pet" del archivo "../types"
import { Pet } from "../types";

// Importando el componente "PetList" del archivo "./PetList"
import { PetList } from "./PetList";

// Definición de la interfaz "Props" que describe las propiedades que recibe el componente "Patient"
interface Props {
  listPet: Pet[]; // Lista de objetos de tipo "Pet"
  setEditDate: (pet: Pet) => void; // Función para editar una cita
  deleteDatePet: (id: string) => void; // Función para eliminar una cita por su ID
}

// Definición del componente "Patient"
export const Patient = ({ listPet, setEditDate, deleteDatePet }: Props) => {
  return (
    <div className="md:h-screen overflow-y-scroll">
      {listPet.length ? (
        // Si hay elementos en la lista de pacientes (listPet)
        <>
          <h2 className="font-black text-3xl  text-center">
            Listado de pacientes
          </h2>
          <p className="text-xl mt-5 mb-10 text-center">
            Administra tus{" "}
            <span className="text-zinc-600 font-bold "> pacientes y citas</span>
          </p>
          {/* Mapeo de la lista de pacientes para generar componentes "PetList" */}
          {listPet.map(date => (
            <PetList date={date} key={date.id} setEditDate={setEditDate} deleteDatePet={deleteDatePet} />
          ))}
        </>
      ) : (
        // Si la lista de pacientes está vacía
        <>
          <h2 className="font-black text-3xl  text-center">
            Listado de pacientes
          </h2>
          <p className="text-xl mt-5 mb-10 text-center">
            No hay{" "}
            <span className="text-zinc-600 font-bold ">
              {" "}
              pacientes ni citas
            </span>
          </p>
        </>
      )}
    </div>
  );
};

