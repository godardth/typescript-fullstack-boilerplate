#!/bin/bash
cp src/env/env-base.ts src/env/env.ts

sed -i -e 's|FRONTEND_PROT_PLACEHOLDER|'$FRONTEND_PROT'|g' src/env/env.ts
sed -i -e 's|FRONTEND_HOST_PLACEHOLDER|'$FRONTEND_HOST'|g' src/env/env.ts
sed -i -e 's|FRONTEND_PORT_PLACEHOLDER|'$FRONTEND_PORT'|g' src/env/env.ts

sed -i -e 's|DATABASE_TYPE_PLACEHOLDER|'$DATABASE_TYPE'|g' src/env/env.ts
sed -i -e 's|DATABASE_HOST_PLACEHOLDER|'$DATABASE_HOST'|g' src/env/env.ts
sed -i -e 's|DATABASE_PORT_PLACEHOLDER|'$DATABASE_PORT'|g' src/env/env.ts
sed -i -e 's|DATABASE_NAME_PLACEHOLDER|'$DATABASE_NAME'|g' src/env/env.ts
sed -i -e 's|DATABASE_USER_PLACEHOLDER|'$DATABASE_USER'|g' src/env/env.ts
sed -i -e 's|DATABASE_PASSWORD_PLACEHOLDER|'$DATABASE_PASSWORD'|g' src/env/env.ts
sed -i -e 's|DATABASE_SYNC_PLACEHOLDER|'$DATABASE_SYNC'|g' src/env/env.ts

sed -i -e 's|SMTP_HOST_PLACEHOLDER|'$SMTP_HOST'|g' src/env/env.ts
sed -i -e 's|SMTP_PORT_PLACEHOLDER|'$SMTP_PORT'|g' src/env/env.ts
sed -i -e 's|SMTP_USER_PLACEHOLDER|'$SMTP_USER'|g' src/env/env.ts
sed -i -e 's|SMTP_PASSWORD_PLACEHOLDER|'$SMTP_PASSWORD'|g' src/env/env.ts

sed -i -e 's|JWT_SECRET_PLACEHOLDER|'$JWT_SECRET'|g' src/env/env.ts