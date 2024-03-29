import React, { useState } from 'react';
import InputMask from 'react-input-mask';
import { useAuth } from '../../../../auth/AuthContext';
import { useAthlete } from '../../../../hooks/Athlete';
import { AthleteData, athletePositions, translateAthleteBackData } from '../utils/interfaces';
import { Container, ContainerBackground, Buttons, AddButton, BackButton } from './styles';
import { FormDrawerWrapper } from '../../../../components/FormWrapper';
import api from '../../../../services/api';

const AddAthlete: React.FC = () => {
  const { admin } = useAuth();
  const { setResetActions, setActionModalInfo } = useAthlete();
  const [athleteData, setAthleteData] = useState<AthleteData>({
    name: '',
    position: '',
    phone: '',
    rg: '',
    cpf: '',
    birth: '',
    email: '',
    teamId: '',
  } as AthleteData);

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const backAddAtheleteData = translateAthleteBackData({ ...athleteData, teamId: admin.teamId });

    try {
      await api.post('/api/athlete/create', backAddAtheleteData, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('token')}`,
        },
      });

      setActionModalInfo({ text: 'Atleta criada com sucesso' });
    } catch (err) {
      setActionModalInfo({ text: 'Erro ao criar atleta' });
      setResetActions();
    }
  };

  return (
    <ContainerBackground>
      <Container>
        <form onSubmit={onSubmit}>
          <FormDrawerWrapper title='Adicionar Atleta'>
            {/* <ImgWrapper>
              <img src={addUser} />
              <input type="file" accept="image/*" name="imageInput" id="imageInput" />
            </ImgWrapper> */}
            <label htmlFor='name'>Nome*</label>
            <input
              id='name'
              required
              type="text"
              value={athleteData.name}
              onChange={e => setAthleteData({ ...athleteData, name: e.target.value })}
            />
            <label htmlFor='position'>Posição*</label>
            <select id='position' value={athleteData.position} onChange={e => setAthleteData({ ...athleteData, position: e.target.value.toString() })}>
              {athletePositions.map(position => (
                <option id='position' key={position.type} value={position.type}>{position.value}</option>
              ))}
            </select>
            <label htmlFor='phone'>Telefone*</label>
            <InputMask
              mask="(99) 99999-9999"
              id="phone"
              type="text"
              value={athleteData.phone}
              onChange={e => setAthleteData({ ...athleteData, phone: e.target.value })}
            />
            <label htmlFor='rg'>RG</label>
            <input
              id='rg'
              type="text"
              value={athleteData.rg}
              onChange={e => setAthleteData({ ...athleteData, rg: e.target.value })}
            />
            <label htmlFor='cpf'>CPF</label>
            <InputMask
              mask="999.999.999-99"
              id="cpf"
              type="text"
              value={athleteData.cpf}
              onChange={e => setAthleteData({ ...athleteData, cpf: e.target.value })}
            />
            <label htmlFor='birth'>Data de Nascimento*</label>
            <input
              id='birth'
              required
              type="date"
              value={athleteData.birth}
              onChange={e => setAthleteData({ ...athleteData, birth: e.target.value })}
            />
            <label htmlFor='email'>Email*</label>
            <input
              id='email'
              required
              type="email"
              value={athleteData.email}
              onChange={e => setAthleteData({ ...athleteData, email: e.target.value })}
            />
          </FormDrawerWrapper>
          <Buttons>
            <BackButton onClick={() => setResetActions()}>Voltar</BackButton>
            <AddButton type="submit">Adicionar Atleta</AddButton>
          </Buttons>
        </form>
      </Container>
    </ContainerBackground>
  );
};

export default AddAthlete;
