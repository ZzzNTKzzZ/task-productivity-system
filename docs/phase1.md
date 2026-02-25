# Task & Productivity Management System

Small Team Task Management System designed to help teams organize tasks, assign responsibilities, and track productivity using role-based access control.

---

## Table of Contents

* [Project Overview](#project-overview)
* [System Objectives](#system-objectives)
* [Features](#features)
* [Business Rules](#business-rules)
* [Role Permission Matrix](#role-permission-matrix)
* [Non-Functional Requirements](#non-functional-requirements)
* [Edge Cases](#edge-cases)

---

## Project Overview

### System Type

Small Team Task Management System

### Target Users

* Small teams (3–20 members)
* One Admin
* Multiple Users

### Problem Statement

Small teams need a structured system to manage tasks, assign responsibilities, and track productivity securely using role-based access control.

---

## System Objectives

* Clearly define system requirements before implementation
* Establish business rules and permission boundaries
* Ensure secure authentication and authorization
* Provide productivity tracking for teams

---

## Features

### Authentication

* User registration
* User login
* Secure password hashing
* JWT-based authentication

  * Access Token
  * Refresh Token
* Protected routes
* Soft-deleted users cannot log in

### User Management

#### Admin Capabilities

* View all users
* Soft delete users

#### User Capabilities

* View own profile only

#### Soft Delete Strategy

Users are not permanently removed from the database.

```ts
deletedAt: Date | null
```

Ensures:

* Data integrity
* Historical tracking
* No broken task relationships

### Task Management

#### Users

* Create tasks (self only)
* Edit own tasks
* Delete own tasks

#### Admin

* Assign tasks to any user
* Edit any task
* Delete any task

### Dashboard

#### User Dashboard

* Total tasks
* Completed tasks
* Pending tasks
* Productivity rate

Productivity formula:

```
completedTasks / totalTasks
```

#### Admin Dashboard

* System-wide task statistics
* Team performance overview

---

## Business Rules

* Each task must belong to exactly one user
* Only Admin can assign tasks to other users
* Deleted users cannot authenticate
* Completed tasks remain editable
* Task status values:

  * TODO
  * IN_PROGRESS
  * DONE

---

## Role Permission Matrix

| Action             | USER            | ADMIN     |
| ------------------ | --------------- | --------- |
| Register           | Yes             | Yes       |
| Login              | Yes             | Yes       |
| Create task        | Yes (self only) | Yes       |
| Assign task        | No              | Yes       |
| Edit own task      | Yes             | Yes       |
| Edit others' tasks | No              | Yes       |
| Delete own task    | Yes             | Yes       |
| Delete user        | No              | Yes       |
| View dashboard     | Own only        | All users |

---

## Non-Functional Requirements

* Secure authentication
* Role-based authorization
* Input validation
* Centralized error handling
* Pagination support
* Logging system
* Clean layered architecture

---

## Edge Cases

* Admin soft deletes a user
* User attempts to edit another user's task → return 403 Forbidden
* Expired access token requires refresh token
* Editing completed task recalculates productivity dynamically

---
