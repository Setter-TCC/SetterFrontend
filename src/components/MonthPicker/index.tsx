import React, { useEffect, useState } from 'react';
import 'react-datepicker/dist/react-datepicker.css';
import { registerLocale } from 'react-datepicker';
import ptBR from 'date-fns/locale/pt-BR';
import { Container, SelectMonthContainer, StyledDatePicker } from './styles';
import { useCash } from '../../hooks/Cash';

registerLocale('pt-BR', ptBR);

const MonthPicker: React.FC = () => {
  const [selectedDate, setSelectedDate] = useState<Date>(new Date());
  const { setSelectedMonth } = useCash();

  const handleSelect = (date: Date) => {
    setSelectedDate(date);
    setSelectedMonth({ month: date.getMonth() + 1, year: date.getFullYear() });
  };

  useEffect(() => {
    setSelectedMonth({ month: selectedDate.getMonth() + 1, year: selectedDate.getFullYear() });
  }, []);

  return (
    <Container>
      <SelectMonthContainer>
        <h3>Selecione o mês</h3>
        <StyledDatePicker
          selected={selectedDate}
          onChange={handleSelect}
          dateFormat="MMMM yyyy"
          showMonthYearPicker
          locale="pt-BR"
        />
      </SelectMonthContainer>
    </Container>
  );
};

export default MonthPicker;
