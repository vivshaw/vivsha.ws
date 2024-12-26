import styled from "@emotion/styled"
import mediaqueries from "@styles/media"

export const Paragraph = styled.p`
  line-height: 1.756;
  font-size: 22px;
  color: ${(p) => p.theme.colors.articleText};
  font-family: ${(p) => p.theme.fonts.book};
  transition: ${(p) => p.theme.colorModeTransition};
  margin: 0 auto 35px;
  width: 100%;

  b {
    font-weight: 800;
  }

  ${mediaqueries.tablet`
    margin: 0 auto 25px;
  `};

  ${mediaqueries.phablet`
    padding: 0 20px;
  `};
`