/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useEffect } from 'react';
import { useAuth } from '../../../auth/AuthContext';
import { MonthEventBodyContainer } from './styles';
import { useEvent } from '../../../hooks/Event';
import EventsTable from '../EventsTable';
import { translateEventsToFrontData } from '../utils/interfaces';
import api from '../../../services/api';
import { useCash } from '../../../hooks/Cash';


const MonthEventsBody: React.FC = () => {
  const { admin } = useAuth();
  const { selectedMonth } = useCash();
  const { setListEvents, setFilteredEvents, actionModalInfo } = useEvent();

  const getMonthEvents = async () => {
    try {
      const { data } = await api.get(`/api/event/month?team_id=${admin.teamId}&month=${selectedMonth?.month}&year=${selectedMonth?.year}`, {
        headers: { Authorization: `Bearer ${localStorage.getItem('token')}` }
      });
      const frontEvents = translateEventsToFrontData(data.value);
      setListEvents(frontEvents);
      setFilteredEvents(frontEvents);
    } catch (error: any) {
      if (error?.response?.status === 404) {
        setListEvents([]);
        setFilteredEvents([]);
      }
      else {
        setListEvents([]);
        setFilteredEvents([]);
      }
    }
  };

  useEffect(() => {
    getMonthEvents();
  }, [selectedMonth, actionModalInfo]);

  return (
    <MonthEventBodyContainer>
      <EventsTable />
    </MonthEventBodyContainer>
  );
};

export default MonthEventsBody;
