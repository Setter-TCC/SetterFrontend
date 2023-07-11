import { useNavigate, NavigateFunction } from 'react-router-dom';
import { fireEvent, render } from '@testing-library/react';
import SignUpCall from '../pages/SignUp/SignUpCall';
import { FormWrapper } from '../components/SignUpFormWrapper';
import AccountCreated from '../pages/AccountCreated';

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useNavigate: jest.fn(),
}));

describe('Sign Up Tests', () => {
  it('renders the SignUpCall component correctly', () => {
    const { getByText } = render(<SignUpCall />);

    const callTextElement = getByText('Tenha seu time de voleibol no seu controle');

    expect(callTextElement).toBeInTheDocument();
  });
});


describe('FormWrapper', () => {
  it('should render form wrapper component correctly', () => {
    const step = 'Etapa 1';
    const title = 'Crie uma conta de administrador';
    const inputBackgroundColor = 'var(--color-primary-white)';
    const children = <div>Conteúdo do formulário</div>;

    const { getByText } = render(
      <FormWrapper
        step={step}
        title={title}
        inputBackgroundColor={inputBackgroundColor}
      >
        {children}
      </FormWrapper>
    );

    const stepElement = getByText(step);
    expect(stepElement).toBeInTheDocument();

    const titleElement = getByText(title);
    expect(titleElement).toBeInTheDocument();
  });
});



describe('AccountCreated', () => {
  it('deve exibir corretamente o texto, estilos e comportamento do botão de acesso', () => {
    const navigateMock = jest.fn();
    (useNavigate as jest.Mock<NavigateFunction>).mockImplementation(() => navigateMock);

    const { getByText } = render(<AccountCreated />);

    const titleElement = getByText('Conta criada com sucesso!');
    expect(titleElement).toBeInTheDocument();

    const accessButton = getByText('Acessar Time');
    expect(accessButton).toBeInTheDocument();
    expect(accessButton).toHaveStyle('background-color: var(--color-primary-blue)');
    expect(accessButton).toHaveStyle('color: var(--color-primary-white)');
    fireEvent.click(accessButton);
    expect(navigateMock).toHaveBeenCalledWith('/athletes');
  });
});