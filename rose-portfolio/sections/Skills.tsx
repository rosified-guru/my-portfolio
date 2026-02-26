export default function Skills() {
  return (
    <section id="skills" className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-semibold mb-6">Skills</h2>

        <div className="grid md:grid-cols-3 gap-8 text-gray-700">
          <div>
            <h3 className="font-medium mb-2">Frontend</h3>
            <ul className="space-y-1">
              <li>HTML & CSS</li>
              <li>JavaScript</li>
              <li>React</li>
              <li>Next.js</li>
              <li>TypeScript</li>
              <li>Tailwind CSS</li>
            </ul>
          </div>

          <div>
            <h3 className="font-medium mb-2">UI / UX</h3>
            <ul className="space-y-1">
              <li>Figma</li>
              <li>Wireframing</li>
              <li>Responsive Design</li>
              <li>User-Centered Design</li>
            </ul>
          </div>

          <div>
            <h3 className="font-medium mb-2">Professional</h3>
            <ul className="space-y-1">
              <li>Problem Solving</li>
              <li>Team Collaboration</li>
              <li>Communication</li>
              <li>Continuous Learning</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}