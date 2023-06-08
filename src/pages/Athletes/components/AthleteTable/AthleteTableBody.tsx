import React, { useMemo, useState } from 'react';
import { AthleteTable, TableHead, TableBody, TableHeaderCell, RoundedImage, TableWrapper, MoreActionsButton, AthleteButtons, TableBodyRow } from './styles';
import moreActions from '../../../../assets/icons/moreActions.svg';
import { useAthlete } from '../../../../hooks/Athlete';
import { tableColumns } from '../../utils/const';
import userImg from '../../../../assets/icons/user.svg';
import api from '../../../../services/api';
import { useAuth } from '../../../../auth/AuthContext';
import { AthleteData, translateAthleteFrontData } from '../utils/interfaces';

interface RowButtonsState {
  [key: string]: boolean;
}

const AthletesTableBody: React.FC = () => {
  const [showMoreActions, setShowMoreActions] = useState({} as RowButtonsState);
  const [athletes, setAthletes] = useState<AthleteData[]>([] as AthleteData[]);
  const { setEditAthlete, setDeactivateAthlete, setReactivateAthlete } = useAthlete();
  const { admin } = useAuth();

  const getListAthletes = async () => {
    try {
      const { data } = await api.get(`/api/athlete?team_id=${admin.teamId}`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('token')}`,
        },
      });
      console.log(data.value);
      const frontAthletes: AthleteData[] = translateAthleteFrontData(data.value);
      setAthletes(frontAthletes);
    } catch (err) {
      alert('Erro ao carregar lista de atletas');
    }
  };

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

  // TODO: ver como renderizar so qd tiver alteração na listagem de atletas
  useMemo(getListAthletes, []);

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
              {athletes.map(athlete => (
                <TableBodyRow key={athlete.id}
                  onClick={() => handleRowClick(athlete.id)}
                  isActive={athlete.isActive}
                >
                  <td className='first-cell'><RoundedImage
                    src={userImg} isActive={athlete.isActive} />
                  </td>
                  <td>{athlete.name}</td>
                  <td>{athlete.position}</td>
                  <td>{athlete.phone}</td>
                  <td>{athlete.rg}</td>
                  <td>{athlete.cpf}</td>
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
                            className='reactivate'
                            onClick={() => setReactivateAthlete(athlete)}>Reativar</button>
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
          // TODO: renderizar uma mensagem melhor com uma imagem fofinha
          <h4>Não há atletas registados</h4>
        )
      }
    </TableWrapper>
  );

};

export default AthletesTableBody;
