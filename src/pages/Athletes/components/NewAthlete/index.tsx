import React, { useState } from 'react';
import { Container, ContainerBackground, ImgWrapper, Buttons, AddButton, BackButton } from './styles';
import addUser from '../../../../assets/icons/addUser.svg';
import { FormDrawerWrapper } from '../../../../components/FormWrapper';
import { useAthlete } from '../../../../hooks/Athlete';

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

const NewAthlete: React.FC = () => {
  const [athleteData, setAthleteData] = useState<NewAthleteData>({} as NewAthleteData);
  const { setResetActions, setActionModalInfo } = useAthlete();
  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Criar atleta
    setActionModalInfo({ text: 'Atleta criada com sucesso' });
  };

  return (
    <ContainerBackground>
      <Container>

        <form onSubmit={onSubmit}>
          <FormDrawerWrapper title='Adicionar Atleta'>
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

export default NewAthlete;
