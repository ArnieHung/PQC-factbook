import React from 'react';
import styled from '@emotion/styled';
import { Flex, Box } from 'reflexbox';
import Link from 'gatsby-link';

import { H2, Text } from '../typo';
//import Icon from 'components/Icon';
import { baseColors } from '../theme/homePageTheme.js';
import { device, getThemeSpacePx } from '../../utils/css-utils.js';


const Wrapper = styled(Flex)`
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
`;

const ReactFlowWrapper = styled(Box)`
  height: 400px;
  background: ${(p) => (p.isDark ? baseColors.violet : 'white')};
  border-radius: 10px;
  order: 2;
  margin: ${getThemeSpacePx(4)} ${getThemeSpacePx(0)};
  border: solid rgba(26, 25, 43, 0.054) 1.5px;
  box-shadow: 0 2.8px 2.2px rgba(26, 25, 43, 0.014),
    0 12.5px 10px rgba(26, 25, 43, 0.02),
    0 22.3px 17.9px rgba(26, 25, 43, 0.022),
    0 41.8px 33.4px rgba(26, 25, 43, 0.026), 0 100px 80px rgba(26, 25, 43, 0.02);
  @media ${device.tablet} {
    order: ${(p) => p.order};
  }
  @media ${device.mobile} {
    margin-top: ${getThemeSpacePx(3)};
  }
  .react-flow__controls {
    opacity: ${(p) => (p.isDark ? 0.5 : 1)};
  }
`;

const DocsLink = styled(Link)`
  display: flex;
  font-weight: bold;
  align-items: center;
  margin-top: 16px;
  @media ${device.mobile} {
    margin-top: ${getThemeSpacePx(0)};
  }
  svg {
    transform: translateX(0px);
    transition: all 0.125s ease-in-out;
  }
  &:hover {
    svg {
      transform: translateX(5px);
      transition: all 0.125s ease-in-out;
    }
  }
`;

const DescriptionWrapper = styled(Box)`
  order: 1;
  margin-bottom: ${getThemeSpacePx(3)};
  @media ${device.tablet} {
    order: ${(p) => p.order};
  }
  @media ${device.mobile} {
    margin-bottom: ${getThemeSpacePx(0)};
  }
`;

const Description = ({ title, description }) => (
  <DescriptionWrapper width={[1, 1, 0.35]}>
    <H2>{title}</H2>
    <Text style={{ opacity: 0.7 }}>{description}</Text>
    <DocsLink to="/docs">
      Documentation{'  '}
    
    </DocsLink>
  </DescriptionWrapper>
);

export default ({
  title,
  description,
  textPosition = 'left',
  isDark = false,
  children,
}) => {
  const reactFlowOrder = textPosition === 'left' ? 2 : 1;

  return (
    <Wrapper mb={[6, 6, 7]}>
      {textPosition === 'left' && (
        <Description order={1} title={title} description={description} />
      )}
      <ReactFlowWrapper
        width={[1, 1, 0.6]}
        isDark={isDark}
        order={reactFlowOrder}
      >
        {children}
      </ReactFlowWrapper>
      {textPosition !== 'left' && (
        <Description order={2} title={title} description={description} />
      )}
    </Wrapper>
  );
};
