import React from 'react';
import { HeaderContent, SearchBox } from './styles';
import searchIcon from '../../../../assets/icons/search.svg';
import Button from '../../../../components/Button';
import { useAthlete } from '../../../../hooks/Athlete';

const AthletesTableHeader: React.FC = () => {
  const { searchValue, setSearchValue, setAddAthlete } = useAthlete();

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchValue(event.target.value);
  };

  return (
    <HeaderContent>
      <SearchBox>
        <input
          type="text"
          value={searchValue}
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
