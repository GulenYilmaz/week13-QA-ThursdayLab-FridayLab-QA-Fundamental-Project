const {By}=require('selenium-webdriver')
const {basePage}=require('./basePage')

module.exports=class Nine extends basePage {
    
    /* selectors*/
    searchBar =By.css('inut[name="q"]')
    results =By.id('res')
    constructor(driver,url){
        super(driver,url)
        /* when we use super we are calling the orijinal element and methods from the base page */
    }

    /*  methods */
    async doSearch(term){
        await this.setInput(this.searchBar, `${term}\n`)
    }
    async getResults(){
        return await this.getText(this.results)
    }
    

}