
import { filterAlive, filterDead, filterFemale, filterMale, orderAz } from '../src/data.js';
import { mock, mockAZ } from './dataTesing.js';



describe('Este test es para detectar que el filtro de vivo, muerto, femenino y masculino funcione', () => {
  it('is a function', () => {
    expect(typeof filterAlive).toEqual('function');
  });

  it ('deberia retornar los personajes vivos cuando el filtro es vivo', () => {
    const vivos = filterAlive(mock,'Alive')
    expect(vivos.lenght).toEqual(3);

  });

  it ('deberia retornar los personajes muertos cuando el filtro es Dead', () => {
    const muertos= filterDead(mock,'Dead')
    expect(muertos.lenght).toEqual(1);

  });
  
  it ('deberia retornar los personajes femeninos cuando el filtro es Female', () => {
    const femeninos= filterFemale(mock,'Female')
    expect(femeninos.lenght).toEqual(2);

  });

  it ('deberia retornar los personajes masculinos cuando el filtro es Male', () => {
    const masculinos= filterMale(mock,'Male')
    expect(masculinos.lenght).toEqual(2);

  });
}); 

describe('Este test es para probar la función orderAZ', () => {
  it('is a function', () => {
    expect(typeof orderAZ).toEqual('function');
  });

  it ('deberia ordenar alfabeticamente', () => {
      expect(orderAz(mock)).toStrictEqual(mockAZ);

  });  
}); 

