import { getGifs } from "../../src/helpers/getGifs";

describe( 'Pruebas en getGifs()' , () => {

    test('should retornar un arreglo de gifs', async() => { 
        
        const gifs = await getGifs('One Punch');

        expect( gifs.length ).toBeGreaterThan( 0 );
        expect( gifs[0] ).toEqual ({
            title   : expect.any( String ),
            id      : expect.any( String ),
            url     : expect.any( String ),
        })
     });
});