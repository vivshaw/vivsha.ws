import React, { useEffect } from "react";
import { Global } from "@emotion/react";
import styled from "@emotion/styled";
import { useColorMode } from "theme-ui";

import NavigationFooter from "@components/Navigation/Navigation.Footer";
import NavigationHeader from "@components/Navigation/Navigation.Header";

import { globalStyles } from "@styles";

/**
 * <Layout /> needs to wrap every page as it provides styles, navigation,
 * and the main structure of each page. Within Layout we have the <Container />
 * which hides a lot of the mess we need to create our Desktop and Mobile experiences.
 */
const Layout: React.FC<{ children?: React.ReactNode }> = ({ children }) => {
  const [colorMode] = useColorMode();

  useEffect(() => {
    parent.postMessage({ theme: colorMode }, "*");
  }, [colorMode]);

  return (
    <Container>
      <Global styles={globalStyles} />
      <NavigationHeader />
      {children}
      <NavigationFooter />
    </Container>
  );
};

export default Layout;

const Container = styled.div`
  position: relative;
  background: ${(p) => p.theme.colors.background};
  transition: ${(p) => p.theme.colorModeTransition};
  min-height: 100vh;
`;
