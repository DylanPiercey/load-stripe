'use strict'

var _stripe = null
var load = require('simple-load-script')
var promisify = require('stripe-as-promised')
loadStripe.version = 'https://js.stripe.com/v2/'

module.exports = loadStripe.default = loadStripe

function loadStripe (key) {
  _stripe = _stripe || load(loadStripe.version).then(function () {
    if (!global.Stripe) throw new Error('Could not load Stripe.js')
    var stripe = promisify(global.Stripe, Promise)
    stripe.setPublishableKey(key)
    return stripe
  })

  return _stripe
}
