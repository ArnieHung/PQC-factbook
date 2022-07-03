
import ReactFlow from 'react-flow-renderer';
import { Link } from "gatsby";

const elements = [
  {
    id: '1',
    type: 'input', // input node
    data: { label: <Link to="/Kyber/MLWE_Assumption">M-LWE</Link> },
    position: { x: 0, y: 0 },
    sourcePosition: 'right'
  },
  // default node
  {
    id: '2',
    // you can also pass a React component as a label
    data: { label: <Link to="/Kyber/CPA_wo_Compression">IND-CPA Kyber.PKE'</Link> },
    position: { x: 200, y: 0 },
    targetPosition: 'left'
  },
  {
    id: '3',
    data: { label: <Link to="/Kyber/Kyber_PKE/">IND-CPA Kyber.PKE</Link> },
    position: { x: 200, y: 100 },
    sourcePosition: 'right',
    targetPosition: 'top'
  },
  {
    id: '4',
    type: 'output', // output node
    data: { label: <Link to="/Kyber/Kyber_KEM">IND-CCA Kyber.KEM</Link> },
    position: { x: 450, y: 150 },
    targetPosition: 'left'
  },
  // animated edge
  { id: 'e1-2', source: '1', target: '2', arrowHeadType: 'arrow'},
  { id: 'e2-3', source: '2', target: '3', label: 'Compression',  arrowHeadType: 'arrow' },
  { id: 'e3-4', source: '3', target: '4', label: <Link to="/Kyber/Kyber_KEM#fujisaki-okamoto(fo)transformation"> FO w/ implicit rej. </Link>, arrowHeadType: 'arrow' }
];
  export default () => (
    <div style={{ height: 300, width: 700 }}>
      <ReactFlow
        elements={elements}
        nodesDraggable={false}
        defaultZoom= {1}

      />
    </div>
  );
