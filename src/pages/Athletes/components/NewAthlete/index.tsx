import React, { useState } from 'react';
import { Container, Title, ContainerBackground, FormWrapper, ImgWrapper, Buttons } from './styles';
import addUser from '../../../../assets/icons/addUser.svg';
import Button from '../../../../components/Button';

const athletePositions = [
  { key: 'setter', value: 'Levantador(a)' },
  { key: 'outsideHitter', value: 'Ponteiro(a)' },
  { key: 'opposite', value: 'Oposto(a)' },
  { key: 'middleBlocker', value: 'Central' },
  { key: 'libero', value: 'Líbero' }
];

type NewAthleteData = {
  img: string,
  name: string,
  position: string,
  phone: string,
  rg: string,
  cpf: string,
  birth: string,
  email: string,
}

type NewAthleteProps = {
  closeDrawer: () => void;
  openInfoModal: () => void;
}

const NewAthlete: React.FC<NewAthleteProps> = ({
  closeDrawer, openInfoModal
}) => {
  const [athleteData, setAthleteData] = useState<NewAthleteData>({} as NewAthleteData);

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Criar atleta
    closeDrawer();
    openInfoModal();
  };

  return (
    <ContainerBackground>
      <Container>
        <Title>Adicionar Atleta</Title>

        <form onSubmit={onSubmit}>
          <FormWrapper>
            <ImgWrapper>
              <img src={addUser} />
              <input type="file" accept="image/*" name="imageInput" id="imageInput" />
            </ImgWrapper>
            <label>Nome</label>
            <input
              required
              type="text"
              value={athleteData.name}
              onChange={e => setAthleteData({ ...athleteData, name: e.target.value })}
            />
            <label>Posição</label>
            <select value={athleteData.position} onChange={e => setAthleteData({ ...athleteData, position: e.target.value })}>
              {athletePositions.map(position => (
                <option key={position.key} value={position.key}>{position.value}</option>
              ))}
            </select>
            <label>Telefone</label>
            <input
              required
              type="number"
              value={athleteData.phone}
              onChange={e => setAthleteData({ ...athleteData, phone: e.target.value })}
            />
            <label>RG</label>
            <input
              required
              type="number"
              value={athleteData.rg}
              onChange={e => setAthleteData({ ...athleteData, rg: e.target.value })}
            />
            <label>CPF</label>
            <input
              required
              type="number"
              value={athleteData.cpf}
              onChange={e => setAthleteData({ ...athleteData, cpf: e.target.value })}
            />
            <label>Data de Nascimento</label>
            <input
              required
              type="datetime"
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
          </FormWrapper>
          <Buttons>
            <Button
              backgroundColor='var(--color-primary-white)'
              isFull={false}
              textColor='var(--color-primary-blue)'
              path=''
              text='Voltar'
              onClick={closeDrawer}
            />
            <Button
              backgroundColor='var(--color-primary-blue)'
              isFull={true}
              textColor='var(--color-primary-white)'
              path=''
              text='Adicionar Atleta'
              onClick={onSubmit}
            />
          </Buttons>
        </form>
      </Container>
    </ContainerBackground>
  );

};

export default NewAthlete;
