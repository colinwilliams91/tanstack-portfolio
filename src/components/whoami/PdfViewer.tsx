import { useState } from "react";
import { Document, Page, pdfjs } from "react-pdf";
import "react-pdf/dist/Page/AnnotationLayer.css";
import "react-pdf/dist/Page/TextLayer.css";

pdfjs.GlobalWorkerOptions.workerSrc = new URL(
  "pdfjs-dist/build/pdf.worker.min.mjs",
  import.meta.url
).toString();

interface PdfViewerProps {
  filename: string;
  title: string;
}

export function PdfViewer({ filename, title }: PdfViewerProps) {
  const [numPages, setNumPages] = useState<number>(0);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [loadError, setLoadError] = useState<boolean>(false);

  function onDocumentLoadSuccess({ numPages }: { numPages: number }) {
    setNumPages(numPages);
    setCurrentPage(1);
    setLoadError(false);
  }

  function onDocumentLoadError() {
    setLoadError(true);
  }

  // Placeholder for when PDF files are not yet available
  if (loadError) {
    return (
      <div className="card card-border border-base-content/10 bg-base-200/30 backdrop-blur-sm">
        <div className="card-body items-center text-center py-16">
          <div className="text-6xl mb-4 opacity-30">📄</div>
          <h3 className="font-family-mono text-accent text-lg">{title}</h3>
          <p className="text-sm text-base-content/40 font-family-mono mt-2">
            [{filename}]
          </p>
          <p className="text-xs text-base-content/30 mt-4 max-w-md">
            Document pending upload. This viewer will render the PDF inline when
            the file is available.
          </p>
          <div className="mt-4 flex gap-2">
            {[1, 2, 3].map((i) => (
              <div
                key={i}
                className="w-20 h-28 border border-base-content/10 rounded bg-base-300/20 flex items-center justify-center"
              >
                <span className="text-xs text-base-content/20 font-family-mono">
                  p.{i}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="card card-border border-base-content/10 bg-base-200/30 backdrop-blur-sm">
      <div className="card-body p-4">
        {/* Toolbar */}
        <div className="flex items-center justify-between mb-4 font-family-mono text-sm">
          <span className="text-accent">{title}</span>
          <div className="flex items-center gap-3">
            <button
              className="btn btn-ghost btn-xs"
              disabled={currentPage <= 1}
              onClick={() => setCurrentPage((p) => Math.max(1, p - 1))}
            >
              ←
            </button>
            <span className="text-base-content/50">
              {currentPage} / {numPages}
            </span>
            <button
              className="btn btn-ghost btn-xs"
              disabled={currentPage >= numPages}
              onClick={() => setCurrentPage((p) => Math.min(numPages, p + 1))}
            >
              →
            </button>
          </div>
        </div>

        {/* PDF Document */}
        <div className="flex justify-center overflow-auto max-h-[80vh] rounded">
          <Document
            file={`/pdfs/${filename}`}
            onLoadSuccess={onDocumentLoadSuccess}
            onLoadError={onDocumentLoadError}
            loading={
              <div className="flex items-center justify-center py-16">
                <span className="loading loading-dots loading-lg text-accent"></span>
              </div>
            }
          >
            <Page
              pageNumber={currentPage}
              className="shadow-xl"
              width={Math.min(800, typeof window !== "undefined" ? window.innerWidth - 80 : 800)}
            />
          </Document>
        </div>
      </div>
    </div>
  );
}
