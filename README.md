

### PLZ install
- editorconfig
- tslint

### developping
```
$ yarn tsc
and
$ yarn start

# plz before commit
$ yarn eslint `git diff master --name-only | grep '.ts|.tsx'
or $ yarn eslint `git diff --name-only | grep '.ts|.tsx'
```
