import { render, screen, fireEvent } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import SingleCourseCard from './SingleCourseCard';

const mockNavigate = jest.fn(); 

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useNavigate: () => mockNavigate, 
}));

test('SingleCourseCard should navigate to the correct course page on click', () => {
  render(
    <MemoryRouter>
      <SingleCourseCard
        course={{ id: 1, img: 'test.jpg', title: 'Test Course', text: 'Test text' }}
      />
    </MemoryRouter>
  );

  const card = screen.getByRole('img');

  fireEvent.click(card);

  expect(mockNavigate).toHaveBeenCalledWith('/courses/1');
});
