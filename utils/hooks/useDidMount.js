import React, { useEffect } from 'react';

const useDidMount = () => {
  const mountRef = React.useRef(false);
  useEffect(() => {
    mountRef.current = true;
  }, []);
  return mountRef.current;
};

export default useDidMount;
