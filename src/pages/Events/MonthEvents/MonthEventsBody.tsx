import React, { useEffect } from 'react';
import { useAuth } from '../../../auth/AuthContext';
import { MonthEventBodyContainer } from './styles';
import { useEvent } from '../../../hooks/Event';
import EventsTable from '../EventsTable';
import { EventData, EventType } from '../utils/interfaces';

const events: EventData[] = [
  {
    id: 1,
    type: EventType.trainning,
    date: '2021-09-01',
    presences: 10,
    faults: 2,
    justifiedFaults: 1,
    local: 'CO',
  },
  {
    id: 2,
    name: 'Amistoso',
    type: EventType.other,
    date: '2021-09-01',
    presences: 10,
    faults: 2,
    justifiedFaults: 1,
  },
  {
    id: 1,
    type: EventType.game,
    date: '2021-09-01',
    presences: 10,
    faults: 2,
    justifiedFaults: 1,
    local: 'CO',
    championship: 'Copa do Brasil',
    opponent: 'São Paulo',
  },
];


const MonthEventsBody: React.FC = () => {
  const { admin } = useAuth();
  const { selectedMonth, actionModalInfo } = useEvent();

  const getMonthEvents = async () => {
    // try {
    //   const { data } = await api.get(`/api/transaction/month?team_id=${admin.teamId}&month=${selectedMonth?.month}&year=${selectedMonth?.year}`, {
    //     headers: { Authorization: `Bearer ${localStorage.getItem('token')}` }
    //   });

    //   const frontTransactions = translateTransactionToFrontData(data.value);
    //   setTransactions(frontTransactions);
    // } catch (error: any) {
    //   if (error.response.status === 404) {
    //     setTransactions([]);
    //   }
    // }
    return events;
  };

  useEffect(() => {
    getMonthEvents();
  }, [selectedMonth, actionModalInfo]);

  return (
    <MonthEventBodyContainer>
      <EventsTable events={events} />
    </MonthEventBodyContainer>
  );
};

export default MonthEventsBody;
