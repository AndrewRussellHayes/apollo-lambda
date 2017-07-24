#!/usr/bin/env bash

source secret.env

if [ "$1" == "build" ]; then
  docker-compose build
fi

docker-compose up
