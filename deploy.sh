#!/usr/bin/env bash
rm -rf /usr/local/nginx/html/resume/*
cp -r ./public/* /usr/local/nginx/html/resume/
npm run start