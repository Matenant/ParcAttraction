#!/bin/sh
set -e

python3 init.py

python3 -m flask --debug run --host=0.0.0.0
