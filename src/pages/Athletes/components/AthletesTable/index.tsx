import React, { useState } from 'react';
import { Container, AthleteTable, TableHead, TableBody, TableHeaderCell, TableCell, RoundedImage, HeaderContent, TableWrapper, SearchBox, MoreActionsButton } from './styles';
import img1 from '../../../../assets/athletes/img1.jpeg';
import searchIcon from '../../../../assets/icons/search.svg';
import Button from '../../../../components/Button';
import moreActions from '../../../../assets/icons/moreActions.svg';
const atletas = [
  {
    imagemUrl: img1,
    nome: 'Atleta 1 Atleta 1 Atleta 1',
    posicao: 'Posição 1',
    telefone: '(11) 1234-5678',
    rg: '12345678',
    cpf: '123.456.789-00',
    dataNascimento: '01/01/1990',
    email: 'atleta1@example.com',
  },
  {
    imagemUrl: img1,
    nome: 'Atleta 2 Atleta 2 Atleta 2 Atleta 2 Atleta 2',
    posicao: 'Posição 2',
    telefone: '(11) 2345-6789',
    rg: '87654321',
    cpf: '987.654.321-00',
    dataNascimento: '02/02/1991',
    email: 'atleta2@example.com',
  },
  {
    imagemUrl: img1,
    nome: 'Atleta 3 Atleta 3 Atleta 3 Atleta 3 Atleta 3',
    posicao: 'Posição 3',
    telefone: '(11) 3456-7890',
    rg: '56781234',
    cpf: '456.789.123-00',
    dataNascimento: '03/03/1992',
    email: 'atleta3@example.com',

  },
];

const AthletesTable: React.FC = () => {
  const [searchString, setSearchString] = useState('');

  const handleSearchChange = (event: any) => {
    setSearchString(event.target.value);
  };

  const filteredAtletas = atletas.filter((atleta) =>
    atleta.nome.toLowerCase().includes(searchString.toLowerCase())
  );
  return (
    <Container>
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
        // onClick={() => navigate(button.path)}
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
            {atletas.map(atleta => (
              <tr key={atleta.email}>
                <TableCell className='first-cell'><RoundedImage src={atleta.imagemUrl} alt={atleta.nome} /></TableCell>
                <TableCell>{atleta.nome}</TableCell>
                <TableCell>{atleta.posicao}</TableCell>
                <TableCell>{atleta.telefone}</TableCell>
                <TableCell>{atleta.rg}</TableCell>
                <TableCell>{atleta.cpf}</TableCell>
                <TableCell>{atleta.dataNascimento}</TableCell>
                <TableCell >{atleta.email}</TableCell>
                <TableCell>
                  <MoreActionsButton><img src={moreActions} /></MoreActionsButton>
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
