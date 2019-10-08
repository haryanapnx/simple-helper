
const assert = require('assert')
const helper = require('./index')
// check reverse 
assert.equal('nakam', helper.reverse_string('makan'), 'makan reverse nakam');
assert.equal('buhtig', helper.reverse_string('github'), 'github reverse buhtig');
assert.equal('rebot kcah', helper.reverse_string('hack tober'), 'github reverse buhtig');

assert.equal(true, helper.is_palindrome('Repaper'), 'Repaper is palindrome');
assert.equal(true, helper.is_palindrome('kakak'), 'kakak is palindrome');