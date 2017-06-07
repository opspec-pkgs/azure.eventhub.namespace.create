# problem statement
creates an azure event hub namespace (if doesn't already exist)

# example usage

> note: in examples, VERSION represents a version of the azure.eventhubnamespace.create pkg

## install

```shell
opctl pkg install github.com/opspec-pkgs/azure.eventhubnamespace.create#VERSION
```

## run

```
opctl run github.com/opspec-pkgs/azure.eventhubnamespace.create#VERSION
```

## compose

```yaml
run:
  op:
    pkg: { ref: github.com/opspec-pkgs/azure.eventhubnamespace.create#VERSION }
    inputs: 
      subscriptionId:
      azureUsername:
      azurePassword:
      name:
      resourceGroup:
      location:
      sku:
      messagingUnits:
```