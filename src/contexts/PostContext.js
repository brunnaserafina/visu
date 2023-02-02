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
  const [acommodation, setAccommodation] = useState({});
  const [picture, setPicture] = useState([]);

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
        acommodation,
        setAccommodation,
        picture,
        setPicture,
      }}
    >
      {children}
    </PostContext.Provider>
  );
}
