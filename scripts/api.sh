#!/bin/bash
#
# Get the latest API spec information from botocore
#
mkdir -p data
cd data
git init
git config core.sparsecheckout true
echo "botocore/data" > .git/info/sparse-checkout
git remote add -f origin git@github.com:boto/botocore.git || true
git pull origin develop

cp -r botocore/data ../src
