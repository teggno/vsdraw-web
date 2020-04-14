import React from "react";
import "./Output.css";

export default function Output() {
  return (
    <ul className="output">
      <li>
        <button
          title="Markdown image link to clipboard"
          onClick={markdownToClipboardClicked}
        >
          MD
        </button>
      </li>
    </ul>
  );
}

async function markdownToClipboardClicked() {
  const { imageUrl } = await saveToCloud();
  const markdown = `![alt text](${imageUrl} "Logo Title Text 1")`;
  copyStringToClipboard(markdown);
}

function saveToCloud() {
  return Promise.resolve({
    editableUrl: "",
    imageUrl: "https://foo.sdfsf.jpg",
  });
}

function copyStringToClipboard(value: string) {
  if (!navigator?.permissions?.query) {
    alert("Probably running Safari which is not supported");
    return;
  }
  (navigator as any).permissions
    .query({ name: "clipboard-write" })
    .then(
      (result: any) => result.state == "granted" || result.state == "prompt"
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
