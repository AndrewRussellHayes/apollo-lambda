#!/usr/bin/env bash
DIR="$( cd "$( dirname "${BASH_SOURCE[0]}" )" && pwd )"

source secret.env

cd $DIR/al_serverless
serverless deploy
