const LoginPage = require('../pageobjects/login.page');
const NavigationPage = require('../pageobjects/navigation.page');
const wait = require('../helpers/waits')

describe('Final Project Module 2', () => {
    it('Test 1', () => {
        browser.url(`https://www.kiwi.com/mx/`)
       // NavigationPage.open();
        LoginPage.clearData();
        LoginPage.fligthPlaces("Londres STN","Londres STN");
        LoginPage.fligthDates();
        browser.pause(8000);
        expect(browser).toHaveUrl('https://www.kiwi.com/mx/search/results/aeropuerto-de-berlin-tegel-berlin-alemania/londres-reino-unido/2020-09-03/2020-09-04');
        const fligthList = $('div[data-test="ResultList"]');
        expect(fligthList).toBeDisplayed();
    });
    it('Test 2', () => {
        browser.url(`https://www.kiwi.com/us/search/results/berlin-tegel-berlin-germany/london-united-kingdom/2020-10-01_2020-10-31/2020-10-01_2020-10-31`)
        NavigationPage.getResults();
        browser.maximizeWindow();
        NavigationPage.busFilter();
        NavigationPage.getEmptyBusResults();
        //browser.url(`https://www.kiwi.com/us/search/results/berlin-tegel-berlin-germany/london-united-kingdom/2020-10-01_2020-10-31/2020-10-01_2020-10-31`)
       // NavigationPage.trainFilter();
       // NavigationPage.getResults();

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
        //expect(browser).toHaveUrl('https://www.kiwi.com/us/booking?%3FbackToSearchUrl=https%3A%2F%2Fwww.kiwi.com%2Fus%2Fsearch%2Fresults%2Fberlin-tegel-berlin-germany%2Flondon-united-kingdom%2F2020-10-01_2020-10-31%2F2020-10-01_2020-10-31&activeStep=3&currency=usd&direct=true&flightsId=1aae22f548760000c0b0013b_0-22f51aae48840000921a0096_0&handBags=0&holdBags=0&locale=us&passengers=1&price=86&searchType=return&token=A8i14I-SaX2iKylzGu8q9fpxJ064GOAzxXKCIHkysemH5V--iq_Hc9ukepMiPF2cATqeCQCdo780WoFEbIy8AqJHsBCtFhafgBVbXfeykIRTHaSy27u-AIbM9JdSYxHHaMQvYSOqUFDcT9UtwBqwB3eBAmAvsUwkd1IwXfHNLPIkCmNsmhGCuwTcpwExUHLKiAoXCIdzvrc-qnr5KKSzpKnmSvvu6f5VV9wdQt5HEQtnALXT4Oi0aBbYUC1sWpHbanJtxzaDSG2_9a4ukWkeyiFtOCDpYU-Gz3NoAgRIPMJhhObTxWDG4bmBXVr0D_tzE2kH8z6nB3w17CXi1Ta-dANzU4lPXWlFH0VvQQQHTMIcY0T1aJxgoxjCJvCm1x1YThPfnTOlbuf_9Li3fcrviX2eW8wIrS9TL2IqHFUIpR2bPIHgWjTHjgdHi1BsxNOI4pdbRX2K3u0K0HORyl88YWdXIxdahb-KKMf0SwKnFpzNjj-O2OYHgmWFR05-B5hxaoP6VtG-HwT6EHdTEx9Q6zvERoX9l2KNfgbHgjWMt5tKIDRslk2kd28KvDeZ0d3kJOjKvDg41wePDGvm1GKc37E-mAxqfITc4umjFU8h6Nokshq94gp021Ufdz4NzyAUpHUE9N-wzm0mFJmw9InKjX5TvddjJASH7Uw1VAyJ7ujdDIZstEmP4LIa8ACu5ADcX7im1knh3GL1Tuz5MbtTuJvbVKVnPLrtWUU_ktbr_H7x-qpZh8opYIYRtBmBajJg_arZoR9uSiIE60tetAiR4og%3D%3D');
        NavigationPage.getpassportiDCheckText();
        NavigationPage.getNameCheckText();
        NavigationPage.getPhoneCheckText();
        NavigationPage.getEmailCheckText();
        
    });
});


