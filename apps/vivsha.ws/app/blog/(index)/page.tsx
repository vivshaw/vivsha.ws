import type { Metadata } from "next"

import { metadataHelper, schemaHelper } from "#lib/metadataHelpers"
import { BlogList } from "./_components/BlogList"
import { getSortedBlogMetas } from "./_lib/getSortedBlogMetas"

export const metadata: Metadata = metadataHelper({
  type: "other",
  description: "vivshaw's blog",
  slug: "blog",
  title: "Blog",
})

/**
 * The index page for the blog. Lists all the posts.
 */
export default async function Blog() {
  const postsDateless = await getSortedBlogMetas()

  const jsonLdSchema = schemaHelper({
    type: "other",
    description: "vivshaw's blog",
    slug: "blog",
    title: "blog",
  })

  const posts = postsDateless.map((item) => ({
    ...item,
    date: new Date(item.date),
  }))

  return (
    <>
      <BlogList posts={posts} />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdSchema) }}
      />
    </>
  )
}
