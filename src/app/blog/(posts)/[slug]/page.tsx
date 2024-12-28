import { MDXBody } from "#components/MDX"
import type { Post } from "#data"
import { prettyPrintDate } from "#lib"
import { metadataHelper } from "#lib/metadataHelper"
import { importBlogPost, listAllBlogSlugs } from "#lib/postHelpers"
import { PostHero } from "./_components/PostHero"
import { PostNext } from "./_components/PostNext"
import { postBody, footerNext, footerSpacer, section } from "./page.css"

// TODO: Remove these after `next` actually works!!
const fakeNextMetas: Post[] = [
  {
    title: "Build a Frankenstein Robot Brain, Teach It to Read Numbers",
    blurb: "Exploring computer vision with a from-scratch neural net in Scala",
    date: new Date("2017-02-04"),
    next: ["electric-pentameter", "build-you-a-tweetbot"],
    slug: "robot-brain-scala",
    tags: ["scala", "ml", "neural networks", "MNIST", "computer vision"],
  },
  {
    title: "Do Robots Dream of Electric Pentameter?",
    blurb: "Generative poetry with LSTM neural networks",
    date: new Date("2017-02-10"),
    next: ["robot-brain-scala", "build-you-a-tweetbot"],
    slug: "electric-pentameter",
    tags: ["python", "ml", "LSTM", "neural networks", "keras"],
  },
]

/**
 * The page for a single blog post.
 * I fetch them dynamically primarily because I want to maintain a very clean `posts/` directory.
 * I don't want to worry about maintaining Next.js metadata or layout code while writing posts.
 * This allows my MDX files to be almost pure markdown.
 */
export default async function Post({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const slug = (await params).slug
  const { PostContent, meta } = await importBlogPost(slug)

  const nextPosts = fakeNextMetas.filter((post) => post.slug !== meta.slug)

  return (
    <>
      <PostHero post={meta} />

      <article className={postBody}>
        <MDXBody>
          <PostContent />
        </MDXBody>
      </article>

      {nextPosts.length > 0 && (
        <section className={section}>
          <h3 className={footerNext}>More articles from vivshaw's</h3>
          <PostNext posts={nextPosts} />
          <div className={footerSpacer} />
        </section>
      )}
    </>
  )
}

export async function generateStaticParams() {
  const slugs = await listAllBlogSlugs()
  const params = slugs.map((slug) => ({ slug }))
  return params
}

export async function generateMetadata({
  params,
}: {
  params: { slug: string }
}) {
  const { slug } = await params
  const { meta } = await importBlogPost(slug)
  const prettyDate = prettyPrintDate(meta.date)

  return metadataHelper({
    type: "post",
    datePublished: prettyDate,
    description: meta.blurb,
    slug: slug,
    title: meta.title,
  })
}

export const dynamicParams = false