const Page = require('./page');

/**
 * sub page containing specific selectors and methods for a specific page
 */
class NavigationPage extends Page {
    /**
     * define selectors using getter methods
     */
  /**  get conduitLabel () { return $('a.navbar-brand.ng-binding') }
    get signInLink () { return $('=Sign in') }
    get signUpLink () { return $('*=up') }
    


    }

    
    getConduitText(){
        return this.conduitLabel.getText();
    }
    */
   get airButton (){return $('div.FilterWrapper__StyledContentWrapper-sc-1cpg3jn-1:nth-child(1) > label:nth-child(1) > div:nth-child(2) > svg:nth-child(1)')}
   get busButton (){return $('div.FilterWrapper__StyledContentWrapper-sc-1cpg3jn-1:nth-child(2) > label:nth-child(1) > div:nth-child(2) > svg:nth-child(1)')}
   get trainButton (){return $('div.FilterWrapper__StyledContentWrapper-sc-1cpg3jn-1:nth-child(3) > label:nth-child(1) > div:nth-child(2) > svg:nth-child(1)')}
   
   get bookingButton (){return $('div[data-test="BookingButton"]')}
  
   get emailTextField (){return $('input[name="email"]')}
   get phone(){return $(' [name="phone"]')} 
   get firstName(){return $(' [name="firstname"]')}  
   get name(){return $(' [name="lastname"]')} 
   get birthDay(){return $(' [name="birthDay"]')}
   get idExpirationDay(){return $(' [name="idExpirationDay"]')} 
   get idExpirationYear(){return $(' [name="idExpirationYear"]')} 
   get birthYear(){return $(' [name="birthYear"]')}
   get idpassport(){return $(' [name="idNumber"]')}  
   
   get nameCountry(){return $('[name="phoneCountry"]')} 
   get crTel (){return $('//option[@value="af"]')} 
   get nationality(){return $(' [name="nationality"]')}
   get opNational (){return $('/html/body/div[2]/div[3]/div[1]/div/div/div[1]/form/div[4]/div/div[1]/div/div[2]/div/div/div/form/fieldset/div[2]/div[1]/div/div[1]/label/div/select/option[2]')}
   get gender(){return $(' [name="title"]')} 
   get opGender (){return $('//option[@value="mr"]')}
   get birthMonth(){return $(' [name="birthMonth"]')}
   get opBM (){return $('option[value="02"]')}
   get idExpirationMonth(){return $(' [name="idExpirationMonth"]')}
   get opIDEM (){return $('option[value="02"]')}

   get contnueButton (){return $('button[data-test="StepControls-passengers-next"]')}
   
   
   

   busFilter(){
        this.airButton.click();
        this.trainButton.click();
    }

    selectedfligth(){
        this.bookingButton.click();
    }
    
    completeFormManual(emailTextField,phone,firstName,name,birthDay,birthYear,idpassport,idExpirationDay,idExpirationYear){
        this.emailTextField.setValue(emailTextField);
        this.phone.setValue(phone);
        this.firstName.setValue(firstName);
        this.name.setValue(name);
        this.birthDay.setValue(birthDay);
        this.birthYear.setValue(birthYear);
        this.idpassport.setValue(idpassport);
        this.idExpirationDay.setValue(idExpirationDay);
        this.idExpirationYear.setValue(idExpirationYear);
    }

   
    completeCountry (){
        this.nameCountry.click();
        this.crTel.click();

    }
    completeNation(){
        this.nationality.click();
        this.opNational.click();

    }
    completeGender(){
        this.gender.click();
       
        this.opGender.click();
    }

    completeBM(){
        this.birthMonth.click();
        
        this.opBM.click();

    }
        
    
    completeIDEM(){
        this.idExpirationMonth.click();
        
        this.opIDEM.click();
    }

    
        
        
        
        

    finishForm1 (){
        this.contnueButton.click();
    }

   getResults(){
    const fligthList = $('div[data-test="ResultList"]');
    expect(fligthList).toBeDisplayed();
   
   }

   getEmptyBusResults(){
    const emptyList = $('/html/body/div[2]/div[3]/div[1]/div[2]/div/div/div/div/div/div[2]/div/div[2]/div/div/div/div/div/div[1]/div/div/div[1]')
    expect(emptyList).toBeDisplayed();
   }

   trainFilter(){
     this.airButton.click();
   } 
   
    open () {
        return super.open('');
    }

}

module.exports = new NavigationPage();