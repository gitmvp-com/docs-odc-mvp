---
title: User Management Overview
description: Manage users and permissions in your ODC applications
---

# User Management Overview

Manage users, roles, and permissions in your OutSystems Developer Cloud applications.

## User Types

ODC supports two types of users:

### IT Users

- Platform administrators
- Developers
- IT operators
- Manage the platform itself

### End Users

- Application users
- Customers
- Business users
- Use the applications

## User Management Tasks

### Creating Users

1. Navigate to User Management
2. Click **Create User**
3. Enter user details:
   - Username
   - Email
   - Name
4. Set initial password
5. Assign roles

### Deactivating Users

1. Find the user
2. Click **Deactivate**
3. Confirm action
4. User cannot log in (data preserved)

### Deleting Users

1. Find the user
2. Click **Delete**
3. Confirm action
4. User and related data removed

## Roles and Permissions

### Built-in Roles

- **Administrator**: Full platform access
- **Developer**: Build and deploy apps
- **Operator**: Monitor and manage apps

### Custom Roles

Create application-specific roles:

1. Define role in app
2. Set permissions
3. Assign to users

## Authentication

### Built-in Authentication

- Username/password
- Password policies
- Password reset

### External Identity Providers

Integrate with:

- **SAML 2.0**: Enterprise SSO
- **OpenID Connect**: Modern authentication
- **Azure AD**: Microsoft identity
- **Okta**: Identity platform

## Authorization

### Screen-Level

Control access to screens:

```
Screen: AdminDashboard
└── Roles: Administrator
```

### Action-Level

Restrict server actions:

```
Action: DeleteUser
└── Roles: Administrator
```

### Data-Level

Filter data by user:

```
Filter: UserId = GetUserId()
```

## User Groups

Organize users:

1. Create groups
2. Add users to groups
3. Assign permissions to groups
4. Simplify management

## Best Practices

1. **Principle of least privilege**: Grant minimum necessary permissions
2. **Regular audits**: Review user access periodically
3. **Strong passwords**: Enforce password policies
4. **Role-based access**: Use roles instead of individual permissions
5. **Deactivate promptly**: Remove access for departed users

## Security Features

- **Password encryption**: Secure password storage
- **Session management**: Control user sessions
- **Audit logs**: Track user activities
- **IP filtering**: Restrict access by location
- **MFA support**: Multi-factor authentication

## Self-Registration

Allow users to register:

1. Create registration screen
2. Validate email
3. Create user account
4. Send confirmation email

## Password Management

- **Reset flow**: Self-service password reset
- **Policies**: Complexity requirements
- **Expiration**: Force periodic changes
- **History**: Prevent reuse

## Next Steps

- Configure [roles and permissions](/docs/user-management/roles)
- Set up [external authentication](/docs/user-management/external-auth)
- Implement [user groups](/docs/user-management/groups)
