import { render, screen } from "@testing-library/react";
import { GifGrid } from "../../src/components/GifGrid";
import { useFetchGifs } from "../../src/hooks/useFetchGifs";

jest.mock('../../src/hooks/useFetchGifs');

describe('Pruebas en <GifGrid />', () => { 
    
    const category = 'One Punch';

    test('should mostrar el loading inicialmente', () => { 
        
        useFetchGifs.mockReturnValue({
            images   : [],
            isLoading: true,
        });

        render( <GifGrid category={ category } /> );
        expect( screen.getByText( 'Cargando...' ) );
        expect( screen.getByText( category ) );
    });

    test('should mostrar items cuando se cargan las imagenes useFetchGifs', () => { 
        
        const gifs = [
            {
                id: 'ABC',
                title: 'Saitama',
                url: 'https://wwww.lasimagenesgif.com/saitama.jpg'
            },
            {
                id: 'DFG',
                title: 'Goku',
                url: 'https://wwww.lasimagenesgif.com/goku.jpg'
            },
            {
                id: 'HIJ',
                title: 'One Piece',
                url: 'https://wwww.lasimagenesgif.com/onepiece.jpg'
            },
        ];

        useFetchGifs.mockReturnValue({
            images   : gifs,
            isLoading: true,
        });

        render( <GifGrid category={ category } /> );
        expect( screen.getAllByRole('img').length ).toBe( 3 );

    });

 });