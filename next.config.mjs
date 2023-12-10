import remarkGfm from "remark-gfm";
import createMDX from "@next/mdx";
import rehypePrettyCode from 'rehype-pretty-code'
import rehypeAutolinkHeadings from "rehype-autolink-headings";
import rehypeHighlight from "rehype-highlight";
import rehypeSlug from "rehype-slug";

/** @type {import('next').NextConfig} */
const nextConfig = {
  // Configure `pageExtensions`` to include MDX files
  pageExtensions: ["js", "jsx", "mdx", "ts", "tsx", "md"],
  // Optionally, add any other Next.js config below
};

const withMDX = createMDX({
  // Add markdown plugins here, as desired
  options: {
    remarkPlugins: [remarkGfm],
    rehypePlugins: [rehypePrettyCode, rehypeSlug, rehypeAutolinkHeadings],
  },
});

// Merge MDX config with Next.js config
export default withMDX(nextConfig);
