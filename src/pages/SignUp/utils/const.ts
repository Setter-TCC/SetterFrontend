import { IButton } from '../../../components/utils/interfaces';
import { StepProps } from '../Register';

const backStep: IButton = {
  text: 'Anterior',
  textColor: 'var(--color-primary-blue)',
  backgroundColor: 'var(--color-primary-white)',
  isFull: false,
  path: ''
};

const nextStep: IButton = {
  text: 'Próxima etapa',
  textColor: 'var(--color-primary-white)',
  backgroundColor: 'var(--color-blue-soft)',
  isFull: true,
  path: '',
};


export const buttons: IButton[] = [
  {
    text: 'Entrar',
    textColor: 'var(--color-primary-blue)',
    backgroundColor: 'var(--color-primary-white)',
    isFull: false,
    path: '/signin',
  },
];

export const registerSteps: StepProps[] = [
  {
    step: 'Etapa 1',
    title: 'Crie uma conta de administrador',
    inputs: [{
      title: 'Nome',
      type: 'text',
    },
    {
      title: 'Email',
      type: 'mail',
    },
    {
      title: 'Telefone',
      type: 'text',
    },
    {
      title: 'Senha',
      type: 'text',
    }
    ],
    buttons: { next: nextStep },
  },
  {
    step: 'Etapa 2',
    title: 'Crie uma conta para sua equipe',
    inputs: [{
      title: 'Nome da Equipe',
      type: 'text',
    },
    {
      title: 'CNPJ da Equipe (opcional)',
      type: 'text',
    },
    {
      title: 'Email',
      type: 'mail',
    },
    ],
    suits: [
      {
        text: 'Feminino',
        textColor: 'var(--color-primary-blue)',
        backgroundColor: 'var(--color-primary-white)',
        isFull: false,
        path: ''
      },
      {
        text: 'Masculino',
        textColor: 'var(--color-primary-blue)',
        backgroundColor: 'var(--color-primary-white)',
        isFull: false,
        path: ''
      },
      {
        text: 'Misto',
        textColor: 'var(--color-primary-blue)',
        backgroundColor: 'var(--color-primary-white)',
        isFull: false,
        path: ''
      },

    ],
    buttons: { back: backStep, next: nextStep },
  },
  {
    step: 'Etapa 3',
    title: 'Adicione um técnico para a equipe',
    inputs: [{
      title: 'Nome',
      type: 'text',
    },
    {
      title: 'Email',
      type: 'mail',
    },
    {
      title: 'Telefone',
      type: 'text',
    },
    {
      title: 'CREF (opcional)',
      type: 'text',
    }
    ],
    buttons: { back: backStep, next: nextStep },
  },
];
