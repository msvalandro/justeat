import { fireEvent, render, screen } from '@testing-library/react';
import axios from 'axios';
import { Restaurants } from '.';
import { api } from '../../services/api';

jest.mock('../../services/api');

describe('Restaurants component', () => {
  const mockedData = {
    data: {
      Restaurants: [
        {
          Id: 1,
          Name: 'Test',
          LogoUrl: 'http://fakeurl',
          RatingStars: 4.5,
          Cuisines: [{ Name: 'Mexican', SeoName: 'mexican' }],
          IsOpenNow: false,
        },
        {
          Id: 2,
          Name: 'Test 2',
          LogoUrl: 'http://fakeurl2',
          RatingStars: 3,
          Cuisines: [{ Name: 'Japanese', SeoName: 'japanese' }],
          IsOpenNow: true,
        },
      ],
    },
  };

  it('should renders empty message', () => {
    render(<Restaurants />);

    const emptyMessage = screen.getByText('Please, search by a postcode');

    expect(emptyMessage).toBeInTheDocument();
  });

  it('should renders restaurants list', async () => {
    (api as jest.Mocked<typeof axios>).get.mockResolvedValueOnce(mockedData);

    render(<Restaurants />);

    const input = screen.getByTestId('input');
    const icon = screen.getByAltText('search icon');

    fireEvent.change(input, { target: { value: 'se19a' } });
    fireEvent.keyDown(input, { key: 'Escape' });
    fireEvent.click(icon);

    const loading = await screen.findByTestId('loading');

    expect(loading).toBeInTheDocument();

    const restaurantsList = await screen.findByTestId('restaurants-list');

    expect(restaurantsList.childNodes.length).toBeGreaterThan(0);
  });

  it('should renders error message', async () => {
    (api as jest.Mocked<typeof axios>).get.mockRejectedValueOnce(
      new Error('Some error')
    );

    render(<Restaurants />);

    const input = screen.getByTestId('input');

    fireEvent.change(input, { target: { value: 'se19' } });
    fireEvent.keyDown(input, { key: 'Enter' });

    const loading = await screen.findByText(
      'An error occurred while trying to get restaurants, please try again.'
    );

    expect(loading).toBeInTheDocument();
  });
});
