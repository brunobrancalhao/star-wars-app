import {Button, Card, Input, Text} from '@ui-kitten/components';
import React, {Component} from 'react';
import {inject, observer} from 'mobx-react';
import Icon from 'react-native-vector-icons/MaterialIcons';
Icon.loadFont();

import {TextInputMask} from 'react-native-masked-text';

import HomeStore from '../../stores/home.store';
import {StyleSheet} from 'react-native';

interface Props {
  homeStore: HomeStore;
}

@inject('homeStore')
@observer
export default class Home extends Component<Props> {
  render() {
    const {
      etanol,
      gasolina,
      resultado,
      calculate,
      handleForm,
    } = this.props.homeStore;

    return (
      <>
        <Card>
          <Icon
            style={{textAlign: 'center'}}
            name="local-gas-station"
            size={200}
            color="#000"
          />
          <Text>Etanol:</Text>
          <TextInputMask
            type={'money'}
            value={etanol.toString()}
            onChangeText={etanol => handleForm({etanol})}
          />
          <Text>Gasolina:</Text>
          <TextInputMask
            type={'money'}
            value={gasolina.toString()}
            onChangeText={gasolina => handleForm({gasolina})}
          />

          <Button onPress={() => calculate()}>Calcular</Button>
          <Text style={styles.paragraph}>{resultado}</Text>
        </Card>
      </>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingTop: '10',
    padding: 8,
  },
  paragraph: {
    margin: 24,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
