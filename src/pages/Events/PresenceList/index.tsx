import React, { useState } from 'react';
import { AthleteName, JustificativaInput, PresenceListContainer, RadioInput, PresenceTable, PresenceTableWrapper } from './styles';
import { AthleteData } from '../../Athletes/components/utils/interfaces';


interface AtletaEstado {
  [nome: string]: 'presenca' | 'falta' | 'justificada';
}


const ListaAtletas: React.FC<{ athletes: AthleteData[] }> = ({ athletes }) => {
  const [athleteState, setAthleteState] = useState<AtletaEstado>({});
  const [justificativas, setJustificativas] = useState<{ [nome: string]: string }>({});

  const handleRadioChange = (
    event: React.ChangeEvent<HTMLInputElement>,
    athleteName: string
  ) => {
    const value = event.target.value as 'presenca' | 'falta' | 'justificada';
    setAthleteState((prevState) => ({
      ...prevState,
      [athleteName]: value,
    }));
  };

  const handleJustificativaChange = (
    event: React.ChangeEvent<HTMLInputElement>,
    nomeAtleta: string
  ) => {
    const justificativa = event.target.value;
    setJustificativas((prevJustificativas) => ({
      ...prevJustificativas,
      [nomeAtleta]: justificativa,
    }));
  };

  return (
    <PresenceListContainer>
      <PresenceTableWrapper>
        <PresenceTable>
          <thead>
            <tr>
              <th>Atleta</th>
              <th>Presença</th>
              <th>Falta</th>
              <th>Justificada</th>
              <th>Justificativa</th>
            </tr>
          </thead>
          <tbody>
            {athletes.map((athlete) => (
              <tr key={athlete.name}>
                <td className='default'>
                  <AthleteName>{athlete.name}</AthleteName>
                </td>
                <td className='options'>
                  <label>
                    <RadioInput
                      type="radio"
                      name={`radio-${athlete.name}`}
                      value="presenca"
                      checked={athleteState[athlete.name] === 'presenca'}
                      onChange={(e) => handleRadioChange(e, athlete.name)}
                    />
                  </label>
                </td>
                <td className='options'>
                  <label>
                    <RadioInput
                      type="radio"
                      name={`radio-${athlete.name}`}
                      value="falta"
                      checked={athleteState[athlete.name] === 'falta'}
                      onChange={(e) => handleRadioChange(e, athlete.name)}
                    />
                  </label>
                </td>
                <td className='options'>
                  <label>
                    <RadioInput
                      type="radio"
                      name={`radio-${athlete.name}`}
                      value="justificada"
                      checked={athleteState[athlete.name] === 'justificada'}
                      onChange={(e) => handleRadioChange(e, athlete.name)}
                    />
                  </label>
                </td>
                <td className='default'>
                  <JustificativaInput
                    type="text"
                    disabled={athleteState[athlete.name] !== 'justificada'}
                    value={justificativas[athlete.name] || ''}
                    onChange={(e) => handleJustificativaChange(e, athlete.name)}
                  />
                </td>
              </tr>
            ))}
          </tbody>
        </PresenceTable>
      </PresenceTableWrapper>
    </PresenceListContainer>
  );
};

export default ListaAtletas;
