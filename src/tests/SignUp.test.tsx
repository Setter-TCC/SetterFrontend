import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import SignUpCall from '../pages/SignUp/SignUpCall';
import { AdminForm } from '../pages/SignUp/Register/Forms/AdminForm';

const FormWrapper = ({ children }: { children: React.ReactNode }) => {
  return <form>{children}</form>;
};

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


describe('AdminForm', () => {
  it('should update fields on input change', () => {
    const updateFieldsMock = jest.fn();

    const { getByLabelText } = render(
      <AdminForm
        adminName=""
        adminEmail=""
        adminPhone=""
        adminUsername=""
        adminPassword=""
        updateFields={updateFieldsMock}
      />,
      {
        wrapper: FormWrapper,
      }
    );

    const nameInput = getByLabelText('Nome') as HTMLInputElement;
    const emailInput = getByLabelText('Email') as HTMLInputElement;
    const phoneInput = getByLabelText('Telefone') as HTMLInputElement;
    const usernameInput = getByLabelText('Nome do usuário') as HTMLInputElement;
    const passwordInput = getByLabelText('Senha') as HTMLInputElement;

    fireEvent.change(nameInput, { target: { value: 'John Doe' } });
    fireEvent.change(emailInput, { target: { value: 'john@example.com' } });
    fireEvent.change(phoneInput, { target: { value: '(123) 456-7890' } });
    fireEvent.change(usernameInput, { target: { value: 'johndoe' } });
    fireEvent.change(passwordInput, { target: { value: 'password123' } });

    expect(updateFieldsMock).toHaveBeenCalledWith({
      adminName: 'John Doe',
      adminEmail: 'john@example.com',
      adminPhone: '(123) 456-7890',
      adminUsername: 'johndoe',
      adminPassword: 'password123',
    });
  });
});
