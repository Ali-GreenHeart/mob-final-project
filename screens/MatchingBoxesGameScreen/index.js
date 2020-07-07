import React from 'react';
import Container from './src/components/Container';

export class MatchingBoxesGameScreen extends React.Component {
  render() {
    return (
      <Container startTiles={2} size={4} />
    );
  }
}
