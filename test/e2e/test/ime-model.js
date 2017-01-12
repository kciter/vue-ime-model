module.exports = {
  inital: function (browser) {
    browser
      .url('http://localhost:8080/examples/')
      .waitForElementVisible('p', 1000)
      .assert.containsText('p', 'Hello, Vue.js!', 'You should be implemented !!')
      .end()
  },
  changeInputValue: function (browser) {
    browser
      .url('http://localhost:8080/examples/')
      .waitForElementVisible('p', 1000)
      .setValue('input', '!sj.euV ,olleH')
      .assert.containsText('p', '!sj.euV ,olleH', 'You should be implemented !!')
      .end()
  }
}
