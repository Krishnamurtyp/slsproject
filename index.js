'use strict'
const awsServerlessExpress = require('aws-serverless-express')
const app = require('./app')
const server = awsServerlessExpress.createServer(app)

exports.hello = (event, context) => { awsServerlessExpress.proxy(server, event, context) }