import type { Metadata } from "next";

interface Props {
  params: { slug: string[] };
}

export function generateMetadata({ params }: Props): Metadata {
  const slug = params.slug.join("/") || "javascript";
  return {
    title: `Coming Soon – ${slug}`,
    description: "This topic is coming soon. Stay tuned for more JavaScript tutorials.",
    alternates: { canonical: "/javascript/coming-soon" },
  };
}

export default function GenericComingSoon({ params }: Props) {
  const title = params.slug.join(" / ") || "JavaScript";
  return (
    <main className="max-w-4xl mx-auto px-4 pt-0 pb-12 text-center">
      <h1 className="text-4xl font-extrabold">Topic Coming Soon</h1>
      <p className="mt-4 text-lg">
        The page for <strong>{title}</strong> is not available yet.
        We're working on it – check back soon!
      </p>
    </main>
  );
}
