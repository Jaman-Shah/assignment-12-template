import React, { useState } from "react";
import { imageUpload } from "../api/utils/imageUpload";

const ImageUpload = () => {
  const [imageUrl, setImageUrl] = useState("");
  const [errorMessage, setErrorMessage] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const form = e.target;
    const name = form.name.value;
    const image = form.image.files[0];

    try {
      const image_url = await imageUpload(image);
      setImageUrl(image_url);
      setErrorMessage(null); // Clear any previous error message
    } catch (error) {
      console.error("Image upload error:", error);
      setErrorMessage("Error uploading image. Please try again."); // Set error message
    }
  };

  return (
    <div>
      <h1>This is image upload page</h1>
      <div className="w-1/2 mx-auto">
        {errorMessage && <p className="text-red-500">{errorMessage}</p>}
        <form onSubmit={handleSubmit} className="flex flex-col">
          <input type="text" name="name" className="border" />
          <input type="file" name="image" accept="image/*" />
          <button className="border p-2">Submit</button>
        </form>
      </div>
      <div className="h-32 w-32">
        {imageUrl && <img src={imageUrl} alt="Uploaded Image" />}
      </div>
    </div>
  );
};

export default ImageUpload;
