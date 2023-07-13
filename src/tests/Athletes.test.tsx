import { render, fireEvent } from '@testing-library/react';
import AthletesTableHeader from '../pages/Athletes/components/AthleteTable/AthleteTableHeader';
import { AddAthlete } from '../pages/Athletes/components/AthleteActions';

describe('Athlete Table Header', () => {
  it('should correctly render search and button elements', () => {
    const { getByPlaceholderText, getByText } = render(<AthletesTableHeader />);
    const searchInput = getByPlaceholderText('Pesquisar por nome');
    expect(searchInput).toBeInTheDocument();

    const addButton = getByText('Adicionar Atleta');
    expect(addButton).toBeInTheDocument();
    expect(addButton).toHaveStyle('background-color: var(--color-primary-blue)');
    expect(addButton).toHaveStyle('color: var(--color-primary-white)');

  });
});



describe('Add Athlete Form', () => {
  it('should correctly update the form fields', () => {

    const { getByLabelText } = render(<AddAthlete />);

    const nameInput = getByLabelText('Nome*') as HTMLInputElement;
    const positionSelect = getByLabelText('Posição*') as HTMLSelectElement;
    const phoneInput = getByLabelText('Telefone*') as HTMLInputElement;
    const rgInput = getByLabelText('RG') as HTMLInputElement;
    const cpfInput = getByLabelText('CPF') as HTMLInputElement;
    const birthInput = getByLabelText('Data de Nascimento*') as HTMLInputElement;
    const emailInput = getByLabelText('Email*') as HTMLInputElement;

    fireEvent.change(nameInput, { target: { value: 'John Doe' } });
    fireEvent.change(positionSelect, { target: { value: '1' } });
    fireEvent.change(phoneInput, { target: { value: '(12) 34567-8900' } });
    fireEvent.change(rgInput, { target: { value: '12.123.132-1' } });
    fireEvent.change(cpfInput, { target: { value: '132.132.132-13' } });
    fireEvent.change(birthInput, { target: { value: '1990-01-01' } });
    fireEvent.change(emailInput, { target: { value: 'johndoe@example.com' } });

    expect(nameInput.value).toBe('John Doe');
    expect(positionSelect.value).toBe('1');
    expect(phoneInput.value).toBe('(12) 34567-8900');
    expect(rgInput.value).toBe('12.123.132-1');
    expect(cpfInput.value).toBe('132.132.132-13');
    expect(birthInput.value).toBe('1990-01-01');
    expect(emailInput.value).toBe('johndoe@example.com');

  });
});
