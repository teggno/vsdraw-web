export default function ({ saveRemoteImageUrl }: VsCodeApiConfig) {
  return {
    /** POSTs the url of a saved image to the HTTP server in vscode */
    saveInVsCode(oldImageUrl: string, newImageUrl: string) {
      return fetch(saveRemoteImageUrl, {
        method: "POST",
        body: JSON.stringify({ oldImageUrl, newImageUrl }),
      });
    },
  };
}

export interface ImgeUrlSaver {
  (oldImageUrl: string, newImageUrl: string): Promise<any>;
}

export interface VsCodeApiConfig {
  saveRemoteImageUrl: string;
}
