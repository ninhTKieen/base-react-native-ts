import React from 'react';

import MainNavigator from '@src/navigations/main-navigator';
import {QueryClient, QueryClientProvider} from 'react-query';
import {Provider as ReduxProvider} from 'react-redux';
import {store} from '@src/features/store';

const queryClient = new QueryClient();

const App = (): JSX.Element => {
  return (
    <ReduxProvider store={store}>
      <QueryClientProvider client={queryClient}>
        <MainNavigator />
      </QueryClientProvider>
    </ReduxProvider>
  );
};

export default App;
