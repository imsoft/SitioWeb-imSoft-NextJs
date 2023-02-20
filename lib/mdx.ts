import path from "path";
import matter from "gray-matter";
import { serialize } from "next-mdx-remote/serialize";

interface FS {
  readdirSync(path: string): string[];
  readFileSync(path: string, encoding: string): string;
}

let fs: FS;
if (typeof window === "undefined") {
  fs = require("fs");
}

interface FrontMatter {
  [key: string]: any;
  slug: string;
}

const root = process.cwd();

export const getFiles = () => fs.readdirSync(path.join(root, "posts"));

export const getFileBySlug = async (slug: string) => {
  const mdxSource = fs.readFileSync(
    path.join(root, "posts", `${slug}.mdx`),
    "utf-8"
  );

  const { data, content } = await matter(mdxSource);
  const source = await serialize(content, {});

  return {
    source,
    frontMatter: {
      slug,
      ...data,
    },
  };
};

export const getAllFilesMetadata = () => {
  const files = getFiles();
  return files.reduce<FrontMatter[]>((allPosts, postSlug) => {
    const mdxSource = fs.readFileSync(
      path.join(root, "posts", postSlug),
      "utf-8"
    );
    const { data } = matter(mdxSource);

    return [{ ...data, slug: postSlug.replace(".mdx", "") }, ...allPosts];
  }, []);
};
