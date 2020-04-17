import { Size } from "./dimensions";

const saveUrl = "https://vsdraw.azurewebsites.net/api/SaveImage";
// const saveUrl = "http://localhost:3232";

export function saveToCloud(
  image: any,
  imageData: ImageData
): Promise<SaveImageResponse> {
  const formData = new FormData();

  formData.append("ImageData", JSON.stringify(imageData));
  formData.append("Image", image);

  return fetch(saveUrl, {
    method: "POST",
    body: formData,
  }).then((r) => r.json());
}

interface SaveImageResponse {
  imageUrl: string;
  imageDataUrl: string;
}

export function loadImageData(imageId: string) {
  return fetch(
    `https://vsdraw.blob.core.windows.net/imagedata/${imageId}.json`
  ).then((r) => r.json() as Promise<ImageData>);
}

interface ImageData {
  /**
   * This is what is returned from sketchField.toJSON()
   */
  image: any;
  /**
   * Size of the canvas.
   */
  size: Size;
}
