import React from 'react';

import { FeedProvider } from './FeedContext';
import Feed from './components/Feed';

const App = function (): JSX.Element {
  return (
    <FeedProvider>
      <Feed />
    </FeedProvider>
  );
};

export default App;
