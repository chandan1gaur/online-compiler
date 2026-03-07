import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Disclaimer - Online Compiler",
  description:
    "Disclaimer for the Online Compiler site. Information provided is for educational purposes and may not be accurate.",
  alternates: { canonical: "/disclaimer" },
};

export default function DisclaimerPage() {
  return (
    <main className="mx-auto max-w-6xl px-3 py-12 sm:px-4">
      <h1 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
        Disclaimer
      </h1>
      <p className="mt-4 text-slate-700">
        The content on Online Compiler is provided for general informational and
        educational purposes only. While we strive to keep information accurate and
        up-to-date, we make no representations or warranties of any kind, express or
        implied, about the completeness, reliability, suitability or availability of
        the information contained on the site.
      </p>
      <p className="mt-4 text-slate-700">
        Any reliance you place on such information is therefore strictly at your own
        risk. We are not responsible for any errors or omissions, or for the results
        obtained from the use of this information. The use of the online tools is at
        your own risk as well, and we do not guarantee the accuracy of code execution
        or formatting results.
      </p>
      <p className="mt-4 text-slate-700">
        In no event will Online Compiler be liable for any loss or damage including
        without limitation, indirect or consequential loss or damage, or any loss or
        damage whatsoever arising from loss of data or profits arising out of, or in
        connection with, the use of this website.
      </p>
    </main>
  );
}
