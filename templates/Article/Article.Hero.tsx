import styled from "@emotion/styled";

import Headings from "@components/Headings";
import mediaqueries from "@styles/media";
import type { IArticle, IAuthor } from "@types";
import { prettyPrintDate } from "@utils";

interface ArticleHeroProps {
  article: IArticle;
  author: IAuthor;
}

/**
 * Displays the Hero section for a given Article, including title, author, and image.
 */
const ArticleHero: React.FC<ArticleHeroProps> = ({ article, author }) => {
  const prettyDate = prettyPrintDate(article.date);

  return (
    <Hero>
      <Header>
        <HeroHeading>{article.title}</HeroHeading>
        <HeroSubtitle>
          <ArticleMeta>{prettyDate}</ArticleMeta>
        </HeroSubtitle>
      </Header>
    </Hero>
  );
};

export default ArticleHero;

const Hero = styled.div`

`;

const ArticleMeta = styled.div`
  margin-left: 0;

  ${mediaqueries.phablet`
    margin-left: 0;
  `}
`;

const Header = styled.header`
  position: relative;
  z-index: 10;
  margin: 100px auto 70px;
  padding-left: 68px;
  max-width: 749px;

  ${mediaqueries.desktop`
    padding-left: 53px;
    max-width: calc(507px + 53px);
    margin: 100px auto 70px;
  `}

  ${mediaqueries.tablet`
    padding-left: 0;
    margin: 100px auto 0px;
    max-width: 480px;
  `}

  ${mediaqueries.phablet`
    margin: 100px auto 0px;
    padding: 0 40px;
  `}

  @media screen and (max-height: 700px) {
    margin: 100px auto 0px;
  }
`;

const HeroHeading = styled(Headings.h1)`
  font-size: 48px;
  font-family: ${(p) => p.theme.fonts.serif};
  margin-bottom: 25px;
  line-height: 1.32;

  ${mediaqueries.tablet`
    margin-bottom: 20px;
    font-size: 36px;
  `}

  ${mediaqueries.phablet`
    font-size: 32px;
  `}
`;

const HeroSubtitle = styled.div`
  position: relative;
  display: flex;
  font-size: 18px;
  color: ${(p) => p.theme.colors.grey};

  ${(p) => mediaqueries.phablet`
    font-size: 14px;
    flex-direction: column;

    strong {
      display: block;
      font-weight: 500;
      margin-bottom: 5px;
    }
  `}
`;

// TODO: Fix image height on mobile!!
const HeroImage = styled.div`
  position: relative;
  z-index: 1;
  width: 100%;
  max-width: 944px;
  height: 426px;
  overflow: hidden;
  margin: 0 auto;
  box-shadow: 0 30px 60px -10px rgba(0, 0, 0, 0.2),
    0 18px 36px -18px rgba(0, 0, 0, 0.22);

  & > img {
    object-fit: cover;
  }

  ${mediaqueries.tablet`
    max-width: 100%;
  `}

  ${mediaqueries.phablet`
    margin: 0 auto;
    width: calc(100vw - 40px);
    height: 220px;

    & > div {
      height: 220px;
    }
`}
`;