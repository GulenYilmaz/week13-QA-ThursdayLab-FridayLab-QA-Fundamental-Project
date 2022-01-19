const {By,until, WebDriver}=require('selenium-webdriver')
const chromedriver=require('chromedriver')

module.exports=class basePage {
    driver;
    url;
    constructor(mydriver,myurl){
        this.driver=mydriver
        this.url=myurl
    }
    
    
/* Methods for any page that we might use or enough to use in almost every test*/
async navigate(){
    return await this.driver(this.url)
}

/* waits for the identified elements to be located and visible before returning it 
@param {By} elementBy- the locator for the element to return */
async getElement(elementBy){
    await this.driver.wait(until.elementsLocated(elementBy))
    let element=await this.driver.findElement(elementBy)
    await this.driveer.wait(until.elementIsVisible(elementBy))
    return element
}

/* clicks the given element after waiting for it 
@param {By} elementBy - the locator for the element to rreturn */
async click(elementBy){
    return(await this.getElement(elementBy)).click()
}

/* clears the given element afte waiting for it and then sends the provided keys
@param {By} elementBy- the locator for the element to clear
@param {any} key- string or list of keys to send to the cleared input */
async setInput(element,keys){
    let input =await this.getElement(elementBy)
    await input.clear()
    return input.sendKeys(keys)
}
/*returns an element`s text after waiting for it to be visible 
@param {By} elementBy- locator of the element to get text from
*/
async getText(elementBy){
    return(await this.getElement(elementBy)).getText()
}

}
