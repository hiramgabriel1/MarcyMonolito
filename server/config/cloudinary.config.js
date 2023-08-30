import { v2 as cloudinary } from "cloudinary";
import { CLOUDINARY_KEY, CLOUDINARY_NAME, CLOUDINARY_SECRET } from "./keys.js";

// Configurar cloudinary
cloudinary.config({
  cloud_name: CLOUDINARY_NAME,
  api_key: CLOUDINARY_KEY,
  api_secret: CLOUDINARY_SECRET,
});

// Método para cargar una imagen
export const uploadImage = async (filePath) => {
  try {
    const result = await cloudinary.uploader.upload(filePath, {
      folder: "image", // Cambiado a "image" para la carpeta
    });
    return result;
  } catch (error) {
    console.error("Error al cargar la imagen:", error);
    throw error; // Relanzar el error para manejarlo en el llamador
  }
};

// Método para eliminar una imagen
export const deleteImage = async (publicId) => {
  try {
    const result = await cloudinary.uploader.destroy(publicId);
    return result;
  } catch (error) {
    console.error("Error al eliminar la imagen:", error);
    throw error; // Relanzar el error para manejarlo en el llamador
  }
};