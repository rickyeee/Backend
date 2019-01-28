#!/bin/bash
chmod +x deploy.sh
cd /home/node-avntador/Backend
git pull
cp -r ./public/ /usr/local/nginx/resume/
npm run start
echo 'build done!'