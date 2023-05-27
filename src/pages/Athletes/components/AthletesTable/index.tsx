import React, { useEffect, useState } from 'react';
import { Container, AthleteTable, TableHead, TableBody, TableHeaderCell, TableCell, RoundedImage, HeaderContent, TableWrapper, SearchBox, MoreActionsButton, AthleteButtons } from './styles';
import img1 from '../../../../assets/athletes/img1.jpeg';
import searchIcon from '../../../../assets/icons/search.svg';
import Button from '../../../../components/Button';
import moreActions from '../../../../assets/icons/moreActions.svg';
import NewAthlete from '../NewAthlete';
import InfoModal from '../../../../components/InfoModal';
import EditAthlete, { AthleteData } from '../EditAthlete';

const athletes: AthleteData[] = [
  {
    id: '1',
    img: img1,
    name: 'Atleta Fulana de Tal',
    position: 'Posição 1',
    phone: '(11) 1234-5678',
    rg: '12345678',
    cpf: '123.456.789-00',
    birth: '01/01/1990',
    email: 'atleta1@example.com',
  },
  {
    id: '2',
    img: img1,
    name: 'Atleta Cicrana Beltrana',
    position: 'Posição 2',
    phone: '(11) 2345-6789',
    rg: '87654321',
    cpf: '987.654.321-00',
    birth: '02/02/1991',
    email: 'atleta2@example.com',
  },
  {
    id: '3',
    img: img1,
    name: 'Atleta Fulano de Tal Cicrana Beltrana',
    position: 'Posição 3',
    phone: '(11) 3456-7890',
    rg: '56781234',
    cpf: '456.789.123-00',
    birth: '03/03/1992',
    email: 'atleta3@example.com',

  },
];

interface RowButtonsState {
  [key: string]: boolean;
}

const AthletesTable: React.FC = () => {
  const [searchString, setSearchString] = useState('');
  const [isNewAthleteDrawerOpen, setIsNewAthleteDrawerOpen] = useState(false);
  const [addAthleteModalOpen, setAddAthleteModalOpen] = useState(false);

  const [isEditAthleteDrawerOpen, setIsEditAthleteDrawerOpen] = useState(false);
  const [editAthleteModalOpen, setEdiAthleteModalOpen] = useState(false);
  const [showMoreActions, setShowMoreActions] = useState({} as RowButtonsState);
  const [selectedAthlete, setSelectedAthlete] = useState<AthleteData>();

  const handleClick = (rowId: string) => {
    setShowMoreActions((prevState) => ({
      ...Object.fromEntries(Object.entries(prevState).map(([key]) => [key, false])),
      [rowId]: true,
    }));
  };

  const handleRowClick = (rowId: string) => {
    if (showMoreActions[rowId]) {
      // Se os botões de edição e desativação estiverem visíveis na linha clicada,
      // definimos o estado para ocultá-los novamente.
      setShowMoreActions((prevState) => ({
        ...prevState,
        [rowId]: false,
      }));
    } else {
      // Caso contrário, definimos o estado para ocultar todos os botões e
      // exibir apenas o botão "Mais ações" na linha clicada.
      setShowMoreActions((prevState) => ({
        ...Object.fromEntries(Object.entries(prevState).map(([key]) => [key, false])),
        [rowId]: true,
      }));
    }
  };

  const handleSearchChange = (event: any) => {
    setSearchString(event.target.value);
  };

  const filteredAtletas = athletes.filter((atleta) =>
    atleta.name.toLowerCase().includes(searchString.toLowerCase())
  );

  return (
    <Container>
      {isNewAthleteDrawerOpen && (
        <NewAthlete
          closeDrawer={() => setIsNewAthleteDrawerOpen(false)}
          openInfoModal={() => setAddAthleteModalOpen(true)} />
      )}
      {addAthleteModalOpen && (
        <InfoModal text='Atleta criado(a) com sucesso!' closeModal={() => setAddAthleteModalOpen(false)} />
      )}

      {isEditAthleteDrawerOpen && selectedAthlete && (
        <EditAthlete
          closeDrawer={() => setIsEditAthleteDrawerOpen(false)}
          openInfoModal={() => setEdiAthleteModalOpen(true)}
          athleteData={selectedAthlete}
        />
      )}
      {editAthleteModalOpen && (
        <InfoModal text='Atleta editado(a) com sucesso!' closeModal={() => setEdiAthleteModalOpen(false)} />
      )}
      <HeaderContent>
        <SearchBox>
          <input
            type="text"
            value={searchString}
            onChange={handleSearchChange}
            placeholder="Pesquisar por nome"
          />
          <img src={searchIcon} />
        </SearchBox>
        <Button
          text="Adicionar Atleta"
          backgroundColor='var(--color-primary-blue)'
          textColor='var(--color-primary-white)'
          isFull
          path=""
          onClick={() => setIsNewAthleteDrawerOpen(true)}
        />
      </HeaderContent>
      <TableWrapper>
        <AthleteTable>
          <TableHead>
            <tr>
              <TableHeaderCell></TableHeaderCell>
              <TableHeaderCell>Nome</TableHeaderCell>
              <TableHeaderCell>Posição</TableHeaderCell>
              <TableHeaderCell>Telefone</TableHeaderCell>
              <TableHeaderCell>RG</TableHeaderCell>
              <TableHeaderCell>CPF</TableHeaderCell>
              <TableHeaderCell>Data de Nascimento</TableHeaderCell>
              <TableHeaderCell>Email</TableHeaderCell>
              <TableHeaderCell></TableHeaderCell>
            </tr>
          </TableHead>
          <TableBody>
            {athletes.map(athlete => (
              <tr key={athlete.id}
                onClick={() => handleRowClick(athlete.id)}
              >
                <TableCell className='first-cell'><RoundedImage src={athlete.img} alt={athlete.name} /></TableCell>
                <TableCell>{athlete.name}</TableCell>
                <TableCell>{athlete.position}</TableCell>
                <TableCell>{athlete.phone}</TableCell>
                <TableCell>{athlete.rg}</TableCell>
                <TableCell>{athlete.cpf}</TableCell>
                <TableCell>{athlete.birth}</TableCell>
                <TableCell>{athlete.email}</TableCell>
                <TableCell>
                  {showMoreActions[athlete.id] ? (
                    <AthleteButtons>
                      <button className='edit' onClick={() => { setIsEditAthleteDrawerOpen(true); setSelectedAthlete(athlete); }}>Editar</button>
                      <button className='deactivate'>Desativar</button>
                    </AthleteButtons>
                  ) : (
                    <MoreActionsButton onClick={() => handleClick(athlete.id)}><img src={moreActions} /></MoreActionsButton>
                  )}
                </TableCell>
              </tr>
            ))}
          </TableBody>
        </AthleteTable>
      </TableWrapper>
    </Container>
  );

};

export default AthletesTable;
