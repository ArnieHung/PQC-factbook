import React, { useState } from 'react';
import ReactFlow, {
  ReactFlowProvider,
  Background,
  Controls,
  addEdge,
} from 'react-flow-renderer';

import Teaser from './Teaser.js';
import { Link } from "gatsby";
//import { baseColors } from 'themes';

const offset = {x: 100, y:100}

const init_elements = [
  {
    id: 'LWE',
    data: { label: 'LWE'},
    position: { x: offset.x, y: offset.y },
    targetPosition: 'right'
  },
  {
    id: 'Ring-LWE',
    data: { label: 'Ring-LWE'},
    position: { x: offset.x + 200, y: offset.y - 100 },
    sourcePosition: 'left',
    targetPosition: 'right'
  },
  {
    id: 'M-LWE',
    data: { label: 'M-LWE'},
    position: { x: offset.x + 200, y: offset.y },
    targetPosition: 'right',
    sourcePosition: 'left'
  },
  {
    id: 'LWR',
    data: { label: 'LWR'},
    position: { x: offset.x + 200 , y: offset.y + 100},
    targetPosition: 'right',
    sourcePosition: 'left'
  },
  {
    id: 'NewHope',
    data: { label: 'NewHope'},
    position: { x: offset.x + 400, y: offset.y - 100},
    sourcePosition: 'left'
  },
  {
    id: 'Kyber',
    data: { label:<Link to="/Kyber/Kyber_Overview">Kyber</Link>},
    position: { x: offset.x + 400, y: offset.y },
        sourcePosition: 'left'
  },
  {
    id: 'Saber',
    data: { label: 'Saber'},
    position: { x: offset.x + 400, y: offset.y + 100 },
        sourcePosition: 'left'
  },
  {
    id: 'e1',
    source: 'Ring-LWE',
    target: 'LWE',
    animated: true,
    arrowHeadType: 'arrow'
  },
  {
    id: 'e2',
    source: 'M-LWE',
    target: 'LWE',
    animated: true,
    arrowHeadType: 'arrow'
  },
  {
    id: 'e3',
    source: 'LWR',
    target: 'LWE',
    animated: true,
    arrowHeadType: 'arrow'
  },
  {
    id: 'e4',
    target: 'Ring-LWE',
    source: 'NewHope',
    animated: true,
    arrowHeadType: 'arrow'
  },
  {
    id: 'e5',
    target: 'M-LWE',
    source: 'Kyber',
    animated: true,
    arrowHeadType: 'arrow'
  },
  {
    id: 'e6',
    target: 'LWR',
    source: 'Saber',
    animated: true,
    arrowHeadType: 'arrow'
  },
];


const onLoad = (rf) => rf.fitView({ padding: 0.2 });
const hasTouch = typeof window !== 'undefined' && 'ontouchstart' in window;

export default () => {
  const [elements, setElements] = useState(init_elements);
  const onConnect = (params) => setElements((els) => addEdge(params, els));

  return (
    <Teaser
      title="Lattice"
      description="Here is some short description about lattice-based pqc candidates."
    >
      <ReactFlowProvider>
        <ReactFlow
          elements={elements}
          onLoad={onLoad}
          zoomOnScroll={false}
          onConnect={onConnect}
          paneMoveable={!hasTouch}
        >
          <Background color={'#53606C'} gap={15} />
          <Controls showInteractive={false} />
        </ReactFlow>
      </ReactFlowProvider>
    </Teaser>
  );
};
