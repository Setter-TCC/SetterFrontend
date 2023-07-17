import { render, fireEvent } from '@testing-library/react';
import Header from '../components/Header';
import { NavigateFunction, useNavigate } from 'react-router-dom';
import Sidebar from '../components/Sidebar';
import { SidebarData } from '../components/utils/const';
import InfoModal from '../components/InfoModal';

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useNavigate: jest.fn(),
}));

const mockButtons = [
  {
    text: 'Button 1',
    backgroundColor: 'blue',
    textColor: 'white',
    isFull: true,
    path: '/button1',
  },
  {
    text: 'Button 2',
    backgroundColor: 'red',
    textColor: 'black',
    isFull: false,
    path: '/button2',
  },
];

describe('Header', () => {
  it('should correctly render the header buttons', () => {
    const { getByText } = render(<Header buttons={mockButtons} />);

    mockButtons.forEach((button) => {
      const buttonElement = getByText(button.text);
      expect(buttonElement).toBeInTheDocument();
    });
  });

  it('should call the onClick function when clicking the button', () => {
    const mockNavigate = jest.fn();
    (useNavigate as jest.Mock<NavigateFunction>).mockImplementation(() => mockNavigate);
    const { getByText } = render(
      <Header
        buttons={mockButtons}
      />
    );

    const button1 = getByText('Button 1');
    fireEvent.click(button1);

    expect(mockNavigate).toHaveBeenCalledTimes(1);
    expect(mockNavigate).toHaveBeenCalledWith('/button1');

    const button2 = getByText('Button 2');
    fireEvent.click(button2);

    expect(mockNavigate).toHaveBeenCalledTimes(2);
    expect(mockNavigate).toHaveBeenCalledWith('/button2');
  });
});


describe('Sidebar', () => {
  it('should correctly render navigation items', () => {
    const { getByText } = render(<Sidebar />);

    SidebarData.forEach((data) => {
      const titleElement = getByText(data.title);
      expect(titleElement).toBeInTheDocument();
    });
  });
});



describe('InfoModal', () => {
  it('deve renderizar corretamente o texto e o botão', () => {
    const text = 'Este é um exemplo de modal informativo';
    const { getByText, getByRole } = render(
      <InfoModal text={text} />
    );

    const textElement = getByText(text);
    expect(textElement).toBeInTheDocument();

    const buttonElement = getByRole('button');
    expect(buttonElement).toBeInTheDocument();
    expect(buttonElement).toHaveTextContent('Continuar');
  });
});
