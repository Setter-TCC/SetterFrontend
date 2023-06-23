import React, { useState } from 'react';
import 'react-datepicker/dist/react-datepicker.css';
import { registerLocale } from 'react-datepicker';
import ptBR from 'date-fns/locale/pt-BR';
import { Container, SelectMonthContainer, StyledDatePicker } from './styles';

registerLocale('pt-BR', ptBR);

const MonthPicker: React.FC = () => {
  const [selectedMonth, setSelectedMonth] = useState<Date>(new Date());

  const handleSelect = (date: Date) => {
    setSelectedMonth(date);
  };

  return (
    <Container>
      <SelectMonthContainer>
        <h3>Selecione o mês</h3>
        <StyledDatePicker
          selected={selectedMonth}
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
