# Problem statement
creates an azure event hub namespace (if it doesn't already exist)

# Example usage

> note: in examples, VERSION represents a version of the azure.eventhub.namespace.create pkg

## install

```shell
opctl pkg install github.com/opspec-pkgs/azure.eventhub.namespace.create#VERSION
```

## run

```
opctl run github.com/opspec-pkgs/azure.eventhub.namespace.create#VERSION
```

## compose

```yaml
run:
  op:
    pkg: { ref: github.com/opspec-pkgs/azure.eventhub.namespace.create#VERSION }
    inputs: 
      subscriptionId:
      loginId:
      loginSecret:
      name:
      resourceGroup:
      # begin optional args
      location:
      sku:
      messagingUnits:
      loginTenantId:
      loginType:
      # end optional args
```

# Support

join us on [![Slack](https://opspec-slackin.herokuapp.com/badge.svg)](https://opspec-slackin.herokuapp.com/)
or [open an issue](https://github.com/opspec-pkgs/azure.eventhub.namespace.create/issues)
