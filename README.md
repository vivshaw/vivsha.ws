# Example app with MDX

This example shows using [MDX](https://github.com/mdx-js/mdx) as top level pages for your next.js app.

## Deploy your own

Deploy the example using [Vercel](https://vercel.com?utm_source=github&utm_medium=readme&utm_campaign=next-example) or preview live with [StackBlitz](https://stackblitz.com/github/vercel/next.js/tree/canary/examples/with-mdx)

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/git/external?repository-url=https://github.com/vercel/next.js/tree/canary/examples/with-mdx&project-name=with-mdx&repository-name=with-mdx)

## How to use

Execute [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app) with [npm](https://docs.npmjs.com/cli/init), [Yarn](https://yarnpkg.com/lang/en/docs/cli/create/), or [pnpm](https://pnpm.io) to bootstrap the example:

```bash
npx create-next-app --example with-mdx with-mdx-app
```

```bash
yarn create next-app --example with-mdx with-mdx-app
```

```bash
pnpm create next-app --example with-mdx with-mdx-app
```

Deploy it to the cloud with [Vercel](https://vercel.com/new?utm_source=github&utm_medium=readme&utm_campaign=next-example) ([Documentation](https://nextjs.org/docs/deployment)).

## TODO

- [ ] There's an error with `'` and `"` in Prism code blocks of unknown language
- [ ] Make `code` blocks more legible
- [ ] Nicer component for loading images in MDX?
- [ ] Line numbers in code blocks
- [ ] Code block highlights
- [ ] Code block styles for CLI
- [ ] Actually display/use the category tags
- [ ] Get "Next Article" working for real
- [ ] Type article meta, if possible
- [ ] Yarn PnP support? (Not compatible with Turborepo... yet!)
- [ ] Monorepo it? (Turborepo? NX?)
- [ ] Storybook & design system
- [ ] Fix janky width changing when scrollbar shows or hides, again. now it's on smaller screens?
- [ ] more accessible focus states
- [ ] change "More articles from vivshaw's" to something that reads better
- [ ] should I use an actual list for the blog list? not sure!
- [ ] stop using global transition variables, and standardize transitions more generally
- [ ] use a path alias that is more easily distinguishable from NPM packages
- [ ] sans is only used in tables, should I drop it?
- [ ] heading styles in MDX get broken alignment on small screens
- [ ] fix navbar appearance & alignment in mobile menu
- [ ] colors fade from light to dark on first page load. that should be fixed. also, fix odd 1px of whitespace on the bottom of the page. probably this all requires moving to global theming so I can style `html` and `body`
- [ ] redirect old vivshaw.net domain (and remove Vercel infra that hosts it)

# measurements:

with Emotion and ThemeUI:

- main: 244kb
  - js: 117kb
  - css: 3.8kb
  - doc: 5.7kb
  - fetch: 6.6kb
  - font: 109kb
- article (scala): 320kb
  - js: 128kb
  - css: 3.8kb
  - doc: 16.1kb
  - font: 171kb

with Vanilla Extract:

- main: TBD!
- article: TBD!
