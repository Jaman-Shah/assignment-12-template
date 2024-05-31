import axios from "axios";

const apiKey = "d0f72c5ca035c2f35ceaee0a2946c9ef";
export const imageUpload = async (image) => {
  const formData = new FormData();
  formData.append("image", image);
  const { data } = await axios.post(
    `https://api.imgbb.com/1/upload?key=${apiKey}`,
    formData
  );

  return data.data.display_url;
};
