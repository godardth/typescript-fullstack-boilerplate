#!/bin/bash

# Load env variables from the file passed as argument 1 (or default from ../.env)
if [ -n "$1" ]; then
    ENV_FILE="$1"
else
    ENV_FILE=../.env
fi
set -o allexport
source "$ENV_FILE"
set +o allexport

# Copy template file to target env file
cp src/app/env/env-base.ts src/app/env/env.ts

# Replace values in target env file
sed -i -e 's|BACKEND_PROT_PLACEHOLDER|'"$BACKEND_PROT"'|g' src/app/env/env.ts
sed -i -e 's|BACKEND_HOST_PLACEHOLDER|'"$BACKEND_HOST"'|g' src/app/env/env.ts
sed -i -e 's|BACKEND_PORT_PLACEHOLDER|'"$BACKEND_PORT"'|g' src/app/env/env.ts