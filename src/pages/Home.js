import React, { useContext, useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import Menu from '../common/Menu';
import TravelInfo from '../common/TravelInfo';
import { getTravels } from '../services/visu';
import TravelContext from '../contexts/TravelContext';

export default function Home({ travelsToShow }) {
  const { travels, setTravels } = useContext(TravelContext);

  const maping = travelsToShow ? travelsToShow : travels;

  useEffect(() => {
    getTravels()
      .catch(() => toast('Não foi possível carregar as publicações, tente novamente!'))
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
