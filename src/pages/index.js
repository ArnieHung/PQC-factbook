import React from "react"
import ReactFlow from 'reactflow';
import HomePageThemeProvider from '../components/theme/HomePageThemeProvider.js';
import Lattice from '../components/teasers/Lattice.js';
import styled from '@emotion/styled-base';
import { Flex, Box } from 'reflexbox';
import { getThemeColor, getThemeSpacePx } from '../utils/css-utils';



// const elements_kyber = [
//   {
//     id: 'LWE',
//     data: { label: 'LWE'},
//     position: { x: offset.x + 600, y: offset.y },
//     targetPosition: 'right'
//   },
//   {
//     id: 'Ring-LWE',
//     data: { label: 'Ring-LWE'},
//     position: { x: offset.x + 800, y: offset.y },
//     sourcePosition: 'left'
//   }
// ]
//
//
// const onElementClick = (event, element) => {
//   console.log('hi');
// }


const PageWrapper = styled(Flex)`
  color: ${getThemeColor('text')};
  width: 100%;
  position: relative;
  flex-direction: column;
  height: 100vh;
  position: relative;
`;

const PageContent = styled(Box)`
  flex: 1 0 auto;
`;

const CenteredContent = styled(Box)`
  max-width: ${(p) =>
    p.maxWidth || (p.big ? p.theme.maxWidthBig : p.theme.maxWidth)};
  margin-left: auto;
  margin-right: auto;
  margin-top: 64px;
  margin-down: auto;

  padding-left: ${getThemeSpacePx(3)};
  padding-right: ${getThemeSpacePx(3)};
`;

export default () => {
  return (
    <HomePageThemeProvider>
      <PageWrapper>
        <PageContent>
          <CenteredContent>
             <Lattice/>
          </CenteredContent>
        </PageContent>
      </PageWrapper>
    </HomePageThemeProvider>

    // <div  style={{ height: 1000, width: 2000 }}>
    //   <ReactFlow
    //     elements={elements}
    //     nodesDraggable={false}
    //     defaultZoom= {1}
    //     onElementClick = {onElementClick}
    //  />
    //
    // </div>
  )
}
