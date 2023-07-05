import React from 'react';
import { render } from '@testing-library/react';
import SignUpCall from '../pages/SignUp/SignUpCall';

jest.mock('react-router-dom', () => ({
  useNavigate: jest.fn(),
}));

describe('Sign Up Tests', () => {
  it('renders the SignUpCall component correctly', () => {
    const { getByText } = render(<SignUpCall />);

    const callTextElement = getByText('Tenha seu time de voleibol no seu controle');

    expect(callTextElement).toBeInTheDocument();
  });
});
