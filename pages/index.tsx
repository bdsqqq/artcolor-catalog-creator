export default function Home() {
  const [isClient, setIsClient] = useState(false);
  useEffect(() => {
    setIsClient(true);
  });
  return (
    <div className="bg-blue-200 min-h-screen">
      {isClient && (
        <PDFViewer height="600" width="400">
          <PdfDocument />
        </PDFViewer>
      )}
    </div>
  );
}

import { PDFViewer } from "@react-pdf/renderer";
import { useEffect, useState } from "react";
import PdfDocument from "../components/PdfDocument";
