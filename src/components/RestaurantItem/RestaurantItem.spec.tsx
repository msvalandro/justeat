import { render, screen } from '@testing-library/react';
import { RestaurantItem } from '.';
import { Restaurant } from '../../dtos/Restaurant';

describe('RestaurantItem component', () => {
  it('should renders correctly', () => {
    const restaurant: Restaurant = {
      Id: 1,
      Name: 'Test',
      LogoUrl: 'http://fakeurl',
      RatingStars: 4.5,
      Cuisines: [{ Name: 'Mexican', SeoName: 'mexican' }],
      IsOpenNow: false,
    };

    render(<RestaurantItem restaurant={restaurant} />);

    const title = screen.getByText('Test');

    expect(title).toBeInTheDocument();
  });
});
