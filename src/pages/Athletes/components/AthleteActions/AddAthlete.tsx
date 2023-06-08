import React, { useState } from 'react';
import InputMask from 'react-input-mask';
import { useAuth } from '../../../../auth/AuthContext';
import { useAthlete } from '../../../../hooks/Athlete';
import { AthleteData, athletePositions, translateAthleteBackData } from '../utils/interfaces';
import { Container, ContainerBackground, Buttons, AddButton, BackButton } from './styles';
import { FormDrawerWrapper } from '../../../../components/FormWrapper';
import api from '../../../../services/api';

const AddAthlete: React.FC = () => {
  const [athleteData, setAthleteData] = useState<AthleteData>({} as AthleteData);
  const { setResetActions, setActionModalInfo } = useAthlete();
  const { admin } = useAuth();
  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    // Criar atleta
    const backAddAtheleteData = translateAthleteBackData({ ...athleteData, teamId: admin.teamId });
    console.log(backAddAtheleteData);
    try {
      await api.post('/api/athlete/create', backAddAtheleteData, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('token')}`,
        },
      });

      setActionModalInfo({ text: 'Atleta criada com sucesso' });
      // TODO: renderizar pagina de novo
      // setResetActions();
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
            <label>Nome</label>
            <input
              required
              type="text"
              value={athleteData.name}
              onChange={e => setAthleteData({ ...athleteData, name: e.target.value })}
            />
            <label>Posição</label>
            <select value={athleteData.position} onChange={e => setAthleteData({ ...athleteData, position: e.target.value.toString() })}>
              {athletePositions.map(position => (
                <option key={position.type} value={position.type}>{position.value}</option>
              ))}
            </select>
            <label>Telefone</label>
            <InputMask
              mask="(99) 99999-9999"
              id="phone"
              type="text"
              value={athleteData.phone}
              onChange={e => setAthleteData({ ...athleteData, phone: e.target.value })}
            />

            <label>RG</label>
            <InputMask
              mask="99.999.999-9"
              id="rg"
              type="text"
              value={athleteData.rg}
              onChange={e => setAthleteData({ ...athleteData, rg: e.target.value })}
            />
            <label>CPF</label>
            <InputMask
              mask="999.999.999-99"
              id="cpf"
              type="text"
              value={athleteData.cpf}
              onChange={e => setAthleteData({ ...athleteData, cpf: e.target.value })}
            />
            <label>Data de Nascimento</label>
            <input
              required
              type="date"
              value={athleteData.birth}
              onChange={e => setAthleteData({ ...athleteData, birth: e.target.value })}
            />
            <label>Email</label>
            <input
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
