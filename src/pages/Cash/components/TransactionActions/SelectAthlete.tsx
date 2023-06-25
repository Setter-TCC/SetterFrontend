import React, { useEffect, useState } from 'react';
import { useCash } from '../../../../hooks/Cash';
import { useAuth } from '../../../../auth/AuthContext';
import { useAthlete } from '../../../../hooks/Athlete';

import searchIcon from '../../../../assets/icons/search.svg';
import { AthleteList, AthleteRow, BackButton, Buttons, Container, ContainerBackground, ContainerBox, SearchBox, SelectButton } from './styles';
import { AthleteData, translateAthleteFrontData } from '../../../Athletes/components/utils/interfaces';
import api from '../../../../services/api';

const SelectAthlete: React.FC = () => {
  const { setMonthlyPayment, setResetActions, setSelectedAthlete } = useCash();
  const { admin } = useAuth();
  const { searchValue, setSearchValue, athletes, setAthletes } = useAthlete();
  const [chosenAthlete, setChosenAthlete] = useState<AthleteData | undefined>(undefined);

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchValue(event.target.value);
  };

  const filteredAthletes = athletes.filter((athlete) =>
    athlete.name.toLowerCase().includes(searchValue.toLowerCase())
  );

  const handleContinue = () => {
    if (chosenAthlete) {
      setSelectedAthlete(chosenAthlete);
    }
    setMonthlyPayment();
  };

  function loadAthletes() {
    try {
      api.get(`/api/athlete?team_id=${admin.teamId}`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('token')}`,
        },
      })
        .then(({ data }) => {
          const frontAthletes: AthleteData[] = translateAthleteFrontData(data.value);
          setAthletes(frontAthletes);
        })
        .catch((err) => {
          console.log(err);
          alert('Erro ao carregar lista de atletas');
        });
    } catch (err) {
      console.log(err);
      alert('Erro ao carregar lista de atletas');
    }
  }

  useEffect(() => {
    if (athletes.length === 0) {
      loadAthletes();
    }
  }, []);

  return (
    <ContainerBackground>
      <ContainerBox>
        <Container>
          <h2>Selecionar Atleta</h2>
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
                    isSelected={athlete.id === chosenAthlete?.id}
                    key={athlete.id}
                    onClick={() => setChosenAthlete(athlete)}>
                    <p>{athlete.name}</p>
                  </AthleteRow>
                ))
                }
              </div>
            ) : 'Não há atletas cadastrados'}
          </AthleteList>
          <Buttons>
            <BackButton onClick={setResetActions}>Voltar</BackButton>
            <SelectButton onClick={handleContinue} disabled={!chosenAthlete}>Prosseguir</SelectButton>
          </Buttons>
        </Container>
      </ContainerBox>
    </ContainerBackground>
  );

};

export default SelectAthlete;
