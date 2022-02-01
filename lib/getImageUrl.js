import storage from "./firebaseConfig";
import { ref, getDownloadURL } from "firebase/storage";

const getImageUrl = async (imagePath) => {
  const pathReference = ref(storage, imagePath);

  // return URL to put in SRC of an image tag
  try {
    const downloadUrl = await getDownloadURL(pathReference);
    return downloadUrl;
  } catch (err) {
    console.log("Error Happened");
    return err.code;
  }
};

export default getImageUrl;
