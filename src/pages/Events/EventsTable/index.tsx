/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react';
import { EventData, EventType, translateSelectedEventToFrontData } from '../utils/interfaces';
import { Table, TableWrapper } from './styles';
import { formatEventName } from '../utils/format';
import { useEvent } from '../../../hooks/Event';
import api from '../../../services/api';
import { useAuth } from '../../../auth/AuthContext';
import { EmptyExtract } from '../../Cash/components/ExtractTable/styles';

const EventsTable: React.FC = () => {
  const { filteredEvents, setSelectedEvent, setAddGame, setAddOther, setAddTrainning } = useEvent();
  const { admin } = useAuth();

  const handleEventClick = async (event: EventData) => {
    try {
      const { data } = await api.get(`/api/event/detail?team_id=${admin.teamId}&event_id=${event.id}`, {
        headers: { Authorization: `Bearer ${localStorage.getItem('token')}` }
      });
      const frontEvent = translateSelectedEventToFrontData(data.value);
      console.log(frontEvent.date);
      setSelectedEvent(frontEvent);
    } catch (error: any) {
      console.log(error);
    }

    const eventActionMap: { [key in EventType]: () => void } = {
      [EventType.game]: () => setAddGame(true),
      [EventType.other]: () => setAddOther(true),
      [EventType.trainning]: () => setAddTrainning(true),
    };

    const actionFunction = eventActionMap[event.type];
    if (actionFunction) {
      actionFunction();
    }
  };
  return (
    <TableWrapper>
      {
        filteredEvents?.length === 0 ? (
          <EmptyExtract>
            <h3>Não há eventos criados neste mês!</h3>
          </EmptyExtract>

        ) : (
          <Table>
            <thead>
              <tr>
                <th>Evento</th>
                <th>Data</th>
                <th>Local</th>
                <th>Adversário</th>
                <th>Campeonato</th>
                <th>Presenças</th>
                <th>Faltas</th>
                <th>Faltas Justificadas</th>
              </tr>
            </thead>
            <tbody>
              {filteredEvents?.map((event: EventData) => (
                <tr
                  key={event.id}
                  onClick={() => handleEventClick(event)}>
                  <td>{formatEventName(event)}</td>
                  <td>{event.date}</td>
                  <td>{event.local ?? '-'}</td>
                  <td>{event.opponent ?? '-'}</td>
                  <td>{event.championship ?? '-'}</td>
                  <td className='presences'>{event.presences}</td>
                  <td className='faults'>{event.faults}</td>
                  <td className='justifiedFaults'>{event.justifiedFaults}</td>
                </tr>
              ))}
            </tbody>
          </Table>
        )
      }
    </TableWrapper>
  );
};

export default EventsTable;
