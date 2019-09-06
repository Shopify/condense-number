# Changelog

All notable consumer-facing changes are documented in this file.

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
