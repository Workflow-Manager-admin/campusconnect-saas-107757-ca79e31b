#!/bin/bash
cd /home/kavia/workspace/code-generation/campusconnect-saas-107757-ca79e31b/frontend_web
npm run build
EXIT_CODE=$?
if [ $EXIT_CODE -ne 0 ]; then
   exit 1
fi

