#!/usr/bin/env sh

echo "Installation des packages NPM"
# installation si packages manquant

npm ci
echo "Done..."

echo "Angular initialisé..."

npm run serve