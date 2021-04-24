describe('says Hello World', () => {
    
    var expectedMessage = ""

    beforeEach(() =>  {
        expectedMessage = "Hello World!"
    })

    afterEach(() => {
        expectedMessage = ""
    })

    it('says Hello World', () => {
        expect(helloWorld()).toEqual(expectedMessage)
    })

})