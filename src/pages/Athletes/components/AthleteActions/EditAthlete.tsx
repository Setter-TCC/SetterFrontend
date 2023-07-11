import React, { useState } from 'react';
import InputMask from 'react-input-mask';
import { useAuth } from '../../../../auth/AuthContext';
import { useAthlete } from '../../../../hooks/Athlete';
import { Container, ContainerBackground, Buttons, AddButton, BackButton } from './styles';
import { FormDrawerWrapper } from '../../../../components/FormWrapper';
import { AthleteData, athletePositions, translateEditAthleteData } from '../utils/interfaces';
import api from '../../../../services/api';
import { convertToISODate } from '../../../../utils/format';


const EditAthlete: React.FC = () => {
  const [newAthleteData, setNewAthleteData] = useState<AthleteData>({
    name: '',
    position: '',
    phone: '',
    rg: '',
    cpf: '',
    birth: '',
    email: '',
    teamId: '',
  } as AthleteData);
  const { athleteAction, setResetActions, setActionModalInfo } = useAthlete();
  const { admin } = useAuth();

  const { selectedAthlete } = athleteAction;
  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!selectedAthlete) return;

    try {
      const backEditAthleteData = translateEditAthleteData({ ...selectedAthlete, teamId: admin.teamId }, newAthleteData);
      api.put('/api/athlete/update', backEditAthleteData, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('token')}`,
        },
      });
      setActionModalInfo({ text: 'Atleta editado(a) com sucesso!' });
    } catch (err) {
      console.log(err);
      setActionModalInfo({ text: 'Erro ao editar atleta!' });
    }
  };

  return (
    <ContainerBackground>
      <Container>
        <form onSubmit={onSubmit}>
          <FormDrawerWrapper title='Editar Atleta'>
            {/* <ImgWrapper>
              <RoundedImage src={selectedAthlete?.img} />
              <input type="file" accept="image/*" name="imageInput" id="imageInput" />
            </ImgWrapper> */}
            <label>Nome*</label>
            <input
              required
              defaultValue={selectedAthlete?.name}
              type="text"
              value={newAthleteData.name}
              onChange={e => setNewAthleteData({ ...newAthleteData, name: e.target.value })}
            />
            <label>Posição*</label>
            <select defaultValue={selectedAthlete?.position}
              value={newAthleteData.position} onChange={e => setNewAthleteData({ ...newAthleteData, position: e.target.value })}>
              {athletePositions.map(position => (
                <option key={position.type} value={position.type}>{position.value}</option>
              ))}
            </select>
            <label>Telefone*</label>
            <InputMask
              mask="(99) 99999-9999"
              id="phone"
              type="text"
              value={newAthleteData.phone}
              defaultValue={selectedAthlete?.phone}
              onChange={e => setNewAthleteData({ ...newAthleteData, phone: e.target.value })}
            />
            <label>RG</label>
            <InputMask
              mask="99.999.999-9"
              id="rg"
              type="text"
              value={newAthleteData.rg}
              defaultValue={selectedAthlete?.rg}
              onChange={e => setNewAthleteData({ ...newAthleteData, rg: e.target.value })}
            />
            <label>CPF</label>
            <InputMask
              mask="999.999.999-99"
              id="cpf"
              type="text"
              value={newAthleteData.cpf}
              defaultValue={selectedAthlete?.cpf}
              onChange={e => setNewAthleteData({ ...newAthleteData, cpf: e.target.value })}
            />
            <label>Data de Nascimento*</label>
            <input
              required
              type="date"
              defaultValue={convertToISODate(selectedAthlete?.birth || '')}
              value={newAthleteData.birth}
              onChange={e => setNewAthleteData({ ...newAthleteData, birth: e.target.value })}
            />
            <label>Email*</label>
            <input
              required
              type="email"
              defaultValue={selectedAthlete?.email}
              value={newAthleteData.email}
              onChange={e => setNewAthleteData({ ...newAthleteData, email: e.target.value })}
            />
          </FormDrawerWrapper>
          <Buttons>
            <BackButton onClick={setResetActions}>Voltar</BackButton>
            <AddButton type="submit">Editar Atleta</AddButton>
          </Buttons>
        </form>
      </Container>
    </ContainerBackground>
  );

};

export default EditAthlete;
