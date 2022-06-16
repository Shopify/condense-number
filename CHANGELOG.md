# Changelog

All notable consumer-facing changes are documented in this file.

### 1.0.1 [2022-06-16]

#### Fixes

- Updates the symbol used for negative values to use the minus symbol instead of a hyphen

### 1.0.0 [2021-11-02]

- Set the version of Node to 16.13.0 used when running tests and developing on this project.
- Add development instructions.
- No consumer-facing changes are expected.

### 0.7.1

#### Changes

- Dependency upgrades

### 0.7.0

#### Changes

- `condenseCurrency` will now fall back to the "best match" locale if an unsupported region is provided; e.g. `en-ZZ` would fall back to `en`.

### 0.6.0

#### Enhancements

- Adds support for Turkish

### 0.5.1

Code style changes only - no consumer-facing changes.

### 0.5.0

#### Changes

- `condenseNumber` will now fall back to the "best match" locale if an unsupported region is provided; e.g. `en-ZZ` would fall back to `en`

### 0.4.0

#### Enhancements

- Adds support for Thai and Korean

### 0.3.0

#### Enhancements

- Adds support for simplified Chinese, traditional Chinese, Finnish, Norwegian, Swedish, Malay, Freek, Polish, and Romanian

### 0.2.0

#### Changes

- Options are now passed as an object to make the call signature less ambiguous (#49)

#### Enhancements

- Added a `roundingRule` option (#49)

### 0.1.2

#### Changes

- `condenseNumber` no longer applies a default precision to unsupported locales

### 0.1.1

#### Enhancements

Improve the build by specifying entry points

### 0.1.0

Initial release :tada:
