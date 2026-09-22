// 文章源文件在 content/articles/*.md，frontmatter + Markdown 正文
import vlmAntiHallucinationRaw from "../../content/articles/vlm-anti-hallucination.md?raw";
import observeJudgeRaw from "../../content/articles/observe-then-judge.md?raw";

export interface Article {
  slug: string;
  title: string;
  date: string;
  excerpt: string;
  body: string;
}

function parseArticle(slug: string, raw: string): Article {
  const match = raw.match(/^---\n([\s\S]*?)\n---\n([\s\S]*)$/);
  const meta: Record<string, string> = {};
  let body = raw;
  if (match) {
    for (const line of match[1].split("\n")) {
      const idx = line.indexOf(":");
      if (idx > 0) {
        meta[line.slice(0, idx).trim()] = line.slice(idx + 1).trim();
      }
    }
    body = match[2].trim();
  }
  return {
    slug,
    title: meta.title ?? slug,
    date: meta.date ?? "",
    excerpt: meta.excerpt ?? "",
    body,
  };
}

export const articles: Article[] = [
  parseArticle("vlm-anti-hallucination", vlmAntiHallucinationRaw),
  parseArticle("observe-then-judge", observeJudgeRaw),
];
