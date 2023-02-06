import { createContext, useState } from 'react';

const PostContext = createContext();
export default PostContext;

export function PostProvider({ children }) {
  const [cityOrigin, setCityOrigin] = useState('');
  const [cityDestination, setCityDestination] = useState('');
  const [dateStart, setDateStart] = useState('');
  const [dateEnd, setDateEnd] = useState('');
  const [spent, setSpent] = useState();
  const [summary, setSummary] = useState('');
  const [avaliation, setAvaliation] = useState(0);
  const [attractions, setAttractions] = useState([]);
  const [restaurants, setRestaurants] = useState([]);
  const [accommodation, setAccommodation] = useState({});
  const [picture, setPicture] = useState([]);

  const reset = () => {
    setCityOrigin('');
    setCityDestination('');
    setDateStart('');
    setDateEnd('');
    setSpent('');
    setSummary('');
    setAvaliation(0);
    setAttractions([]);
    setRestaurants([]);
    setAccommodation({});
    setPicture([]);
  };

  return (
    <PostContext.Provider
      value={{
        cityOrigin,
        setCityOrigin,
        cityDestination,
        setCityDestination,
        dateStart,
        setDateStart,
        dateEnd,
        setDateEnd,
        spent,
        setSpent,
        summary,
        setSummary,
        avaliation,
        setAvaliation,
        attractions,
        setAttractions,
        restaurants,
        setRestaurants,
        accommodation,
        setAccommodation,
        picture,
        setPicture,
        reset,
      }}
    >
      {children}
    </PostContext.Provider>
  );
}
