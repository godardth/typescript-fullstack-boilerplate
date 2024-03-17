#!/bin/bash
cp src/app/env/env-base.ts src/app/env/env.ts
sed -i -e 's|BACKEND_PROT_PLACEHOLDER|'$BACKEND_PROT'|g' src/app/env/env.ts
sed -i -e 's|BACKEND_HOST_PLACEHOLDER|'$BACKEND_HOST'|g' src/app/env/env.ts
sed -i -e 's|BACKEND_PORT_PLACEHOLDER|'$BACKEND_PORT'|g' src/app/env/env.ts