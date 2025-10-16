import { getDocBySlug, getAllDocs } from "@/lib/docs";
import { notFound } from "next/navigation";
import DocViewer from "@/components/DocViewer";
import Navigation from "@/components/Navigation";

interface PageProps {
  params: {
    slug: string[];
  };
}

export async function generateStaticParams() {
  const docs = getAllDocs();
  return docs.map((doc) => ({
    slug: doc.slug.split("/"),
  }));
}

export default function DocPage({ params }: PageProps) {
  const slug = params.slug.join("/");
  const doc = getDocBySlug(slug);

  if (!doc) {
    notFound();
  }

  return (
    <div className="min-h-screen flex">
      {/* Sidebar Navigation */}
      <Navigation currentSlug={slug} />

      {/* Main Content */}
      <main className="flex-1">
        <DocViewer doc={doc} />
      </main>
    </div>
  );
}
