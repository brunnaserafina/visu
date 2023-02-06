import { createContext, useState } from 'react';

const TravelContext = createContext();
export default TravelContext;

export function TravelProvider({ children }) {
  const [travels, setTravels] = useState([]);

  return <TravelContext.Provider value={{ travels, setTravels }}>{children}</TravelContext.Provider>;
}
