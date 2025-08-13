
const {readFile} =  require('fs/promises')

describe('Basic test', ()=>{
    it('Is text found', async ()=>{
        const text = (await readFile('./README')).toString();
        
        expect(text.toLocaleLowerCase()).toMatch(/hello world/);        
    })
})