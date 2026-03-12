import type { Metadata } from "next";
import CompilerPage from "@/components/CompilerPage";

export const metadata: Metadata = {
  title: "HTML & CSS Online Compiler | Write & Preview Code Live",
  description:
    "Build and preview HTML and CSS code instantly in your browser. Live preview online compiler with real-time rendering. Perfect for learning web development.",
  keywords: [
    "html compiler",
    "css compiler",
    "html css editor",
    "web design tool",
    "online html editor",
    "css playground",
    "web development",
  ],
  openGraph: {
    title: "HTML & CSS Online Compiler | Write & Preview Code Live",
    description:
      "Build and preview HTML and CSS code instantly with live preview. Perfect for learning web development and prototyping designs.",
    url: "/html/online-compiler",
    type: "article",
    images: ["/og-image.svg"],
  },
  twitter: {
    card: "summary_large_image",
    title: "HTML & CSS Online Compiler",
    description:
      "Build and preview HTML and CSS code instantly with live preview.",
    images: ["/og-image.svg"],
  },
  alternates: { canonical: "/html/online-compiler" },
};

export default async function HtmlOnlineCompilerPage({
  searchParams,
}: {
  searchParams?: Promise<{ code?: string; run?: string }>;
}) {
  const params = await searchParams;
  const code = params?.code ? decodeURIComponent(params.code) : "";
  const autoRun = params?.run === "1";

  return (
    <main className="max-w-7xl mx-auto px-4 py-8">
      <CompilerPage
        language="html"
        initialCode={code}
        autoRun={autoRun}
      />
      
      <section className="mt-12 prose prose-slate max-w-none">
        <h2 className="text-3xl font-bold mt-8 mb-4">HTML & CSS Online Compiler - Learn Web Development</h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          Our HTML and CSS online compiler is a web-based editor that lets you write HTML markup and CSS styling, then instantly see the rendered result in a live preview. No installation needed, no server setup required. Perfect for beginners learning HTML and CSS, developers prototyping layouts, and designers creating responsive web designs. Write your code, see it rendered immediately, and refine until it looks perfect.
        </p>

        <h2 className="text-3xl font-bold mt-8 mb-4">Key Features</h2>
        <div className="grid md:grid-cols-2 gap-6 my-6">
          <div className="bg-blue-50 p-6 rounded-lg">
            <h3 className="font-bold text-lg mb-2">🔄 Live Preview</h3>
            <p className="text-gray-700">See your HTML and CSS rendered instantly as you type. Changes appear immediately in the preview panel without needing to refresh or compile.</p>
          </div>
          <div className="bg-green-50 p-6 rounded-lg">
            <h3 className="font-bold text-lg mb-2">📱 Responsive Design</h3>
            <p className="text-gray-700">Test your designs on different screen sizes. Preview how your layouts respond to mobile, tablet, and desktop viewports in real-time.</p>
          </div>
          <div className="bg-purple-50 p-6 rounded-lg">
            <h3 className="font-bold text-lg mb-2">🎨 Full CSS Support</h3>
            <p className="text-gray-700">Write modern CSS including Flexbox, CSS Grid, animations, gradients, and all CSS3 features. Test advanced styling techniques instantly.</p>
          </div>
          <div className="bg-orange-50 p-6 rounded-lg">
            <h3 className="font-bold text-lg mb-2">✏️ Clean Workspace</h3>
            <p className="text-gray-700">Distraction-free coding environment with side-by-side code and preview. Focus on learning and building without external distractions.</p>
          </div>
        </div>

        <h2 className="text-3xl font-bold mt-8 mb-4">What Can You Build?</h2>
        <ul className="list-disc list-inside space-y-3 text-gray-700 mb-6">
          <li><strong>Landing Pages</strong> - Create professional-looking landing pages with HTML and CSS</li>
          <li><strong>Portfolio Websites</strong> - Build personal portfolio sites to showcase your work</li>
          <li><strong>Form Designs</strong> - Test form layouts, styling, and validation UI</li>
          <li><strong>Responsive Layouts</strong> - Learn Flexbox and CSS Grid with live preview feedback</li>
          <li><strong>UI Components</strong> - Build buttons, cards, navigation bars, and other reusable components</li>
          <li><strong>CSS Animations</strong> - Experiment with transitions and keyframe animations safely</li>
        </ul>

        <h2 className="text-3xl font-bold mt-8 mb-4">Getting Started Guide</h2>
        <ol className="list-decimal list-inside space-y-3 text-gray-700 mb-6">
          <li><strong>Write HTML</strong> - Start with basic HTML markup in the editor. Create headings, paragraphs, links, buttons, and forms.</li>
          <li><strong>Add CSS Styling</strong> - Use CSS to style your HTML elements. Add colors, fonts, spacing, layouts, and effects.</li>
          <li><strong>Preview Live</strong> - The right panel shows your rendered webpage instantly as you type.</li>
          <li><strong>Test Responsiveness</strong> - Resize the preview panel to test how your design looks on different screen sizes.</li>
          <li><strong>Iterate and Refine</strong> - Change your code and watch the preview update in real-time.</li>
          <li><strong>Download or Copy</strong> - Save your code to your projects or share it with others.</li>
        </ol>

        <h2 className="text-3xl font-bold mt-8 mb-4">Perfect For</h2>
        <ul className="list-disc list-inside space-y-3 text-gray-700 mb-6">
          <li>Beginners learning HTML and CSS fundamentals</li>
          <li>Designers prototyping web layouts and designs</li>
          <li>Developers testing CSS features and techniques</li>
          <li>Students completing web development assignments</li>
          <li>Quick website mockups and prototypes</li>
          <li>Teaching HTML and CSS in classrooms or tutorials</li>
        </ul>

        <h2 className="text-3xl font-bold mt-8 mb-4">Tips for Success</h2>
        <ul className="list-disc list-inside space-y-3 text-gray-700">
          <li><strong>Start Simple</strong> - Begin with basic HTML structure before adding complex CSS</li>
          <li><strong>Use Comments</strong> - Add HTML comments to organize your code sections</li>
          <li><strong>Test Syntax</strong> - Check the preview to catch HTML or CSS errors immediately</li>
          <li><strong>Learn Responsiveness</strong> - Use media queries to make layouts adapt to different screen sizes</li>
          <li><strong>Explore CSS Grid and Flexbox</strong> - These modern layout tools make responsive design much easier</li>
          <li><strong>Save Your Work</strong> - Copy completed projects to file or use external storage</li>
        </ul>
      </section>
    </main>
  );
}
