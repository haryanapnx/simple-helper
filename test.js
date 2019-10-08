
const assert = require('assert')
const helper = require('./index')
// check reverse 
assert.equal('nakam', helper.reverse_string('makan'), 'makan reverse nakam');
assert.equal('buhtig', helper.reverse_string('github'), 'github reverse buhtig');
assert.equal('rebot kcah', helper.reverse_string('hack tober'), 'github reverse buhtig');

assert.equal(true, helper.is_palindrome('Repaper'), 'Repaper is palindrome');
assert.equal(true, helper.is_palindrome('kakak'), 'kakak is palindrome');
assert.equal([1,3], helper.remove_item_array(1,[1,2,3]), 'remove succes');

assert.equal(true, helper.isEmpty(0), '0 is empty');
// true when value = ""
assert.equal(true, helper.isEmpty(""), '"" is empty');
// false when value = "1"
assert.equal(false, helper.isEmpty(1), '1 is not empty');
// true when value = "0"
assert.equal(true, helper.isEmpty("0"), '0 is empty');
// true when value  = {}
assert.equal(true, helper.isEmpty({}), '{} is empty');