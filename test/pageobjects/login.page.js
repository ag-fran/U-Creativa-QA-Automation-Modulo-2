const Page = require('./page');

/**
 * sub page containing specific selectors and methods for a specific page
 */
class LoginPage extends Page {
    /**
     * define selectors using getter methods
     */
    get SanJoseButttom () { return $('//*[@id="landingPage"]/div[1]/div[2]/div[2]/div/div[2]/div[1]/div[1]/div[1]/div/div[1]/div[2]/div/div[1]/div') }
  
    get inputDeparture () { return $('//*[@id="landingPage"]/div[1]/div[2]/div[2]/div/div[2]/div[1]/div[1]/div[1]/div/div[1]/div[2]/div/input') }  
    get departureButon (){return $('//*[@id="landingPage"]/div[1]/div[2]/div[2]/div/div[2]/div[1]/div[1]/div[1]/div/div[2]/div/div/div/div[1]/div')}                 
    get inputArrival () { return $('/html/body/div[2]/div[3]/div[1]/div[1]/div[2]/div[2]/div/div[2]/div[1]/div[2]/div/div[1]/div[2]/div/input') } 
   
    get inputDepartureDate () { return $('input[name ="search-outboundDate"]') } 
    //get inputArrivalDate () { return $('input[name ="search-inboundDate"]') }
    get buttonCalendar1 (){return $('div[data-value="2020-09-03"]')}
    get buttonCalendar2 (){return $('div[data-value="2020-09-04"]')}
    get buttonCalendarFinish (){return $('button[data-test="SearchFormDoneButton"]')}
    get buttonSearch (){return $('a[data-test="LandingSearchButton"]')}
    
                                                                                                   
                              
    
    
    
    
    //get btnBuscar () { return $('//*[@id="landingPage"]/div[1]/div[2]/div[2]/div/div[2]/div[2]/a/div/div') }

    /**
     * a method to encapsule automation code to interact with the page
     * e.g. to login using username and password
     */
    clearData(){
        this.SanJoseButttom.click();
    }

    fligthPlaces (inputDeparture, inputArrival) {
        this.inputDeparture.setValue(inputDeparture);
        this.inputDeparture.click();
        this.inputArrival.setValue(inputArrival);
        this.inputArrival.click();
        
       
         
    }
   
    fligthDates (){
        this.inputDepartureDate.click();
        this.buttonCalendar1.click();
        this.buttonCalendar2.click();
        this.buttonCalendarFinish.click();
        this.buttonSearch.click();
    }
   

    buttomWaiter(){
        inputDeparture.waitForClickable({timeout:10000});
    }

   

    /**
     * overwrite specifc options to adapt it to page object
     */
    open () {
        return super.open('login');
    }
}

module.exports = new LoginPage();
