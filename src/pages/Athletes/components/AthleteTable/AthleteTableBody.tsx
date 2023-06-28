import React, { useEffect, useState } from 'react';
import { AthleteTable, TableHead, TableBody, TableHeaderCell, RoundedImage, TableWrapper, MoreActionsButton, AthleteButtons, TableBodyRow, EmptyTable } from './styles';
import moreActions from '../../../../assets/icons/moreActions.svg';
import { useAthlete } from '../../../../hooks/Athlete';
import { tableColumns } from '../../utils/const';
import userImg from '../../../../assets/icons/ball.svg';
import api from '../../../../services/api';
import { useAuth } from '../../../../auth/AuthContext';
import { AthleteData, getPositionText, translateAthleteFrontData } from '../utils/interfaces';
import { formatCPF, formatPhone, formatRG } from '../../../../utils/format';

interface RowButtonsState {
  [key: string]: boolean;
}

const AthletesTableBody: React.FC = () => {
  const [showMoreActions, setShowMoreActions] = useState({} as RowButtonsState);
  const { actionModalInfo, searchValue, athletes, setAthletes, setEditAthlete, setDeactivateAthlete, setActivateAthlete } = useAthlete();
  const { admin } = useAuth();

  const filteredAthletes = athletes.filter((athlete) =>
    athlete.name.toLowerCase().includes(searchValue.toLowerCase())
  );
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
          if (err.response.status === 404) {
            setAthletes([]);
          }
        });
    } catch (err) {
      console.log(err);
      alert('Erro ao carregar lista de atletas');
    }
  }

  const handleClick = (rowId: string) => {
    setShowMoreActions((prevState) => ({
      ...Object.fromEntries(Object.entries(prevState).map(([key]) => [key, false])),
      [rowId]: true,
    }));
  };

  const handleRowClick = (rowId: string) => {
    if (showMoreActions[rowId]) {
      setShowMoreActions((prevState) => ({
        ...prevState,
        [rowId]: false,
      }));
    } else {
      setShowMoreActions((prevState) => ({
        ...Object.fromEntries(Object.entries(prevState).map(([key]) => [key, false])),
        [rowId]: true,
      }));
    }
  };

  useEffect(() => {
    // A lista de atletas é carregada novamente toda vez que o modal de ação é fechado
    loadAthletes();
  }, [actionModalInfo]);

  return (
    <TableWrapper>
      {
        athletes.length > 0 ? (
          <AthleteTable>
            <TableHead>
              <tr>
                {tableColumns.map((column) =>
                  <TableHeaderCell key={column}>{column}</TableHeaderCell>
                )}
              </tr>
            </TableHead>
            <TableBody>
              {filteredAthletes.map(athlete => (
                <TableBodyRow key={athlete.id}
                  onClick={() => handleRowClick(athlete.id)}
                  isActive={athlete.isActive}
                >
                  <td className='first-cell'><RoundedImage
                    src={userImg} isActive={athlete.isActive} />
                  </td>
                  <td>{athlete.name}</td>
                  <td>{getPositionText(athlete.position)}</td>
                  <td>{formatPhone(athlete.phone)}</td>
                  <td>{formatRG(athlete.rg)}</td>
                  <td>{formatCPF(athlete.cpf)}</td>
                  <td>{athlete.birth}</td>
                  <td>{athlete.email}</td>
                  <td>
                    {showMoreActions[athlete.id] ? (
                      <AthleteButtons>
                        {athlete.isActive ? (
                          <>
                            <button
                              className='edit'
                              onClick={() => setEditAthlete(athlete)}>Editar</button>
                            <button
                              className='deactivate'
                              onClick={() => setDeactivateAthlete(athlete)}>Desativar</button>
                          </>
                        ) : (
                          <button
                            className='activate'
                            onClick={() => setActivateAthlete(athlete)}>Reativar</button>
                        )}

                      </AthleteButtons>
                    ) : (
                      <MoreActionsButton onClick={() => handleClick(athlete.id)}><img src={moreActions} /></MoreActionsButton>
                    )}
                  </td>
                </TableBodyRow>
              ))}
            </TableBody>
          </AthleteTable>
        ) : (
          <EmptyTable>
            <h4>Não há atletas registados</h4>
          </EmptyTable>
        )
      }
    </TableWrapper>
  );

};

export default AthletesTableBody;
