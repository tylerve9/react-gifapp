import React from 'react';
import { shallow } from 'enzyme';
import AddCategory from '../../components/AddCategory';

describe('Pruebas para el <AddCategory /> ', () => {
    
    //const setCategories = () => {};
    const setCategories = jest.fn();

    let wrapper = shallow( <AddCategory setCategories={ setCategories } /> );

    beforeEach( () => {
        jest.clearAllMocks();
        wrapper = shallow( <AddCategory setCategories={ setCategories } /> );
    });

    test('Debe mostrar el componente correctamente ', () => {
        expect( wrapper ).toMatchSnapshot();
    });

    test('Debe de cambiar la caja de texto ', () => {
        let inputText = wrapper.find('input');
        const value = 'Miguel';
        inputText.simulate('change', { target: {
            value
        }});

        //expect( inputText.prop('value') ).toBe( value );
    });
    
    test('No debe de postear la caja del submit', () => {
        wrapper.find('form').simulate('submit', { preventDefault(){} });
        expect( setCategories ).not.toHaveBeenCalled();
    });

    test('Debe de postear la caja del submit', () => {
        const inputText = wrapper.find('input');
        const value = 'Miguel';
        inputText.simulate('change', { target: {
            value
        }});
        wrapper.find('form').simulate('submit', { preventDefault(){} });

        expect( setCategories ).toHaveBeenCalled();
        expect( setCategories ).toHaveBeenCalledTimes(1);
        expect( setCategories ).toHaveBeenCalledWith( expect.any(Function) );
        expect( inputText.prop('value') ).toBe('');
    });
    

    
});
