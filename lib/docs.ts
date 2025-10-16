import fs from "fs";
import path from "path";
import matter from "gray-matter";

const docsDirectory = path.join(process.cwd(), "docs");

export interface Doc {
  slug: string;
  title: string;
  description?: string;
  content: string;
}

export function getDocBySlug(slug: string): Doc | null {
  try {
    const fullPath = path.join(docsDirectory, `${slug}.md`);
    const fileContents = fs.readFileSync(fullPath, "utf8");
    const { data, content } = matter(fileContents);

    return {
      slug,
      title: data.title || "Untitled",
      description: data.description,
      content,
    };
  } catch (error) {
    return null;
  }
}

export function getAllDocs(): Doc[] {
  const docs: Doc[] = [];

  function readDirectory(dir: string, baseSlug = "") {
    const files = fs.readdirSync(dir);

    files.forEach((file) => {
      const fullPath = path.join(dir, file);
      const stat = fs.statSync(fullPath);

      if (stat.isDirectory()) {
        readDirectory(fullPath, baseSlug ? `${baseSlug}/${file}` : file);
      } else if (file.endsWith(".md")) {
        const slug = baseSlug
          ? `${baseSlug}/${file.replace(/\.md$/, "")}`
          : file.replace(/\.md$/, "");
        const doc = getDocBySlug(slug);
        if (doc) {
          docs.push(doc);
        }
      }
    });
  }

  if (fs.existsSync(docsDirectory)) {
    readDirectory(docsDirectory);
  }

  return docs;
}
