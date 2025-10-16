---
title: Roles and Permissions
description: Configure roles and permissions in ODC
---

# Roles and Permissions

Implement fine-grained access control using roles and permissions in ODC.

## Understanding Roles

Roles are collections of permissions that define what users can do:

- **Reusable**: Assign to multiple users
- **Hierarchical**: Roles can inherit from others
- **Flexible**: Combine multiple roles per user

## Creating Roles

### In ODC Studio

1. Go to **Logic** tab
2. Right-click on **Roles**
3. Select **Add Role**
4. Name the role (e.g., "Manager")
5. Add description

### Role Properties

- **Name**: Unique identifier
- **Description**: What the role allows
- **Is Active**: Enable/disable role

## Assigning Permissions

### Screen Access

Control which screens users can access:

1. Open screen properties
2. Set **Roles** property
3. Add allowed roles
4. Save changes

### Action Access

Restrict server action execution:

1. Open action properties
2. Set **Roles** property
3. Add allowed roles
4. Save changes

## Checking Permissions

### In Logic

Use `Check<RoleName>Role()` function:

```
If CheckManagerRole() Then
    // Manager-only logic
Else
    // Access denied
End If
```

### In UI

Show/hide elements based on roles:

```
Visible: CheckAdministratorRole()
```

## Built-in Roles

### IT User Roles

- **Administrator**: Full platform control
- **Developer**: App development
- **Operator**: Monitoring and operations

### Anonymous Role

- **Anonymous**: Unauthenticated users
- Use for public pages
- No login required

### Registered Role

- **Registered**: Any authenticated user
- Base level access
- All logged-in users

## Custom Roles

Create application-specific roles:

### Example: E-commerce App

- **Customer**: Browse and purchase
- **Vendor**: Manage products
- **Support**: Handle tickets
- **Accountant**: View reports

## Role Hierarchies

Design role structures:

```
Administrator
├── Manager
│   ├── Team Lead
│   │   └── Employee
│   └── Specialist
└── Auditor
```

## Dynamic Permissions

Implement context-based access:

### Example: Document Owner

```
CanEdit = (Document.OwnerId = GetUserId()) OR CheckAdministratorRole()
```

## Best Practices

1. **Descriptive names**: Use clear role names
2. **Minimal roles**: Don't over-complicate
3. **Regular review**: Audit role assignments
4. **Document roles**: Maintain role descriptions
5. **Test permissions**: Verify access controls

## Common Patterns

### CRUD Permissions

- **Viewer**: Read-only access
- **Editor**: Create and update
- **Admin**: Full CRUD + delete

### Multi-tenant

- **Tenant Admin**: Tenant-wide control
- **Tenant User**: Tenant-specific access
- **Super Admin**: Cross-tenant access

## Security Considerations

1. **Server-side checks**: Never trust client
2. **Fail secure**: Deny by default
3. **Audit changes**: Log permission changes
4. **Separation of duties**: Prevent conflicts
5. **Regular updates**: Review and update

## Assigning Roles to Users

### Programmatically

```
GrantRole(
    UserId: User.Id,
    RoleId: Roles.Manager
)
```

### Through UI

1. User management screen
2. Select user
3. Click **Manage Roles**
4. Check/uncheck roles
5. Save changes

## Troubleshooting

### User Can't Access Screen

1. Check screen role settings
2. Verify user has required role
3. Check role is active
4. Clear browser cache

### Permission Check Fails

1. Verify role name spelling
2. Check user session
3. Confirm role assignment
4. Review role properties

## Next Steps

- Learn about [user groups](/docs/user-management/groups)
- Configure [external authentication](/docs/user-management/external-auth)
- Implement [audit logging](/docs/user-management/audit)
