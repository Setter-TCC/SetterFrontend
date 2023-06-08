import React, { useState } from 'react';
import { AthleteTable, TableHead, TableBody, TableHeaderCell, RoundedImage, TableWrapper, MoreActionsButton, AthleteButtons, TableBodyRow } from './styles';
import moreActions from '../../../../assets/icons/moreActions.svg';
import { useAthlete } from '../../../../hooks/Athlete';
import { athletes, tableColumns } from '../../utils/const';
import userImg from '../../../../assets/icons/user.svg';

interface RowButtonsState {
  [key: string]: boolean;
}

const AthletesTableBody: React.FC = () => {
  const [showMoreActions, setShowMoreActions] = useState({} as RowButtonsState);
  const { setEditAthlete, setDeactivateAthlete, setReactivateAthlete } = useAthlete();

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

  return (
    <TableWrapper>
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
    </TableWrapper>
  );

};

export default AthletesTableBody;
