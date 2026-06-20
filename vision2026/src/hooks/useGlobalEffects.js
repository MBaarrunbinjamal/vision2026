import { useEffect } from 'react';
import { initGlobalEffects } from '../utils/globalEffects';

export const useGlobalEffects = () => {
  useEffect(() => {
    initGlobalEffects();
  }, []);
}; 