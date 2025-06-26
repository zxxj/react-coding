import { useEffect, useRef } from 'react';
import './App.css';
import Son from './Son';

function App() {
  const inputRef = useRef<HTMLInputElement>(null);

  console.log(inputRef);

  useEffect(() => {
    inputRef.current?.focus();
  }, []);

  return (
    <>
      <Son ref={inputRef} />
    </>
  );
}

export default App;
