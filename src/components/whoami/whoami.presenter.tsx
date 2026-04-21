import { useState } from "react";
import { WHOAMI_COPY } from "~/constants/copy/whoami";
import { PdfViewer } from "./PdfViewer";

type WhoamiTab = "transmissions" | "artifacts" | "archives";

export function WhoamiPresenter() {
  const [activeTab, setActiveTab] = useState<WhoamiTab>("transmissions");

  return (
    <div className="max-w-5xl mx-auto">
      {/* Header */}
      <div className="mb-8 opacity-0 animate-fade-in" style={{ animationFillMode: "forwards" }}>
        <h1 className="text-4xl md:text-5xl font-bold font-family-mono tracking-tight">
          <span className="text-accent">$</span> {WHOAMI_COPY.HEADING}
        </h1>
        <p className="text-base-content/40 font-family-mono text-sm mt-1">
          {WHOAMI_COPY.SUBHEADING}
        </p>
        <p className="mt-4 text-base-content/70 max-w-2xl leading-relaxed">
          {WHOAMI_COPY.INTRO}
        </p>
      </div>

      {/* Navigation Tabs */}
      <div
        className="opacity-0 animate-fade-in cursor-pointer"
        style={{ animationDelay: "0.2s", animationFillMode: "forwards" }}
      >
        <div role="tablist" className="tabs tabs-border font-family-mono mb-8">
          <button
            role="tab"
            className={`tab ${activeTab === "transmissions" ? "tab-active text-accent whoami-link" : "text-accent/90"}`}
            onClick={() => setActiveTab("transmissions")}
          >
            {WHOAMI_COPY.SECTIONS.TEXT.TITLE}
          </button>
          <button
            role="tab"
            className={`tab ${activeTab === "artifacts" ? "tab-active whoami-persist whoami-link" : "text-neutral-700"}`}
            onClick={() => setActiveTab("artifacts")}
          >
            {WHOAMI_COPY.SECTIONS.IMAGES.TITLE}
          </button>
          <button
            role="tab"
            className={`tab ${activeTab === "archives" ? "tab-active text-accent whoami-link" : "text-accent/90"}`}
            onClick={() => setActiveTab("archives")}
          >
            {WHOAMI_COPY.SECTIONS.PDFS.TITLE}
          </button>
        </div>
      </div>

      {/* Tab Content */}
      <div
        className="opacity-0 animate-fade-in"
        style={{ animationDelay: "0.4s", animationFillMode: "forwards" }}
      >
        {activeTab === "transmissions" && <TransmissionsSection />}
        {activeTab === "artifacts" && <ArtifactsSection />}
        {activeTab === "archives" && <ArchivesSection />}
      </div>
    </div>
  );
}

function TransmissionsSection() {
  const { TITLE, SUBTITLE, ENTRIES } = WHOAMI_COPY.SECTIONS.TEXT;

  return (
    <section>
      <SectionHeader title={TITLE} subtitle={SUBTITLE} />
      <div className="space-y-8">
        {ENTRIES.map((entry) => (
          <article
            key={entry.title}
            className="card card-border border-base-content/10 bg-base-200/30 backdrop-blur-sm"
          >
            <div className="card-body">
              <div className="flex justify-between items-start flex-wrap gap-2">
                <h3 className="card-title text-lg font-family-mono text-accent">
                  {entry.title}
                </h3>
                <span className="text-xs font-family-mono text-base-content/30">
                  {entry.date}
                </span>
              </div>
              <div className="mt-3 text-base-content/70 leading-relaxed whitespace-pre-line">
                {entry.body}
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

function ArtifactsSection() {
  const { TITLE, SUBTITLE, ENTRIES } = WHOAMI_COPY.SECTIONS.IMAGES;

  return (
    <section>
      <SectionHeader title={TITLE} subtitle={SUBTITLE} />
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {ENTRIES.map((entry) => (
          <figure
            key={entry.alt}
            className="card card-border border-base-content/10 bg-base-200/30 backdrop-blur-sm overflow-hidden group"
          >
            <img
              src={entry.src}
              alt={entry.alt}
              className="w-full object-cover transition-transform duration-500 group-hover:scale-105"
              loading="lazy"
            />
            <figcaption className="p-3 text-center">
              <span className="text-xs font-family-mono text-base-content/40">
                {entry.caption}
              </span>
            </figcaption>
          </figure>
        ))}
      </div>
    </section>
  );
}

function ArchivesSection() {
  const { TITLE, SUBTITLE, ENTRIES } = WHOAMI_COPY.SECTIONS.PDFS;
  const [activePdf, setActivePdf] = useState<number | null>(null);

  return (
    <section>
      <SectionHeader title={TITLE} subtitle={SUBTITLE} />

      {/* PDF Selection */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
        {ENTRIES.map((entry, index) => (
          <button
            key={entry.filename}
            className={`card card-border text-left transition-all duration-300 ${
              activePdf === index
                ? "whoami-link"
                : "whoami-link"
            }`}
            onClick={() => setActivePdf(activePdf === index ? null : index)}
          >
            <div className="card-body p-4">
              <h3 className="font-family-mono text-sm text-accent">
                {entry.title}
              </h3>
              <div className="mt-2 text-xs font-family-mono text-base-content/30">
                [{entry.filename}]
              </div>
            </div>
          </button>
        ))}
      </div>

      {/* PDF Viewer */}
      {activePdf !== null && (
        <PdfViewer
          filename={ENTRIES[activePdf].filename}
        />
      )}
    </section>
  );
}

function SectionHeader({ title, subtitle }: { title: string; subtitle: string }) {
  return (
    <div className="mb-6">
      <h2 className="text-2xl font-family-mono font-bold text-base-content/90">
        {title}
      </h2>
      <p className="text-xs font-family-mono text-base-content/30">{subtitle}</p>
    </div>
  );
}
