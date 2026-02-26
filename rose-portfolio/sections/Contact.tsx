export default function Contact() {
  return (
    <section id="contact" className="py-20 px-6">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-semibold mb-6">Contact</h2>

        <p className="text-gray-700 mb-4">
          Feel free to reach out if you’d like to collaborate,
          ask a question, or discuss opportunities.
        </p>

        <ul className="space-y-2 text-blue-600">
          <li>
            <a href="mailto:your-email@example.com">
              your-email@example.com
            </a>
          </li>
          <li>
            <a href="https://github.com/your-username" target="_blank">
              GitHub
            </a>
          </li>
          <li>
            <a href="https://linkedin.com/in/your-username" target="_blank">
              LinkedIn
            </a>
          </li>
        </ul>
      </div>
    </section>
  );
}