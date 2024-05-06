import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import CourseContainer from './CourseContainer';

test('CourseContainer should render correctly with the expected elements', () => {
  render(
    <MemoryRouter>
      <CourseContainer />
    </MemoryRouter>
  );

  const heading = screen.getByRole('heading', { name: /Courses/i });
  expect(heading).toBeInTheDocument();

  const button = screen.getByRole('button', { name: /View All/i });
  expect(button).toBeDisabled();

  const cards = screen.getAllByRole('img');
  expect(cards.length).toBe(4);
});
