#!/usr/bin/env sh

case "$sku" in
          Basic)
            export sku=1
            ;;
          Standard)
            export sku=2
            ;;
        esac

echo "substituting environment variables in parameters file"       
cat /parametersTemplate.json | envsubst > /parameters.json