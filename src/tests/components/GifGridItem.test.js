import React from 'react';
import '@testing-library/jest-dom';
import { shallow } from 'enzyme';
import { GifGridItem } from '../../components/GifGridItem';

describe('Pruebas sobre <GifGridItem />', () => {

    const title = 'Goku';
    const url = 'http://localhost/Goku.jpg';

    const wrapper = shallow( <GifGridItem title={ title } url={ url } />);

    test('Debe mostrar el componente correctamente <GifGridItem />  ', () => {
            
        expect( wrapper ).toMatchSnapshot();
    });

    // test('Debe mostrar los atributos title y url como obligatorios  ', () => {
        
    //     const wrapper2 = shallow( <GifGridItem url={ url } />);
    //     expect( wrapper2 ).not.toMatchSnapshot();
    // });
        
    test('Debe tener un parrafo con el title', () => {
        const p = wrapper.find('p');
        expect( p.text().trim() ).toBe( title );
    });
        
    test('Debe tener una imagen con el url y el alt de los props', () => {
        
        const img = wrapper.find('img');
        expect( img.prop('src') ).toBe(url);
        expect( img.prop('alt') ).toBe(title);

    });
        
test('Debe tener una clase llamada animate__fadeInUpBig ', () => {
    const div = wrapper.find('div');
    const className = div.prop('className');
    expect( className.includes('animate__fadeInUpBig') ).toBe( true );
})




});