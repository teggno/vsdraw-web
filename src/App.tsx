import React, { useState, useEffect } from "react";
import "./App.css";
import Drawingboard from "./Drawingboard";
import { loadImageData } from "./Api";
import LoadingIndicator from "./LoadingIndicator";

function App({ hash }: { hash: string }) {
  const [initialImageData, setInitialImageData] = useState(null);
  const [isLoading, setLoading] = useState(false);
  const [loadingText, setLoadingText] = useState("Loading...");
  useEffect(() => {
    if (!hash) {
      return;
    }
    const imageId = hash.replace("#", "");
    if (imageId) {
      setLoading(true);
      loadImageData(imageId)
        .then(setInitialImageData)
        .finally(() => setLoading(false));
    }
  }, [hash]);
  return (
    <div className="appContainer">
      {isLoading ? <LoadingIndicator text={loadingText} /> : null}
      <header>
        <h1>VSDRAW</h1>
      </header>
      <main>
        <Drawingboard
          initialImageData={initialImageData}
          onLoading={(l, text) => {
            setLoading(l);
            if (text) setLoadingText(text);
          }}
        />
      </main>
    </div>
  );
}

export default App;
