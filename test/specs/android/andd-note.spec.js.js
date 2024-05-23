describe('Add note ', () => {
    it('skip home button', async () => {
        await $('//*[@resource-id="com.socialnmobile.dictapps.notepad.color.note:id/btn_start_skip"]').click();

        await expect($('//*[@text="Add note"]')).toBeDisplayed();
    });

    it('add note button click', async() =>{
        await $('//*[@text="Add note"]').click();
        await $('//*[@text="Text"]').click();
        await expect($('//*[@text="Editing"]')).toBeDisplayed();
        
        // add note
       await $('//*[@resource-id="com.socialnmobile.dictapps.notepad.color.note:id/edit_title"]').addValue("fav anime List");

        //add note body 
        await $('//*[@resource-id="com.socialnmobile.dictapps.notepad.color.note:id/edit_note"]').addValue("anime List body");
       
        // save the chnages 
        await driver.back();
        await driver.back();


       // await expect($('//*[resource-id="com.socialnmobile.dictapps.notepad.color.note:id/edit_btn"]')).toBeDisplayed();
        await expect($('//*[resource-id="com.socialnmobile.dictapps.notepad.color.note:id/view_note"]')).toHaveText("anime List body");

    })

    
})