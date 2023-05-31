import React, { useState } from 'react';
import { Container, ContainerBackground, ImgWrapper, Buttons, AddButton, BackButton, RoundedImage } from './styles';
import { FormDrawerWrapper } from '../../../../components/FormWrapper';
import { useAthlete } from '../../../../hooks/Athlete';
import { AthleteData } from '../../utils/interfaces';
import { athletePositions } from '../../utils/const';


const EditAthlete: React.FC = () => {
  const [newAthleteData, setNewAthleteData] = useState<AthleteData>({} as AthleteData);
  const { athleteAction, setResetActions, setActionModalInfo } = useAthlete();

  const { selectedAthlete } = athleteAction;
  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Editar atleta
    setActionModalInfo({ text: 'Atleta editado(a) com sucesso!' });
  };

  return (
    <ContainerBackground>
      <Container>

        <form onSubmit={onSubmit}>
          <FormDrawerWrapper title='Editar Atleta'>
            <ImgWrapper>
              <RoundedImage src={selectedAthlete?.img} />
              <input type="file" accept="image/*" name="imageInput" id="imageInput" />
            </ImgWrapper>
            <label>Nome</label>
            <input
              required
              defaultValue={selectedAthlete?.name}
              type="text"
              value={newAthleteData.name}
              onChange={e => setNewAthleteData({ ...newAthleteData, name: e.target.value })}
            />
            <label>Posição</label>
            <select defaultValue={selectedAthlete?.position}
              value={newAthleteData.position} onChange={e => setNewAthleteData({ ...newAthleteData, position: e.target.value })}>
              {athletePositions.map(position => (
                <option key={position.key} value={position.key}>{position.value}</option>
              ))}
            </select>
            <label>Telefone</label>
            <input
              required
              type="string"
              defaultValue={selectedAthlete?.phone}
              value={newAthleteData.phone}
              onChange={e => setNewAthleteData({ ...newAthleteData, phone: e.target.value })}
            />
            <label>RG</label>
            <input
              required
              type="string"
              defaultValue={selectedAthlete?.rg}
              value={newAthleteData.rg}
              onChange={e => setNewAthleteData({ ...newAthleteData, rg: e.target.value })}
            />
            <label>CPF</label>
            <input
              required
              type="string"
              defaultValue={selectedAthlete?.cpf}
              value={newAthleteData.cpf}
              onChange={e => setNewAthleteData({ ...newAthleteData, cpf: e.target.value })}
            />
            <label>Data de Nascimento</label>
            <input
              required
              type="datetime"
              defaultValue={selectedAthlete?.birth}
              value={newAthleteData.birth}
              onChange={e => setNewAthleteData({ ...newAthleteData, birth: e.target.value })}
            />
            <label>Email</label>
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
