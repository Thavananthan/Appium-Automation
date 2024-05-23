describe('Android native feature tests', () => {
   
    it('Access an activity directly', async () => {
        await driver.startActivity("io.appium.android.apis","io.appium.android.apis.app.AlertDialogSamples")
        await driver.pause(5000);
 
        const ele = await $('//*[@text="App/Alert Dialogs"]');
        await expect(ele).toExist()
 
    });

    it('Working with Dialog Boxes', async() => {

        await driver.startActivity("io.appium.android.apis","io.appium.android.apis.app.AlertDialogSamples")

        //click on first dialog
        await $('//*[@resource-id="io.appium.android.apis:id/two_buttons"]').click();

        //accept Alert 
       // await driver.acceptAlert();

       //Click on the ok button
        await $('//*[@resource-id="android:id/button1"]').click()

        // assertion - alert box is no longer visible

        await expect($('//*[@resource-id="android:id/alertTitle"]')).not.toExist();
    })

    it('Vertical scrolling',async() =>{
        
        await $('~App').click();
        await $('~Activity').click();

        //scroll to the end
        //await $('android=new UiScrollable(new UiSelector().scrollable(true)).scrollToEnd(1,5)');

        // scrollTextIntoView - more stable
        await $('android=new UiScrollable(new UiSelector().scrollable(true)).scrollTextIntoView("Secure Surfaces")').click();

        //await $('~Secure Surfaces').click();

        //assertion
        await expect($('~Secure Dialog')).toExist();
    });

    it('Horizontal Scrolling', async () => {
        await driver.startActivity("io.appium.android.apis","io.appium.android.apis.view.Gallery1");
        
        //Horizontal scrolling
        await $('android=new UiScrollable(new UiSelector().scrollable(true)).setAsHorizontalList().scrollForward()');
       await $('android=new UiScrollable(new UiSelector().scrollable(true)).setAsHorizontalList().scrollBackward()');

        await driver.pause(3000);
    })

    it.only('working with a date picker', async () => {
        // access the date picker
        await driver.startActivity("io.appium.android.apis","io.appium.android.apis.view.DateWidgets1")

        //get current date
        const date = await $('//*[@resource-id="io.appium.android.apis:id/dateDisplay"]');
        const currentDate = await date.getText();
        //clcik on change the date button
        // const ls = await $('//*[@resource-id="io.appium.android.apis:id/pickDate"]');
        await $('~change the date').click();
        //scroll right to next month
        await $('android=new UiScrollable(new UiSelector().scrollable(true)).setAsHorizontalList().scrollForward()');
        //clcik on ok button
         await $('//*[@text="20"]').click();

         //click on ok button
         await $('//*[@resource-id="android:id/button1"]').click();
        //verify the updated date

        await expect(await date.getText()).not.toEqual(currentDate);
    })

});

//.view.Gallery1