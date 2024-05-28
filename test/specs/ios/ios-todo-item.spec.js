describe('Todo List', () => {
    it('Create a Todo List', async () => {
      await $('//*[@name="Create list"]').click();
      await $('//*[@value="List Name"]').addValue("Things to do today");
      await $('~Create').click();
  
      await expect(await $("~Things to do today")).toBeExisting();

      // Create Todo Item
    await $("~Things to do").click();
    await $("//*[@name='Create item']").click();
    await $('//*[@value="Title"]').addValue("Buy groceries");
    await $("//*[@value='Due']").click();
    await $("~Date Picker").click();
    await $("~Sunday, November 28").click();
    await $("//XCUIElementTypeWindow[@index=2]").click();
    await $("~Create").click();

    // assertion
    await expect(await $("~Buy groceries")).toBeExisting();
    await expect(await $("~Due November 28, 2021")).toBeExisting();
  });
  });