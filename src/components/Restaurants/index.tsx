import { useState, useCallback, ChangeEvent } from 'react';

import { Container, InputBox } from './styles';
import searchIcon from '../../assets/search.svg';
import { Restaurant } from '../../dtos/Restaurant';
import { api } from '../../services/api';
import { RestaurantItem } from '../RestaurantItem';

export function Restaurants() {
  const [postcode, setPostcode] = useState('');
  const [restaurants, setRestaurants] = useState<Restaurant[]>([]);

  const handleSearchRestaurants = useCallback(() => {
    api
      .get<{ Restaurants: Restaurant[] }>(`restaurants/bypostcode/${postcode}`)
      .then(response => {
        const restaurantsData = response.data.Restaurants.filter(
          ({ IsOpenNow }) => IsOpenNow
        );

        setRestaurants(restaurantsData);
      });
  }, [postcode]);

  const showEmptyMessage = useCallback(() => {
    return restaurants.length < 1;
  }, [restaurants]);

  const handlePostcodeChange = ({ target }: ChangeEvent<HTMLInputElement>) => {
    setPostcode(target.value);
  };

  return (
    <Container>
      <InputBox>
        <input type="text" onChange={handlePostcodeChange} />
        <img
          src={searchIcon}
          alt="search icon"
          onClick={handleSearchRestaurants}
        />
      </InputBox>

      {showEmptyMessage() ? (
        <h2>Please, search by a postcode</h2>
      ) : (
        <ul>
          {restaurants.map(restaurant => (
            <RestaurantItem key={restaurant.Id} restaurant={restaurant} />
          ))}
        </ul>
      )}
    </Container>
  );
}
