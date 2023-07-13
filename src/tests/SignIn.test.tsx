import { render, fireEvent } from '@testing-library/react';
import LoginForm from '../pages/SignIn/Login';
import { NavigateFunction, useNavigate } from 'react-router-dom';


jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useNavigate: jest.fn(),
}));

describe('Login', () => {
  it('should update login inputs', () => {
    const navigateMock = jest.fn();
    (useNavigate as jest.Mock<NavigateFunction>).mockImplementation(() => navigateMock);
    const { getByLabelText } = render(<LoginForm />);

    const usernameInput = getByLabelText('Nome do usuário') as HTMLInputElement;
    const passwordInput = getByLabelText('Senha') as HTMLInputElement;

    fireEvent.change(usernameInput, { target: { value: 'john.doe' } });
    fireEvent.change(passwordInput, { target: { value: 'password123' } });

    expect(usernameInput.value).toBe('john.doe');
    expect(passwordInput.value).toBe('password123');
  });

});
