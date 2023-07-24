import React from 'react';
import { EventData, EventType } from '../utils/interfaces';
import { Table, TableWrapper } from './styles';
import { formatEventName } from '../utils/format';
import { useEvent } from '../../../hooks/Event';

const EventsTable: React.FC = () => {
  const { filteredEvents, setSelectedEvent, setAddGame, setAddOther, setAddTrainning } = useEvent();

  const handleEventClick = (event: EventData) => {
    setSelectedEvent(event);
    const eventActionMap: { [key in EventType]: () => void } = {
      [EventType.game]: setAddGame,
      [EventType.other]: setAddOther,
      [EventType.trainning]: setAddTrainning,
    };

    const actionFunction = eventActionMap[event.type];
    if (actionFunction) {
      actionFunction();
    }
  };
  return (
    <TableWrapper>
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
    </TableWrapper>
  );
};

export default EventsTable;
