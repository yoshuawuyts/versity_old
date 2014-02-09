#!/usr/bin/env sh

NODE_ENV=development; export NODE_ENV
PORT=1337 ; export PORT
node --harmony server/index.js
