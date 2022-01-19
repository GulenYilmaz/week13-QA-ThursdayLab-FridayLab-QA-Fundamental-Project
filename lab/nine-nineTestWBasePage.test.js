const {By,Capabilities}=require('selenium-webdriver')
const Nine=require('../pageObject/extendingNinePage')
const driver =new Builder().withCapabilities(Capabilities.chrome()).build()
const myPage=new Nine(driver,'http://localhost:4000/')

test ('Searching Nine', async ()=>{

    await myPage,navigate()
    await myPage.doSearch('puuppies')

    expect(results).toContain('puuppies')
    await myPage.driver.quit()
})

