const saveUrl = "https://vsdraw.azurewebsites.net/api/SaveImage";
// const saveUrl = "http://localhost:3232";

export function saveToCloud(
  image: any,
  imageData: string
): Promise<SaveImageResponse> {
  const formData = new FormData();

  formData.append("ImageData", imageData);
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
  ).then((r) => r.json());
}
