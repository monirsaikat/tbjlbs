import React from 'react';
import { AppProviders } from './providers';
import { RootNavigator } from './navigation';

const App: React.FC = () => (
  <AppProviders>
    <RootNavigator />
  </AppProviders>
);

export default App;
