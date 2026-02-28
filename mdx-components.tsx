import defaultMdxComponents from "fumadocs-ui/mdx";
import { Mermaid } from "@/components/mdx/mermaid";
import type { MDXComponents } from "mdx/types";
import { ImageZoom } from "fumadocs-ui/components/image-zoom";

export function getMDXComponents(components?: MDXComponents): MDXComponents {
  return {
    ...defaultMdxComponents,
    Mermaid,
    img: (props) => <ImageZoom {...(props as any)} />,
    ...components,
  };
}
