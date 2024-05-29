import React from 'react';
import Tree from 'react-d3-tree';

const linkStyle = {
  stroke: 'red',
  strokeWidth: 2,
};

const MyTreeComponent = () => {
  const treeData = [{ name: 'Szabolcs', children: [{ name: 'Nana' }, { name: 'Samu' }] },{ name: 'Zsuzsi', children: [{ name: 'Nana' }, { name: 'Samu' }] } ];

  return (<Tree data={treeData} pathFunc='straight' styles={{ links: linkStyle }} />);
};

export default MyTreeComponent