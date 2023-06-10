import React, { useEffect } from 'react';
import { HeaderContent, SearchBox } from './styles';
import searchIcon from '../../../../assets/icons/search.svg';
import Button from '../../../../components/Button';
import { useAthlete } from '../../../../hooks/Athlete';

const AthletesTableHeader: React.FC = () => {
  const { searchValue, setSearchValue, setAddAthlete } = useAthlete();

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchValue(event.target.value);
  };

  useEffect(() => {
    window.addEventListener('error', e => {
      if (e.message === 'ResizeObserver loop limit exceeded') {
        const resizeObserverErrDiv = document.getElementById(
          'webpack-dev-server-client-overlay-div'
        );
        const resizeObserverErr = document.getElementById(
          'webpack-dev-server-client-overlay'
        );
        if (resizeObserverErr) {
          resizeObserverErr.setAttribute('style', 'display: none');
        }
        if (resizeObserverErrDiv) {
          resizeObserverErrDiv.setAttribute('style', 'display: none');
        }
      }
    });
  }, []);

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
