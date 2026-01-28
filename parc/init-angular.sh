#!/usr/bin/env sh

echo "Installation des packages NPM"
# installation si packages manquant

npm ls --porcelain > /dev/null || (npm clean-install --legacy-peer-deps)
echo "Done..."

echo "Angular initialisé..."

npm run serve