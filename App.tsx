import { store } from '@src/features/store';
import MainNavigator from '@src/navigations/main-navigator';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import React from 'react';
import { Provider as ReduxProvider } from 'react-redux';

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
