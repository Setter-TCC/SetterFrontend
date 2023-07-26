import React, { useEffect, useState } from 'react';
import { AthleteName, JustificativaInput, PresenceListContainer, RadioInput, PresenceTable, PresenceTableWrapper } from './styles';
import { AthleteState, AthletePresence, AthleteStateEnum } from '../utils/interfaces';
import { useEvent } from '../../../hooks/Event';


const AthletesList: React.FC = () => {
  const { activeAthletes, selectedEvent, setAthletesPresenceList, athletesPresenceList } = useEvent();
  const [athleteState, setAthleteState] = useState<AthleteState>({});
  const [justification, setJustification] = useState<{ [nome: string]: string }>({});

  const handleRadioChange = (
    event: React.ChangeEvent<HTMLInputElement>,
    athleteName: string
  ) => {
    const value = event.target.value as AthleteStateEnum.presence | AthleteStateEnum.fault | AthleteStateEnum.justified;
    setAthleteState((prevState) => ({
      ...prevState,
      [athleteName]: value,
    }));

    if (athletesPresenceList) {

      const updatedList: AthletePresence[] = athletesPresenceList.map((athlete) => {
        if (athlete.name === athleteName) {
          return {
            ...athlete,
            state: value,
          };
        }
        return athlete;
      });
      setAthletesPresenceList(updatedList);
    }

  };

  const handleJustificativaChange = (
    event: React.ChangeEvent<HTMLInputElement>,
    athleteName: string
  ) => {
    const justificativa = event.target.value;
    setJustification((prevJustification) => ({
      ...prevJustification,
      [athleteName]: justificativa,
    }));

    if (athletesPresenceList) {

      const updatedList: AthletePresence[] = athletesPresenceList.map((athlete) => {
        if (athlete.name === athleteName) {
          return {
            ...athlete,
            justification: event.target.value,
          };
        }
        return athlete;
      });
      setAthletesPresenceList(updatedList);
    }
  };

  useEffect(() => {
    if (selectedEvent?.listAthletes) {
      setAthletesPresenceList(selectedEvent.listAthletes);
    } else if (activeAthletes) {
      const presenceAthletes = activeAthletes.map((athlete) => ({
        ...athlete,
        state: AthleteStateEnum.presence,
      }));
      setAthletesPresenceList(presenceAthletes);
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
            {athletesPresenceList?.map((athlete) => (
              <tr key={athlete.name}>
                <td className='default'>
                  <AthleteName>{athlete.name}</AthleteName>
                </td>
                <td className='options'>
                  <label>
                    <RadioInput
                      type="radio"
                      name={`radio-${athlete.name}`}
                      value="1"
                      checked={athleteState[athlete.name] === AthleteStateEnum.presence || athlete.state === AthleteStateEnum.presence}
                      onChange={(e) => handleRadioChange(e, athlete.name)}
                    />
                  </label>
                </td>
                <td className='options'>
                  <label>
                    <RadioInput
                      type="radio"
                      name={`radio-${athlete.name}`}
                      value="2"
                      checked={athleteState[athlete.name] === AthleteStateEnum.fault || athlete.state === AthleteStateEnum.fault}
                      onChange={(e) => handleRadioChange(e, athlete.name)}
                    />
                  </label>
                </td>
                <td className='options'>
                  <label>
                    <RadioInput
                      type="radio"
                      name={`radio-${athlete.name}`}
                      value="3"
                      checked={athleteState[athlete.name] === AthleteStateEnum.justified || athlete.state === AthleteStateEnum.justified}
                      onChange={(e) => handleRadioChange(e, athlete.name)}
                    />
                  </label>
                </td>
                <td className='default'>
                  <JustificativaInput
                    type="text"
                    disabled={athleteState[athlete.name] !== AthleteStateEnum.justified && athlete.state !== AthleteStateEnum.justified}
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

export default AthletesList;
