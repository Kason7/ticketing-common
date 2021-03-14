# Ticketing Common Library

## Update library

First add and commit changes to git, then:

```
npm version patch
npm publish
```

(Optional, while running skaffold) update version installation in services using the library:

1. Go into service root folder
2. Run command:

```
npm update @kason7-ticketing/common
```
