import { createContext, useState } from 'react';

const PostContext = createContext();
export default PostContext;

export function PostProvider({ children }) {
  const [cityOrigin, setCityOrigin] = useState('');
  const [cityDestination, setCityDestination] = useState('');
  const [dateStart, setDateStart] = useState('');
  const [dateEnd, setDateEnd] = useState('');
  const [spent, setSpent] = useState(0);
  const [summary, setSummary] = useState('');
  const [avaliation, setAvaliation] = useState(0);

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
      }}
    >
      {children}
    </PostContext.Provider>
  );
}
