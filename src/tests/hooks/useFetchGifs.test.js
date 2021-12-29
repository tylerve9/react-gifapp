import { useFetchGifs } from '../../hooks/useFetchGifs';
import { renderHook } from '@testing-library/react-hooks';


describe('Pruebas en el hook useFetchGifs', () => {
    test('debe retornar el estado inicial', async () => {

        //const { data:images, loading } = useFetchGifs('Samuray X');
        //const resp = renderHook( () => useFecthGifs('Samurai X') );
        const { result, waitForNextUpdate } = renderHook( () => useFetchGifs('Samurai X') );
        const { data:images, loading } = result.current;

        await waitForNextUpdate();

        expect( images ).toEqual([]);
        expect( images.length ).toBe(0);
        expect( loading ).toBe(true);
    });

    test('debe retornar el estado con un arreglo de iamgenes y loading en false ', async () => {
        const { result, waitForNextUpdate } = renderHook( () => useFetchGifs('Samurai X') );
        
        await waitForNextUpdate();
        
        const { data:images, loading } = result.current;

        expect( images.length ).toBe(10);
        expect( loading ).toBe(false);
    })
    
    
});

