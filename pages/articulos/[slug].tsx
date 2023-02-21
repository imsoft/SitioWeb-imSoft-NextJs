import React, { useEffect, useState } from "react";
import { GetStaticPaths, GetStaticProps } from "next";
import { getAllFilesMetadata, getFileBySlug, getFiles } from "../../lib/mdx";
import { MDXRemote } from "next-mdx-remote";
import MdxComponent from "../../components/articles/MdxComponent";
import RecommendationsPosts from "../../components/articles/RecommendationsPosts";

interface Props {
  source: object;
  frontMatter: object;
  posts: Posts[];
}

interface Posts {
  address: string;
  author: string;
  affiliation: string;
  canonical_url: string;
  category: string;
  comment: string;
  copyright: string;
  date: string;
  description: string;
  email: string;
  image: string;
  keywords: string;
  language: string;
  slug: string;
  subtitle: string;
  tags: string;
  title: string;
  web: string;
}

const Post = ({ source, frontMatter, posts }: Props) => {

  const [randomObjectsResult, setRandomObjectsResult] = useState<Posts[]>([]);

  useEffect(() => {
    const randomIndexes = new Set<number>();
    while (randomIndexes.size < 3) {
      randomIndexes.add(Math.floor(Math.random() * posts.length));
    }
    const result = Array.from(randomIndexes).map((i) => posts[i]);
    setRandomObjectsResult(result);
  }, [posts]);

  return (
    <>
      <div className="mx-auto max-w-7xl items-center px-4 py-5 sm:px-6 sm:py-4 md:justify-start lg:px-8">
        <div className="prose prose-lg prose-indigo max-w-screen-lg mx-auto mt-6 text-gray-500">
          <MDXRemote
            compiledSource={""}
            {...source}
            components={MdxComponent}
          />
        </div>
      </div>
      
      <RecommendationsPosts props={randomObjectsResult} />

    </>
  );
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const slug = params!.slug as string;
  const { source, frontMatter } = await getFileBySlug(slug);

  const posts = await getAllFilesMetadata();

  return {
    props: {
      source,
      frontMatter,
      posts,
    },
    revalidate: 86400,
  };
};

export const getStaticPaths: GetStaticPaths = async (ctx) => {
  const posts = await getFiles();
  const paths = posts.map((post) => ({
    params: {
      slug: post.replace(/\.mdx/, ""),
    },
  }));

  return {
    paths,
    fallback: false,
  };
};

export default Post;
