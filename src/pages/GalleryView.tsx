import Section from "../components/Section";

function GalleryView() {
  return (
    <div className="flex flex-col items-center gap-8">
      <div className="text-center">
        <h1 className="bg-linear-to-br from-orange-600 to-orange-400 bg-clip-text text-3xl font-extrabold text-transparent sm:text-4xl">
          Gallery
        </h1>
        <p className="mt-3 text-gray-700">
          A beautiful space to showcase creations. Assets will appear here soon.
        </p>
      </div>

      <Section className="w-full">
        <div className="grid w-full grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3">
          {Array.from({ length: 6 }).map((_, i) => (
            <div
              key={i}
              className="aspect-square w-full rounded-xl border border-orange-200/60 bg-white shadow-sm"
            >
              <div className="flex h-full w-full items-center justify-center text-sm text-gray-500">
                Placeholder #{i + 1}
              </div>
            </div>
          ))}
        </div>
      </Section>
    </div>
  );
}

export default GalleryView;
