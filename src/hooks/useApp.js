import { useContext } from 'react';

import { AppDispatchContext, AppStateContext } from '@/contexts/AppContext';

function useAppState() {
  const context = useContext(AppStateContext);
  if (context === undefined) throw new Error('useAppState must be used within a AppProvider');
  return context;
}

function useAppDispatch() {
  const context = useContext(AppDispatchContext);
  if (context === undefined) throw new Error('useAppDispatch must be used within a AppProvider');
  return context;
}

/**
 * Custom React hook for accessing App Context.
 *
 * This hook is a convenience function that combines the `useAppState` and
 * `useAppDispatch` hooks to provide both the application state and dispatch
 * function in a single call.
 *
 * @returns {[contextState , dispatchContextState]} An array containing the application state and dispatch function.
 */
function useApp() {
  return [useAppState(), useAppDispatch()];
}

export default useApp;
