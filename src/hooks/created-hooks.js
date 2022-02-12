
import { useEffect, useState } from "react";

const useCounter = () =>{
    const [counter, setCounter] = useState(0);

  useEffect(() => {
   const interval = setInterval(() =>{
setCounter((prevCounter) => prevCounter + 1);
   });

    return () => clearInterval(interval);
    
  }, []);

  return (
  <Card>{counter}</Card>
  
  );
  
}

export default useCounter;
