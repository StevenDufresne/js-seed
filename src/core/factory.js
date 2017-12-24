import components from '../components';

export class Factory {
  renderComponents(layers) {
    for(var i = 0; i < layers.length; i++) {
      const comp = new components[layers[i].type](layers[i]);
    }
  }
}

export default new Factory();

