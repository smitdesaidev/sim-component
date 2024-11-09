# Sim Component Library

A customizable button component for React applications.

## Installation

To install the library, run the following command:

```bash
npm install sim-component
```

## Usage

Import the `Button` component and use it in your React application:

```jsx
import React from "react";
import { Button } from "sim-component";

const App = () => {
  return (
    <div>
      <Button>Click me!</Button>
    </div>
  );
};
```

## Props

The `Button` component accepts the following props:

- `type`: The type of button (primary or secondary). Defaults to `primary`.
- `textColor`: The color of the button text.
- `size`: The size of the button (small, medium, or large). Defaults to `medium`.
- `onClick`: The function to call when the button is clicked.
- `children`: The content of the button.

## Examples

### Primary Button

```jsx
<Button type="primary">Primary Button</Button>
```

### Secondary Button

```jsx
<Button type="secondary">Secondary Button</Button>
```

### Small Button

```jsx
<Button size="small">Small Button</Button>
```

### Large Button

```jsx
<Button size="large">Large Button</Button>
```

### Button with Custom Text Color

```jsx
<Button textColor="#fff">Button with Custom Text Color</Button>
```

### Button with Custom onClick Handler

```jsx
<Button onClick={() => console.log("Button clicked!")}>
  Button with Custom onClick Handler
</Button>
```

## Contributing

Contributions are welcome! Please submit a pull request with your changes.

## License

Sim Component Library is licensed under the MIT License.
