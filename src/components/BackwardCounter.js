import { useState, useEffect } from 'react';
import useCounter from '../hooks/created-hook2';

import Card from './Card';

const BackwardCounter = () => {
   const counter = useCounter();

  return <Card>{counter}</Card>;
};

export default BackwardCounter;
