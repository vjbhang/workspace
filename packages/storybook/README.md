# @vjbhang/shared-components

Component library using storybook in react designed with styled-components.

**Publishing Instructions:**

1. `npm run transpile-storybook`
2. `npm version [major / minor / patch] -m <comment>` _(necessary to publish)_
3. `npm publish`

**Run Storybook**  
`npm run storybook`

# Components

## Button

### props:

`label`: `String`,  
`backgroundColor`: `color`,  
`right`: `Boolean`,  
`left`: `Boolean`,  
`icon`: `<Icon />`,  
`containerStyle`: `style` Object,  
`labelStyle`: `style` Object,  
`...props`
