---
title: Data Management
description: Learn how to work with data in ODC applications
---

# Data Management

Manage and manipulate data effectively in your ODC applications.

## Data Modeling

ODC uses **Entities** to model your data:

### Creating Entities

1. Right-click on **Data** tab
2. Select **Add Entity**
3. Define attributes (fields)
4. Set data types
5. Configure relationships

### Data Types

Supported data types:

- **Text**: String values
- **Integer**: Whole numbers
- **Decimal**: Decimal numbers
- **Boolean**: True/false values
- **Date**: Date values
- **DateTime**: Date and time
- **Binary**: Files and images

## Fetching Data

Retrieve data using **Aggregates**:

```
Aggregate: GetUsers
├── Source: User entity
├── Filters: IsActive = True
├── Sorting: Name ascending
└── Max Records: 100
```

### Aggregate Features

- **Filters**: Narrow down results
- **Sorting**: Order data
- **Joins**: Combine data from multiple entities
- **Calculations**: Computed fields
- **Grouping**: Aggregate data

## Creating Data

Add new records:

1. Create a server action
2. Use **CreateOrUpdate** entity action
3. Set attribute values
4. Execute the action

## Updating Data

Modify existing records:

1. Fetch the record
2. Modify attributes
3. Use **CreateOrUpdate** action
4. Save changes

## Deleting Data

Remove records:

1. Get the record identifier
2. Use **Delete** entity action
3. Confirm deletion

## Relationships

Define relationships between entities:

### One-to-Many

- Author has many Books
- Use foreign key reference

### Many-to-Many

- Students enroll in Courses
- Use junction entity

## Best Practices

1. **Normalize data**: Avoid redundancy
2. **Use indexes**: Improve query performance
3. **Validate input**: Ensure data integrity
4. **Handle errors**: Graceful error handling
5. **Archive old data**: Keep database lean

## Example: Blog Post Entity

```
Entity: BlogPost
├── Id (Auto-number)
├── Title (Text)
├── Content (Text)
├── AuthorId (User identifier)
├── CreatedDate (DateTime)
├── IsPublished (Boolean)
└── Tags (Text)
```

## Advanced Features

- **External databases**: Connect to external data
- **REST APIs**: Consume external data
- **Offline sync**: Mobile data synchronization
- **Data fabric**: Unified data layer

## Next Steps

- Learn about [SQL queries](/docs/building-apps/data/sql)
- Explore [data validation](/docs/building-apps/data/validation)
- Understand [transactions](/docs/building-apps/data/transactions)
