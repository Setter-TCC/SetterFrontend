import React, { createRef, RefObject, useState } from 'react';
import InputMask from 'react-input-mask';
import { Container, Column, InputWrapper, SettingsForm, Buttons, SettingsFormBox, NotFoundContainer, NotFoundText, AddCoachButton } from './styles';
import { translatedCoachTemplate, coachDataTemplate } from '../utils/const';
import notFoundImg from '../../../assets/images/notFound.svg';
import { CoachData, translateCoachBackData, translateEditCoachData } from '../utils/interfaces';
import { useSettings } from '../../../hooks/Settings';

const CoachSettings: React.FC = () => {
  const inputRef: RefObject<HTMLInputElement> = createRef();
  const { setDeactivateCoach } = useSettings();
  const [showForm, setShowForm] = useState(false);
  const [coachData, setCoachData] = useState<CoachData>({} as CoachData);

  // O coach.template vai ser uma chamada da api para saber se tem algum técnico ativo no time

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // TODO: verificar se Dt de saída está preenchida, 
    // Não deixar selecionar uma data de saída menor que o dia de hoje
    // const coachBackData = 
    const isEndDateFilled = coachData.endDate !== undefined;

    if (isEndDateFilled) {
      // se sim, mostrar modal de confirmação e enviar para a api o desativar técnico
      setDeactivateCoach(translatedCoachTemplate);
    }
    // se não, enviar para a api o atualizar técnico
    console.log('atualizar técnico');
    // const coachBackData = translatedCoachTemplate ? translateEditCoachData(coachDataTemplate, coachData) : translateCoachBackData(coachData);
    // console.log(coachBackData);
  };

  const renderCoachForm = () => {
    return (
      <Container>
        <SettingsForm onSubmit={onSubmit}>
          <SettingsFormBox>
            <Column>
              <InputWrapper>
                <label>Nome</label>
                <input
                  required
                  type="text"
                  id="name"
                  ref={inputRef}
                  defaultValue={translatedCoachTemplate.name}
                  value={coachData.name}
                  onChange={(e) => setCoachData({ ...coachData, name: e.target.value })}
                />
              </InputWrapper>
              <InputWrapper>
                <label>RG</label>
                <InputMask
                  mask="99.999.999-9"
                  id="rg"
                  type="text"
                  defaultValue={translatedCoachTemplate.rg}
                  value={coachData.rg}
                  onChange={(e) => setCoachData({ ...coachData, rg: e.target.value })}
                />
              </InputWrapper>
              <InputWrapper>
                <label>CPF</label>
                <InputMask
                  mask="999.999.999-99"
                  id="cpf"
                  type="text"
                  defaultValue={translatedCoachTemplate.cpf}
                  value={coachData.cpf}
                  onChange={(e) => setCoachData({ ...coachData, cpf: e.target.value })}
                />
              </InputWrapper>
              <InputWrapper>

                <label>CREF</label>
                <input
                  type="text"
                  defaultValue={translatedCoachTemplate.cref}
                  value={coachData.cref}
                  onChange={(e) => setCoachData({ ...coachData, cref: e.target.value })}
                />
              </InputWrapper>
            </Column>
            <Column>
              <InputWrapper>
                <label>Email</label>
                <input
                  type="email"
                  ref={inputRef}
                  required
                  defaultValue={translatedCoachTemplate.email}
                  value={coachData.email}
                  onChange={(e) => setCoachData({ ...coachData, email: e.target.value })}
                />
              </InputWrapper>
              <InputWrapper>
                <label>Telefone</label>
                <InputMask
                  mask="(99) 99999-9999"
                  id="phone"
                  type="text"
                  defaultValue={translatedCoachTemplate.phone}
                  value={coachData.phone}
                  onChange={(e) => setCoachData({ ...coachData, phone: e.target.value })}
                />
              </InputWrapper>
              <InputWrapper>
                <label>Data de Entrada</label>
                <input
                  required
                  type="date"
                  defaultValue={translatedCoachTemplate.startDate}
                  value={coachData.startDate}
                  onChange={(e) => setCoachData({ ...coachData, startDate: e.target.value })}
                />
              </InputWrapper>
              <InputWrapper>
                <label>Data de Saída</label>
                <input
                  type="date"
                  defaultValue={translatedCoachTemplate?.endDate}
                  value={coachData.endDate}
                  onChange={(e) => setCoachData({ ...coachData, endDate: e.target.value })}
                />
              </InputWrapper>
            </Column>
          </SettingsFormBox>
          <Buttons>
            <button className="save" type="submit">Salvar Alterações</button>
          </Buttons>
        </SettingsForm>
      </Container>
    );
  };

  return (
    <>
      {translatedCoachTemplate.isActive || showForm ? (
        <>
          {renderCoachForm()}
        </>
      ) : (
        <NotFoundContainer>
          <img src={notFoundImg} alt="Não há técnicos ativos no time" />
          <NotFoundText>Não há técnicos ativos no time!</NotFoundText>
          <AddCoachButton type="button"
            onClick={() => setShowForm(true)}
          >Adicionar Técnico</AddCoachButton>
        </NotFoundContainer>
      )}
    </>
  );
};

export default CoachSettings;
