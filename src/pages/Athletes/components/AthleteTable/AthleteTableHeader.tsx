import React, { useState } from 'react';
import { HeaderContent, SearchBox } from './styles';
import searchIcon from '../../../../assets/icons/search.svg';
import Button from '../../../../components/Button';
import { useAthlete } from '../../../../hooks/Athlete';

const AthletesTableHeader: React.FC = () => {
  const [searchString, setSearchString] = useState('');
  const { setAddAthlete } = useAthlete();

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchString(event.target.value);
  };

  // const filteredAtletas = athletes.filter((atleta) =>
  //   atleta.name.toLowerCase().includes(searchString.toLowerCase())
  // );

  return (
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
        onClick={() => setAddAthlete()}
      />
    </HeaderContent>
  );

};

export default AthletesTableHeader;
