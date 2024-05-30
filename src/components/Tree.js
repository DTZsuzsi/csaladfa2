import React from 'react';
import Tree from 'react-d3-tree';


const linkStyle = {
  stroke: 'red',
  strokeWidth: 2,
};

const MyTreeComponent = () => {
  const treeData = [{ name: 'Nana', parents: [{ name: 'Szabolcs' }, { name: 'Zsuzsi' }]},{ name: 'Samu', parents: [{ name: 'Zsuzsi' }, { name: 'Szabolcs' }] } ];
  
  return (<Tree data={treeData} pathFunc='straight' orientation="vertical" styles={{ links: linkStyle }} />);
};

export default MyTreeComponent


