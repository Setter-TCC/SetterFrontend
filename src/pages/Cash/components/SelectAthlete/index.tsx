import React, { useState } from 'react';
import { useCash } from '../../../../hooks/Cash';
import { useAuth } from '../../../../auth/AuthContext';
import { useAthlete } from '../../../../hooks/Athlete';

import searchIcon from '../../../../assets/icons/search.svg';
import { AthleteList, AthleteRow, BackButton, Buttons, SearchBox, SelectButton } from './styles';
import { AthleteData } from '../../../Athletes/components/utils/interfaces';

const SelectAthlete: React.FC = () => {
  const { setResetActions, setActionModalInfo } = useCash();
  const { admin } = useAuth();
  const { searchValue, setSearchValue, athletes } = useAthlete();
  const [selectedAthlete, setSelectedAthlete] = useState<AthleteData>({} as AthleteData);

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchValue(event.target.value);
  };

  const filteredAthletes = athletes.filter((athlete) =>
    athlete.name.toLowerCase().includes(searchValue.toLowerCase())
  );

  return (
    <>
      <SearchBox>
        <input
          type="text"
          value={searchValue}
          onChange={handleSearchChange}
          placeholder="Pesquisar por nome"
        />
        <img src={searchIcon} />
      </SearchBox>
      <AthleteList>
        {filteredAthletes.length > 0 ? (
          <div>
            {filteredAthletes.map((athlete) => (
              <AthleteRow
                isSelected={athlete.id === selectedAthlete?.id}
                key={athlete.id}
                onClick={() => setSelectedAthlete(athlete)}>
                <p>{athlete.name}</p>
              </AthleteRow>
            ))
            }
          </div>
        ) : 'Não tem atletas cadastrados'}
      </AthleteList>
      <Buttons>
        <BackButton onClick={() => setResetActions()}>Voltar</BackButton>
        <SelectButton type='button'>Prosseguir</SelectButton>
      </Buttons>
    </>
  );

};

export default SelectAthlete;
