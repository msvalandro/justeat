import { useCallback } from 'react';

import { Restaurant } from '../../dtos/Restaurant';
import { Container, Content } from './styles';

interface RestaurantItemProps {
  restaurant: Restaurant;
}

export function RestaurantItem({ restaurant }: RestaurantItemProps) {
  const getCuisineDescription = useCallback(() => {
    return restaurant.Cuisines.map(cuisine => cuisine.Name).join(', ');
  }, [restaurant]);

  return (
    <Container>
      <img src={restaurant.LogoUrl} alt={restaurant.Name} />

      <Content>
        <div>
          <strong>{restaurant.Name}</strong>

          <span>⭐️ {restaurant.RatingStars}</span>
        </div>

        <p>Cuisines: {getCuisineDescription()}</p>
      </Content>
    </Container>
  );
}
