<p>
  <img src="https://assets.solidjs.com/banner?project=Fluent%20Icons" alt="Solid Fluent Icons" />
</p>

# Solid Fluent Icons [![NPM Version](https://img.shields.io/npm/v/solid-fluent-icons?style=flat-square)](https://www.npmjs.org/package/solid-fluent-icons)

An unofficial port of the collection of familiar, friendly and modern icons from Microsoft.

## Usage

```tsx
import { AlertIcon, MoreHorizontalIcon, OptionsIcon } from 'solid-fluent-icons'

function MyComponent() {
  return (
    <div>
      <FaceIcon />
      <SunIcon />
      <ImageIcon />
    </div>
  )
}
```

You may use a version optimized for a particular pixel size:

```tsx
import { AlertIcon, MoreHorizontalIcon, OptionsIcon } from 'solid-fluent-icons/20'

function MyComponent() {
  return (
    <div>
      <FaceIcon />
      <SunIcon />
      <ImageIcon />
    </div>
  )
}
```

The available sizes `10`, `12`, `16`, `20`, `24`, `28`, `32`, `48`. The default size is `24`.

Not all icons are available at every size.

## Documentation

For full documentation, visit [trents.computer/fluent-icons](https://trents.computer/fluent-icons).

