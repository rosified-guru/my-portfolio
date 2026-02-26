export default function Projects() {
  return (
    <section
      id="projects"
      className="py-20 px-6 bg-gray-50"
    >
      <div className="max-w-6xl mx-auto">
        
        {/* Section Title */}
        <h2 className="text-3xl font-semibold mb-4">
          Projects
        </h2>
        <p className="text-gray-600 mb-10 max-w-xl">
          A selection of projects where I applied frontend development
          and UI/UX principles to solve real problems.
        </p>

        {/* Project Card */}
        <div className="border border-gray-200 rounded-lg p-6 bg-white">
          <h3 className="text-xl font-semibold mb-2">
            Product Catalog Web App
          </h3>

          <p className="text-gray-600 mb-4">
            A responsive product catalog application that allows users
            to browse, filter, and view products efficiently.
          </p>

          <ul className="text-sm text-gray-500 mb-4 flex flex-wrap gap-3">
            <li>Next.js</li>
            <li>TypeScript</li>
            <li>Tailwind CSS</li>
            <li>API Integration</li>
          </ul>

          <div className="flex gap-4 text-sm font-medium">
            <a
              href="#"
              className="text-blue-600 hover:underline"
            >
              Live Demo
            </a>
            <a
              href="#"
              className="text-blue-600 hover:underline"
            >
              GitHub Repo
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}