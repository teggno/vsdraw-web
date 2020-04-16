export function copyStringToClipboard(value: string) {
  if (!navigator?.permissions?.query) {
    alert("Probably running Safari which is not supported");
    return;
  }
  (navigator as any).permissions
    .query({ name: "clipboard-write" })
    .then(
      (result: any) => result.state === "granted" || result.state === "prompt"
    )
    .catch(() => true)
    .then((allowed: boolean) => {
      if (!allowed) return;
      navigator.clipboard.writeText(value).then(
        () => {
          alert("Yay, copied to clipboard");
        },
        () => {
          alert("Failed to copy to clipboard");
        }
      );
    });
}
