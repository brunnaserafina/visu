import { useContext } from 'react';
import PostContext from '../contexts/PostContext';

export default function FilterTravels(search) {
  const { travels } = useContext(PostContext);
  console.log('viagem', travels);

  const travelsFiltered = travels.filter((travel) => {
    travel.city_destination.toLowerCase().includes(search.toLowerCase());
  });

  return travelsFiltered;
}
