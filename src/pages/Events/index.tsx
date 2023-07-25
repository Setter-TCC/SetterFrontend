import React, { useEffect } from 'react';
import { EventBody, EventContainer, EventContainerHeader, Container, HeaderTitle } from './styles';
import Sidebar from '../../components/Sidebar';
import MonthPicker from '../../components/MonthPicker';
import api from '../../services/api';
import { useAuth } from '../../auth/AuthContext';
import { AthleteData, translateAthleteFrontData } from '../Athletes/components/utils/interfaces';
import { useEvent } from '../../hooks/Event';
import MonthEvents from './MonthEvents';

const Events: React.FC = () => {
  const { admin } = useAuth();
  const { setActiveAthletes } = useEvent();
  // const [loading, setLoading] = useState(false);


  function loadAthletes() {
    try {
      // setLoading(true);
      api.get(`/api/athlete/active-athletes?team_id=${admin.teamId}`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('token')}`,
        },
      })
        .then(({ data }) => {
          const frontAthletes: AthleteData[] = translateAthleteFrontData(data.value);
          setActiveAthletes(frontAthletes);
        })
        .catch((err) => {
          // setLoading(false);
          if (err?.response?.status === 404) {
            setActiveAthletes([]);
          }
        });
      // setLoading(false);
    } catch (err) {
      // setLoading(false);
      console.log(err);
      alert('Erro ao carregar lista de atletas');
    }
  }

  useEffect(() => {
    loadAthletes();
  }, []);

  return (
    <Container>
      <Sidebar />
      <EventContainer>
        <EventContainerHeader>
          <HeaderTitle>Eventos</HeaderTitle>
        </EventContainerHeader>
        <EventBody>
          <MonthPicker />
          <MonthEvents />
        </EventBody>
      </EventContainer>
    </Container>
  );
};

export default Events;
