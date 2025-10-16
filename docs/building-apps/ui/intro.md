---
title: UI Components Overview
description: Learn about building user interfaces in ODC
---

# UI Components Overview

Build beautiful and responsive user interfaces with ODC's comprehensive UI component library.

## Screen Components

ODC provides a rich set of UI components:

### Layout Components

- **Container**: Group and organize content
- **Column**: Create responsive grid layouts
- **Row**: Horizontal content alignment

### Input Components

- **Input**: Text input fields
- **Button**: Action buttons
- **Checkbox**: Toggle options
- **Dropdown**: Select from options
- **Date Picker**: Date selection

### Display Components

- **Text**: Display text content
- **Image**: Show images
- **Table**: Display tabular data
- **List**: Show list of items
- **Card**: Content cards

## Creating Screens

There are multiple ways to create screens:

1. **From Templates**: Use pre-built screen templates
2. **From Scratch**: Build custom screens
3. **From Data**: Generate screens from entities

## Screen Templates

ODC includes templates for common patterns:

- Login screens
- List and detail views
- Forms
- Dashboards
- Master-detail layouts

## Responsive Design

All components are responsive by default:

- Mobile-first approach
- Breakpoints for different devices
- Flexible grid system
- Auto-adapting layouts

## Styling

Customize the look and feel:

- **Themes**: Apply consistent styling
- **CSS**: Custom CSS classes
- **Style Editor**: Visual styling tools

## Best Practices

1. Use semantic component names
2. Follow accessibility guidelines
3. Test on multiple devices
4. Keep screens focused and simple
5. Reuse components through blocks

## Example: Contact Form

```markdown
Screen: ContactForm
├── Container
│   ├── Form
│   │   ├── Input (Name)
│   │   ├── Input (Email)
│   │   ├── TextArea (Message)
│   │   └── Button (Submit)
```

## Next Steps

- Explore [UI patterns](/docs/building-apps/ui/patterns)
- Learn about [navigation](/docs/building-apps/ui/navigation)
- Create [reusable blocks](/docs/building-apps/ui/blocks)
