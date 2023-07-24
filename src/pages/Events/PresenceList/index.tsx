import React, { useEffect, useState } from 'react';
import { AthleteName, JustificativaInput, PresenceListContainer, RadioInput, PresenceTable, PresenceTableWrapper } from './styles';
import { AthleteData } from '../../Athletes/components/utils/interfaces';
import { AthleteState, AthletePresence, AthleteStateEnum } from '../utils/interfaces';


interface AthletesListProps {
  athletes?: AthleteData[];
  presenceList?: AthletePresence[];
}

const ListaAtletas: React.FC<AthletesListProps> = ({ athletes, presenceList }) => {
  const [athleteState, setAthleteState] = useState<AthleteState>({});
  const [justification, setJustification] = useState<{ [nome: string]: string }>({});
  const [list, setList] = useState<AthletePresence[] | AthleteData[]>([]);

  const handleRadioChange = (
    event: React.ChangeEvent<HTMLInputElement>,
    athleteName: string
  ) => {
    const value = event.target.value as AthleteStateEnum.presence | AthleteStateEnum.fault | AthleteStateEnum.justified;
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
    setJustification((prevJustification) => ({
      ...prevJustification,
      [nomeAtleta]: justificativa,
    }));
  };

  useEffect(() => {
    if (presenceList) {
      setList(presenceList);
    } else if (athletes) {
      setList(athletes);
    }
  }, []);

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
            {list?.map((athlete) => (
              <tr key={athlete.name}>
                <td className='default'>
                  <AthleteName>{athlete.name}</AthleteName>
                </td>
                <td className='options'>
                  <label>
                    <RadioInput
                      type="radio"
                      name={`radio-${athlete.name}`}
                      value="presence"
                      checked={athleteState[athlete.name] === 'presence' || athlete.state === 'presence'}
                      onChange={(e) => handleRadioChange(e, athlete.name)}
                    />
                  </label>
                </td>
                <td className='options'>
                  <label>
                    <RadioInput
                      type="radio"
                      name={`radio-${athlete.name}`}
                      value="fault"
                      checked={athleteState[athlete.name] === 'fault' || athlete.state === 'fault'}
                      onChange={(e) => handleRadioChange(e, athlete.name)}
                    />
                  </label>
                </td>
                <td className='options'>
                  <label>
                    <RadioInput
                      type="radio"
                      name={`radio-${athlete.name}`}
                      value="justified"
                      checked={athleteState[athlete.name] === 'justified' || athlete.state === 'justified'}
                      onChange={(e) => handleRadioChange(e, athlete.name)}
                    />
                  </label>
                </td>
                <td className='default'>
                  <JustificativaInput
                    type="text"
                    disabled={athleteState[athlete.name] !== 'justified' && athlete.state !== 'justified'}
                    value={justification[athlete.name] || athlete.justification || ''}
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
