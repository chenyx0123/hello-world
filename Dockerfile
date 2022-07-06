FROM public.ecr.aws/lambda/nodejs:16

# Local testing:
#
#* 1. prepare ~/.gitconfig file with following lines
#
# [credential]
#         helper = store --file /run/secrets/git-credentials
# [url "https://github.com/"]
#         insteadOf = git@github.com:
# [url "https://"]
#         insteadOf = git://
#
#* 2. prepare ~/.git-credentials with following line
#
# https://username:ghp_xxxxxxxxxxxxxxxxxxxxxxxxxxxxxx@github.com
#
#* 3.
#
# DOCKER_BUILDKIT=1 docker build  --progress=plain --secret id=git-credentials,src=${HOME}/.git-credentials --secret id=git-config,src=${HOME}/.gitconfig .

ARG BUILD_COMMIT_ID

ENV LAMBDA_TASK_ROOT=/
ENV NEXT_TELEMETRY_DISABLED=1

WORKDIR ${LAMBDA_TASK_ROOT}

ADD webapp-ssr-engine/package.json webapp-ssr-engine/package-lock.json ${LAMBDA_TASK_ROOT}/
ADD webapp-ssr-engine/public ${LAMBDA_TASK_ROOT}/public
ADD webapp-ssr-engine/src ${LAMBDA_TASK_ROOT}/src
ADD webapp-ssr-engine/.babelrc \ 
    webapp-ssr-engine/next.config.js \
    ${LAMBDA_TASK_ROOT}/

RUN --mount=type=secret,id=git-credentials \
    --mount=type=secret,id=git-config,dst=/root/.gitconfig \
    yum -y install git-core python3 jq && \
    npm i -g npm@^8.0.0 && \
    npm i --omit=dev --omit=peer --save $(jq -r '.dependencies|values|.[]' package.json | grep github) && \
    npm un -g npm && rm .npm -rf && \
    rm /etc/yum/protected.d/systemd.conf && \
    yum -y history undo last && \
    yum clean all && \
    chmod a-w node_modules/@mui/icons-material/utils -R && \
    grep "icons-material" src -R -h | cut -d '"' -f 2 | cut -d "/" -f 3 | sort -u | xargs -I {} chmod a-w node_modules/@mui/icons-material/esm/{}.js node_modules/@mui/icons-material/{}.d.ts node_modules/@mui/icons-material/{}.js && \
    find node_modules/@mui/icons-material/ -type f -perm -u+w -delete

RUN echo NEXT_PUBLIC_BUILD_COMMIT_ID=$(echo $BUILD_COMMIT_ID | head -c 8) | tee .env 1>&2

RUN node node_modules/next/dist/bin/next build && \
    rm .next/cache -rf && \
    find .next/server/pages/ \( -name "*.html" -o -name "*.json" \) -delete

RUN sed "s/\/\/ MARKER: replace-runtime-options/distDir: 'tmp',/g" -i ${LAMBDA_TASK_ROOT}/next.config.js
ADD webapp-ssr-engine/lambda-entrypoint.sh /
RUN chmod +x /lambda-entrypoint.sh

CMD [ "src.handler" ]
