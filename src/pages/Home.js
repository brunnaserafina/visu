import React, { useContext, useEffect, useState } from 'react';
import Menu from '../common/Menu';
import { getTravels } from '../services/visu';

import TravelInfo from '../common/TravelInfo';
import TravelContext from '../contexts/TravelContext';

export default function Home({ travelsToShow }) {
  const { travels, setTravels } = useContext(TravelContext);

  const maping = travelsToShow ? travelsToShow : travels;

  useEffect(() => {
    getTravels()
      .catch((response) => console.log(response))
      .then((response) => {
        setTravels(response.data);
      });
  }, []);

  return (
    <>
      {maping.map((travel, index) => (
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
