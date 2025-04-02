<<<<<<< HEAD
# scripts/run-e2e.sh
=======
>>>>>>> e2e-tests
#!/usr/bin/env bash

DIR="$(cd "$(dirname "$0")" && pwd)"
$DIR/db-startup.sh

if [ "$#" -eq  "0" ]
  then
    npx playwright test
else
    npx playwright test --headed
fi
<<<<<<< HEAD
=======

>>>>>>> e2e-tests
npx playwright show-report