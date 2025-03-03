export default function Projects() {
  return (
    <section className="py-16 px-8">
      <h2 className="text-3xl font-bold text-center">Projects</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-6">
        <div className="p-4 bg-gray-800 text-white rounded-lg hover:scale-105 transition">
          <h3 className="text-xl font-bold">Project 1</h3>
          <p className="mt-2">Description of the project.</p>
        </div>
      </div>
    </section>
  );
}