import React from 'react';
import styled from 'styled-components/native';
import { TextInput } from './Forms';

const Container = styled.View`
  flex-direction: row;
`;

const FieldContainer = styled.View`
  align-items: center;
`;

const FieldLabel = styled.Text`
  margin-top: 5px;
  color: #FFFFFF;
`;

const Input = styled(TextInput)`
  width: 60px;
  text-align: center;
`;

const Separator = styled.Text`
  color: #FFFFFF;
  font-size: 18px;
  margin-left: 5px;
  margin-right: 5px;
  padding-top: 5px;
  font-weight: bold;
`;

const TimerInput = (props) => {
  const [hours, setHours] = React.useState();
  const [minutes, setMinutes] = React.useState();
  const [seconds, setSeconds] = React.useState();
  const [fraction, setFraction] = React.useState();

  const getDetailedValues = () => {
    const splittedValue = props.value.split(':');

    setHours(splittedValue[0])
    setMinutes(splittedValue[1])

    const splittedSeconds = splittedValue[2].split('.');
    setSeconds(splittedSeconds[0]);
    setFraction(splittedSeconds[1]);
  }

  const validate = (value) => {
    if (value >= 0) {
      return true;
    }
  }

  const validateMinAndSeconds = (value) => {
    if (value < 60) {
      return true;
    }
  }

  const handleChange = (field) => (value) => {
    let [hh, mm, ss, SS] = [hours, minutes, seconds, fraction];

    switch (field) {
      case 'hours': {
        hh = value;
        setHours(value);
        break;
      }
      case 'minutes': {
        if (validate(value) && validateMinAndSeconds(value)) {
          mm = value;
          setMinutes(value);
        }
        break;
      }
      case 'seconds': {
        if (validate(value) && validateMinAndSeconds(value)) {
          ss = value;
          setSeconds(value);
        }
        break;
      }
      case 'fraction': {
        SS = value;
        setFraction(value);
        break;
      }
    }

    props.onChange(`${hh}:${mm}:${ss}.${SS}`);
  }

  const handleEndEditing = (field) => (event) => {
    const value = event.nativeEvent.text;
    if (value) {
      return;
    }

    let [hh, mm, ss, SS] = [hours, minutes, seconds, fraction];
    const defaultValue = '00';

    switch (field) {
      case 'hours': {
        hh = defaultValue;
        setHours(defaultValue);
        break;
      }
      case 'minutes': {
        mm = defaultValue;
        setMinutes(defaultValue);
        break;
      }
      case 'seconds': {
        ss = defaultValue;
        setSeconds(defaultValue);
        break;
      }
      case 'fraction': {
        SS = defaultValue;
        setFraction(defaultValue);
        break;
      }
    }

    props.onChange(`${hh}:${mm}:${ss}.${SS}`);
  }

  React.useEffect(() => {
    if (props.value) {
      getDetailedValues();
    }
  }, [props.value]);

  return (
    <Container>
      <FieldContainer>
        <Input
          onChangeText={handleChange('hours')}
          onEndEditing={handleEndEditing('hours')}
          value={hours}
          maxLength={2}
          keyboardType={'numeric'}
        />
        <FieldLabel>Horas</FieldLabel>
      </FieldContainer>
      <Separator>:</Separator>
      <FieldContainer>
        <Input
          onChangeText={handleChange('minutes')}
          onEndEditing={handleEndEditing('minutes')}
          value={minutes}
          maxLength={2}
          keyboardType={'numeric'}
        />
        <FieldLabel>Minutos</FieldLabel>
      </FieldContainer>
      <Separator>:</Separator>
      <FieldContainer>
        <Input
          onChangeText={handleChange('seconds')}
          onEndEditing={handleEndEditing('seconds')}
          value={seconds}
          maxLength={2}
          keyboardType={'numeric'}
        />
        <FieldLabel>Segundos</FieldLabel>
      </FieldContainer>
      <Separator>.</Separator>
      <FieldContainer>
        <Input
          onChangeText={handleChange('fraction')}
          onEndEditing={handleEndEditing('fraction')}
          value={fraction}
          maxLength={3}
          keyboardType={'numeric'}
        />
        <FieldLabel>Fracción</FieldLabel>
      </FieldContainer>
    </Container>
  )
}

export default TimerInput;