import { useState, useCallback, ChangeEvent, KeyboardEvent } from 'react';

import searchIcon from '../../assets/search.svg';
import { Container, InputBox } from './styles';
import { Restaurant } from '../../dtos/Restaurant';
import { api } from '../../services/api';
import { RestaurantItem } from '../RestaurantItem';
import { Loading } from '../Loading';

export function Restaurants() {
  const [postcode, setPostcode] = useState('');
  const [restaurants, setRestaurants] = useState<Restaurant[]>([]);
  const [loading, setLoading] = useState(false);

  const handleSearchRestaurants = useCallback(() => {
    setLoading(true);

    api
      .get<{ Restaurants: Restaurant[] }>(`restaurants/bypostcode/${postcode}`)
      .then(response => {
        const restaurantsData = response.data.Restaurants.filter(
          ({ IsOpenNow }) => IsOpenNow
        );

        setRestaurants(restaurantsData);
        setLoading(false);
      });
  }, [postcode]);

  const showEmptyMessage = useCallback(() => {
    return restaurants.length < 1 && !loading;
  }, [restaurants, loading]);

  const handlePostcodeChange = ({ target }: ChangeEvent<HTMLInputElement>) => {
    setPostcode(target.value);
  };

  const handleKeyDown = ({ key }: KeyboardEvent) => {
    if (key === 'Enter') {
      handleSearchRestaurants();
    }
  };

  return (
    <Container>
      <InputBox>
        <input
          type="text"
          onChange={handlePostcodeChange}
          onKeyDown={handleKeyDown}
        />
        <img
          src={searchIcon}
          alt="search icon"
          onClick={handleSearchRestaurants}
        />
      </InputBox>

      {showEmptyMessage() && <h2>Please, search by a postcode</h2>}

      {loading ? (
        <Loading />
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
