describe('andriod Elements Tests', () => {
    it('Find element by accessibility id', async () => {
        //find element by accessibliy id
        const appOption = await $('~App');

        //clcik on element
        await appOption.click();

        //assertion
        const actionBar = await $('~Action Bar');
        await expect(actionBar).toBeExisting();
    });

    it('Find element by class name', async() => {
        //find element by class name
    
        const className = await $('android.widget.TextView');
    
        //Assertion
        await expect(className).toHaveText("API Demos");
    });
     //only mmean we can select that one, if we added x we can avoid the test 
    xit('Find elements by Xpath', async () =>{
        // xpath - (//tagname[@attributr=value])
        await $('//android.widget.TextView[@content-desc="Alert Dialogs"]').click();

        //find by resourceID
        await $('//android.widget.Button[@resource-id="io.appium.android.apis:id/select_button"]').click();

        //find by text
        await $('//android.widget.TextView[@text="Command two"]').click();

        //find by class - assertion

    const textAssertion = await $('//android.widget.TextView');
    await expect(textAssertion).toHaveText("You selected: 1 , Command two");
    })

    it('Find elements by Uiautomator', async () => {
        // find by text contains
        await $('android=new UiSelector().textContains("Alert")').click();
    })

    it('Find multiple elements', async () =>{
        const expectedList = [
            'API Demos', "Access'ibility",
            'Accessibility', 'Animation',
            'App', 'Content',
            'Graphics', 'Media',
            'NFC', 'OS',
            'Preference', 'Text',
            'Views'
          ]
          const actualList = []
      
          // find multiple elements
          const textList = await $$('android.widget.TextView');
      
          // loop through them
          for (const element of textList) {
            actualList.push(await element.getText());
          }
      
          // assert the list
          await expect(actualList).toEqual(expectedList);
    })

    it.only('working with text field', async () =>{
        //access screen
        await $('~Views').click();

        // auto complete screen
        await $('~Auto Complete').click();

        //screenTop
        await $('~1. Screen Top').click();

        //input text enter 
        const textfield = await $('//*[@resource-id="io.appium.android.apis:id/edit"]');
        await textfield.addValue('Canada');

        //verify the country name
        await expect(textfield).toHaveText('Canada');
    })

    
})



