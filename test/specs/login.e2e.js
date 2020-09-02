const LoginPage = require('../pageobjects/login.page');
const NavigationPage = require('../pageobjects/navigation.page');
const wait = require('../helpers/waits')

describe('Final Project Module 2', () => {
    it('Test 1', () => {
        browser.url(`https://www.kiwi.com/mx/`)
        LoginPage.clearData();
        LoginPage.fligthPlaces("TXL","Londres STN");
        LoginPage.fligthDates();
        browser.pause(8000);
        expect(browser).toHaveUrl('https://www.kiwi.com/mx/search/results/aeropuerto-de-berlin-tegel-berlin-alemania/aeropuerto-de-londres-stansted-londres-reino-unido/2020-09-03/2020-09-04');
        const fligthList = $('div[data-test="ResultList"]');
        expect(fligthList).toBeDisplayed();
    });
    it('Test 2', () => {
        browser.url(`https://www.kiwi.com/us/search/results/berlin-tegel-berlin-germany/london-united-kingdom/2020-10-01_2020-10-31/2020-10-01_2020-10-31`)
        NavigationPage.getResults();
        browser.maximizeWindow();
        NavigationPage.busFilter();
        NavigationPage.getEmptyBusResults();


    });
    it('Test 3', () => {
        browser.url(`https://www.kiwi.com/us/search/results/berlin-tegel-berlin-germany/london-united-kingdom/2020-10-01_2020-10-31/2020-10-01_2020-10-31`)
        NavigationPage.selectedfligth();
        NavigationPage.completeCountry();
        NavigationPage.completeNation();
        NavigationPage.completeGender();
        NavigationPage.completeBM();
        NavigationPage.completeIDEM();
        NavigationPage.completeFormManual("fr87@hotmail.com","22658844","Prueba","Final","01","1995","584752254","01","2022");
        NavigationPage.finishForm1();
        NavigationPage.finishForm2();
        NavigationPage.finishForm3();
        NavigationPage.getpassportiDCheckText();
        NavigationPage.getNameCheckText();
        NavigationPage.getPhoneCheckText();
        NavigationPage.getEmailCheckText();
        
    });
});


