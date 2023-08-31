// Importando el módulo "Sequelize" desde la librería "sequelize"
import { Sequelize } from "sequelize";

// Creando una nueva instancia de Sequelize para la conexión a la base de datos
const sequelize = new Sequelize("db_pets", "postgres", "admin", {
  host: "localhost", // Host de la base de datos
  dialect: "postgres", // Tipo de base de datos (PostgreSQL en este caso)
});

// Definiendo una función asincrónica "conexion" para establecer la conexión y sincronización con la base de datos
const conexion = async () => {
  try {
    // Intentando autenticarse en la base de datos
    await sequelize.authenticate();

    // Intentando sincronizar los modelos con la base de datos
    await sequelize.sync();

    console.log("Connection has been established successfully.");
  } catch (error) {
    console.error("Unable to connect to the database:", error);
  }
};

// Exportando la función "conexion" y la instancia de Sequelize "sequelize" para ser utilizadas en otros archivos
export { conexion, sequelize };
