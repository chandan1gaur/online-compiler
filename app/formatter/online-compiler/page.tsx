import type { Metadata } from "next";
import FormatterTool from "@/components/FormatterTool";

export const metadata: Metadata = {
  title: "Code Formatter | Format HTML, CSS & JavaScript Online",
  description:
    "Format and beautify your HTML, CSS, and JavaScript code online. Remove whitespace, fix indentation, and improve code readability instantly.",
  keywords: [
    "code formatter",
    "html formatter",
    "css formatter",
    "javascript formatter",
    "code beautifier",
    "format code online",
  ],
  openGraph: {
    title: "Code Formatter | Format Code Online",
    description:
      "Format and beautify your HTML, CSS, and JavaScript code online with automatic indentation and cleanup.",
    url: "/formatter/online-compiler",
    type: "article",
    images: ["/og-image.svg"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Code Formatter",
    description:
      "Format and beautify your HTML, CSS, and JavaScript code online.",
    images: ["/og-image.svg"],
  },
  alternates: { canonical: "/formatter/online-compiler" },
};

export default function FormatterOnlineCompilerPage() {
  return (
    <main className="max-w-7xl mx-auto px-4 py-8">
      <FormatterTool />
      
      <section className="mt-12 prose prose-slate max-w-none">
        <h2 className="text-3xl font-bold mt-8 mb-4">Free Online Code Formatter & Beautifier</h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          Our online code formatter automatically beautifies and formats your HTML, CSS, and JavaScript code. Whether you've copied code from the internet, minified code that's hard to read, or code with inconsistent indentation, our formatter cleans it up instantly. Make your code more readable, maintainable, and professional-looking with automatic formatting applied in seconds.
        </p>

        <h2 className="text-3xl font-bold mt-8 mb-4">What Does Our Formatter Do?</h2>
        <div className="grid md:grid-cols-3 gap-6 my-6">
          <div className="bg-blue-50 p-6 rounded-lg">
            <h3 className="font-bold text-lg mb-2">✨ Auto Indentation</h3>
            <p className="text-gray-700">Automatically fixes indentation and spacing. Nested elements are properly aligned, making code structure immediately visible and easier to understand.</p>
          </div>
          <div className="bg-green-50 p-6 rounded-lg">
            <h3 className="font-bold text-lg mb-2">📋 Minified to Pretty</h3>
            <p className="text-gray-700">Convert minified code into readable formatted code. Remove all obfuscation and make minified JavaScript, CSS, or HTML humanly readable again.</p>
          </div>
          <div className="bg-purple-50 p-6 rounded-lg">
            <h3 className="font-bold text-lg mb-2">🎨 Consistent Style</h3>
            <p className="text-gray-700">Apply consistent formatting rules across your entire file. Uniform spacing, line breaks, and bracket placement make code look professional and maintainable.</p>
          </div>
        </div>

        <h2 className="text-3xl font-bold mt-8 mb-4">Supported Languages</h2>
        <ul className="list-disc list-inside space-y-3 text-gray-700 mb-6">
          <li><strong>HTML</strong> - Format HTML markup with proper tag indentation and attribute alignment</li>
          <li><strong>CSS</strong> - Beautify stylesheets with consistent property formatting and organization</li>
          <li><strong>JavaScript</strong> - Format JS code with proper indentation, spacing, and line breaks</li>
        </ul>

        <h2 className="text-3xl font-bold mt-8 mb-4">Why Use a Code Formatter?</h2>
        <ol className="list-decimal list-inside space-y-3 text-gray-700 mb-6">
          <li><strong>Readability</strong> - Well-formatted code is easier to read and understand, reducing bugs and debugging time</li>
          <li><strong>Collaboration</strong> - Team members can quickly understand code formatted in a consistent style</li>
          <li><strong>Professionalism</strong> - Proper formatting shows code quality and attention to detail in your projects</li>
          <li><strong>Maintenance</strong> - Formatted code is easier to modify, update, and maintain over time</li>
          <li><strong>Debugging</strong> - Clear structure helps identify syntax errors and logic issues faster</li>
        </ol>

        <h2 className="text-3xl font-bold mt-8 mb-4">How to Use the Formatter</h2>
        <div className="bg-gray-50 p-6 rounded-lg space-y-3 mb-6">
          <p className="text-gray-700"><strong>Step 1:</strong> Paste or type your HTML, CSS, or JavaScript code into the editor on the left</p>
          <p className="text-gray-700"><strong>Step 2:</strong> Press the "Format" button or select your language from the dropdown</p>
          <p className="text-gray-700"><strong>Step 3:</strong> View the beautifully formatted code on the right side instantly</p>
          <p className="text-gray-700"><strong>Step 4:</strong> Copy the formatted code and use it in your projects</p>
        </div>

        <h2 className="text-3xl font-bold mt-8 mb-4">Perfect For</h2>
        <ul className="list-disc list-inside space-y-3 text-gray-700">
          <li>Formatting code copied from tutorials or documentation</li>
          <li>Making minified code readable for debugging and understanding</li>
          <li>Applying consistent formatting to legacy or poorly formatted code</li>
          <li>Preparing code for team review with professional formatting</li>
          <li>Learning proper code formatting standards and best practices</li>
          <li>Formatting code before pasting into emails, documents, or presentations</li>
        </ul>
      </section>
    </main>
  );
}
