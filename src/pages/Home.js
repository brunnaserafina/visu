import React, { useEffect, useState } from 'react';
import Menu from '../common/Menu';
import { getTravels } from '../services/visu';

import TravelInfo from '../common/TravelInfo';

export default function Home() {
  const [travels, setTravels] = useState([]);

  useEffect(() => {
    getTravels()
      .catch((response) => console.log(response))
      .then((response) => {
        setTravels(response.data);
      });
  }, []);

  return (
    <>
      {travels.map((travel, index) => (
        <TravelInfo
          key={index}
          id={travel.id}
          name={travel.users.email}
          city={travel.city_destination}
          date={travel.date_start}
          avaliation={travel.avaliation}
          center={false}
          index={index}
        />
      ))}

      <Menu />
    </>
  );
}

