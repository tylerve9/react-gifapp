import React from 'react';
import '@testing-library/jest-dom';
import { shallow } from 'enzyme';
import GifGrid from '../../components/GifGrid';
import { useFetchGifs } from '../../hooks/useFetchGifs';

jest.mock('../../hooks/useFetchGifs');

describe('Pruebas sobre el componente <GifGrid /> ', () => {
    const category = ''
    //const wrapper = shallow( <GifGrid category={ category } /> );
    
    test('Debe renderizar el componente <GifGrid /> correctamente ', () => {
        useFetchGifs.mockReturnValue({
            data: [],
            loading: true
        });
        const wrapper = shallow( <GifGrid category={ category } /> );
        expect( wrapper ).toMatchSnapshot();
    });

    test('Debe mostrar data unavez cargada', () => {

        useFetchGifs.mockReturnValue({
                data: [{
                    id: 'ABC',
                    url: 'https://localhost/algo-jpg',
                    title: 'Cualquier cosa'
                }],
                loading: false
        });
        const wrapper = shallow( <GifGrid category={ category } /> );
        //expect( wrapper ).toMatchSnapshot();
        expect( wrapper.find('p').exists() ).toBe(false);
        expect( wrapper.find('GifGridItem').length ).toBe(1);

    });
    
    
});