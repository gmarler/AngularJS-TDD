describe('Given I am posting a new comment', function () {
  describe('When I push the Submit button', function () {
    beforeEach(function () {
      browser.get('/');

      var commentInput = $('input');
      commentInput.sendKeys('a comment');

      var submitButton = element(by.buttonText('Submit')).click();
    });

    it('Add the comment', function () {
      var comments = element.all(by.repeater('comment in comments')).first();
      expect(comments.getText()).toBe('a comment');
    });
  });
});