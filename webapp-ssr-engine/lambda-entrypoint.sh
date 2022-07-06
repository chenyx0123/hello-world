#!/bin/sh
# Copyright 2020 Amazon.com, Inc. or its affiliates. All Rights Reserved.

if [ $# -ne 1 ]; then
  echo "entrypoint requires the handler name to be the first argument" 1>&2
  exit 142
fi
export _HANDLER="$1"

# HACK: using /tmp is required for runtime cached pages
export LAMBDA_TASK_ROOT=/
cd $LAMBDA_TASK_ROOT
cp ${LAMBDA_TASK_ROOT}/.next/* ${LAMBDA_TASK_ROOT}/tmp/ -dr
chmod a+rw ${LAMBDA_TASK_ROOT}/tmp -R

RUNTIME_ENTRYPOINT=/var/runtime/bootstrap
if [ -z "${AWS_LAMBDA_RUNTIME_API}" ]; then
  exec /usr/local/bin/aws-lambda-rie $RUNTIME_ENTRYPOINT
else
  exec $RUNTIME_ENTRYPOINT
fi
