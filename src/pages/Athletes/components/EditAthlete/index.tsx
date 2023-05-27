import React, { useState } from 'react';
import { Container, ContainerBackground, ImgWrapper, Buttons, AddButton, BackButton, RoundedImage } from './styles';
import { FormDrawerWrapper } from '../../../../components/FormWrapper';

const athletePositions = [
  { key: 'setter', value: 'Levantador(a)' },
  { key: 'outsideHitter', value: 'Ponteiro(a)' },
  { key: 'opposite', value: 'Oposto(a)' },
  { key: 'middleBlocker', value: 'Central' },
  { key: 'libero', value: 'Líbero' }
];

export interface AthleteData {
  id: string,
  img: string,
  name: string,
  position: string,
  phone: string,
  rg: string,
  cpf: string,
  birth: string,
  email: string,
}

type AthleteProps = {
  closeDrawer: () => void;
  openInfoModal: () => void;
  athleteData: AthleteData;
}

const EditAthlete: React.FC<AthleteProps> = ({
  closeDrawer, openInfoModal, athleteData
}) => {
  const [newAthleteData, setNewAthleteData] = useState<AthleteData>({} as AthleteData);

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Editar atleta
    closeDrawer();
    openInfoModal();
  };

  return (
    <ContainerBackground>
      <Container>

        <form onSubmit={onSubmit}>
          <FormDrawerWrapper title='Editar Atleta'>
            <ImgWrapper>
              <RoundedImage src={athleteData.img} />
              <input type="file" accept="image/*" name="imageInput" id="imageInput" />
            </ImgWrapper>
            <label>Nome</label>
            <input
              required
              defaultValue={athleteData.name}
              type="text"
              value={newAthleteData.name}
              onChange={e => setNewAthleteData({ ...newAthleteData, name: e.target.value })}
            />
            <label>Posição</label>
            <select defaultValue={athleteData.position}
              value={newAthleteData.position} onChange={e => setNewAthleteData({ ...newAthleteData, position: e.target.value })}>
              {athletePositions.map(position => (
                <option key={position.key} value={position.key}>{position.value}</option>
              ))}
            </select>
            <label>Telefone</label>
            <input
              required
              type="string"
              defaultValue={athleteData.phone}
              value={newAthleteData.phone}
              onChange={e => setNewAthleteData({ ...newAthleteData, phone: e.target.value })}
            />
            <label>RG</label>
            <input
              required
              type="string"
              defaultValue={athleteData.rg}
              value={newAthleteData.rg}
              onChange={e => setNewAthleteData({ ...newAthleteData, rg: e.target.value })}
            />
            <label>CPF</label>
            <input
              required
              type="string"
              defaultValue={athleteData.cpf}
              value={newAthleteData.cpf}
              onChange={e => setNewAthleteData({ ...newAthleteData, cpf: e.target.value })}
            />
            <label>Data de Nascimento</label>
            <input
              required
              type="datetime"
              defaultValue={athleteData.birth}
              value={newAthleteData.birth}
              onChange={e => setNewAthleteData({ ...newAthleteData, birth: e.target.value })}
            />
            <label>Email</label>
            <input
              required
              type="email"
              defaultValue={athleteData.email}
              value={newAthleteData.email}
              onChange={e => setNewAthleteData({ ...newAthleteData, email: e.target.value })}
            />
          </FormDrawerWrapper>
          <Buttons>
            <BackButton onClick={closeDrawer}>Voltar</BackButton>
            <AddButton type="submit">Editar Atleta</AddButton>
          </Buttons>
        </form>
      </Container>
    </ContainerBackground>
  );

};

export default EditAthlete;
