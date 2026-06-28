# User Management Dashboard

A modern, responsive **User Management Dashboard** built with **React**, **Vite**, and **Tailwind CSS**. The application integrates with the **JSONPlaceholder REST API** to perform complete client-side CRUD (Create, Read, Update, Delete) operations while providing a clean, scalable, and responsive user experience.

---

## 🚀 Live Demo

> **Live URL:** 
---

## 📂 GitHub Repository

> **Repository:** https://github.com/thvvamshi/user-management-dashboard

---

# 📖 Overview

The User Management Dashboard allows administrators to efficiently manage user records through an intuitive interface.

The application fetches users from the JSONPlaceholder API and supports searching, filtering, sorting, pagination, and client-side CRUD operations while maintaining a clean component-based architecture.

---

# ✨ Features

## User Management

* View all users
* Add new users
* Edit existing users
* Delete users with confirmation dialog

## Search & Filtering

* Real-time search
* Department filtering
* Sort by Name
* Sort by Email
* Sort by Department
* Ascending / Descending order

## Pagination

* Previous / Next navigation
* Dynamic page selection
* Configurable page size

## User Experience

* Responsive design
* Desktop table layout
* Mobile card layout
* Toast notifications
* Loading state
* Error state
* Empty state
* Form validation
* Confirmation dialogs

---

# 🛠️ Tech Stack

## Frontend

* React 19
* Vite
* JavaScript (ES6+)
* Tailwind CSS 4

## HTTP Client

* Axios

## Icons

* Lucide React

## Notifications

* React Hot Toast

---

# 📁 Project Structure

```text
src
│
├── api
│   ├── axios.js
│   └── userService.js
│
├── assets
│   ├── icons
│   └── images
│
├── components
│   ├── DeleteDialog.jsx
│   ├── EmptyState.jsx
│   ├── ErrorState.jsx
│   ├── FilterModal.jsx
│   ├── Header.jsx
│   ├── Loader.jsx
│   ├── MobileUserList.jsx
│   ├── Pagination.jsx
│   ├── SearchBar.jsx
│   ├── UserForm.jsx
│   ├── UserRow.jsx
│   └── UserTable.jsx
│
├── hooks
│   └── useUsers.js
│
├── pages
│   └── Dashboard.jsx
│
├── utils
│   ├── constants.js
│   ├── filter.js
│   ├── mapper.js
│   ├── pagination.js
│   ├── search.js
│   ├── sort.js
│   └── validators.js
│
├── App.jsx
├── main.jsx
└── index.css
```

---

# ⚙️ Installation

## Clone the repository

```bash
git clone https://github.com/<username>/user-management-dashboard.git
```

## Navigate to the project

```bash
cd user-management-dashboard
```

## Install dependencies

```bash
npm install
```

---

# ▶️ Running the Project

Start the development server.

```bash
npm run dev
```

The application will be available at:

```text
http://localhost:5173
```

---

# 🏗️ Build for Production

```bash
npm run build
```

Preview the production build locally.

```bash
npm run preview
```

---

# 📡 API

The project uses the public JSONPlaceholder API.

```text
GET    /users
POST   /users
PUT    /users/:id
DELETE /users/:id
```

Base URL

```text
https://jsonplaceholder.typicode.com/users
```

---

# 🧩 Application Workflow

```text
Fetch Users
      │
      ▼
Map API Response
      │
      ▼
Search
      │
      ▼
Filter
      │
      ▼
Sort
      │
      ▼
Pagination
      │
      ▼
Render UI
```

---

# 📌 Data Mapping Assumptions

JSONPlaceholder does not provide dedicated fields for:

* First Name
* Last Name
* Department

To satisfy the assignment requirements:

* The full `name` field is split into **First Name** and **Last Name**.
* A default department is assigned during data mapping.
* CRUD operations are maintained on the client side because JSONPlaceholder does not persist changes.

---

# ✅ Form Validation

The application validates:

* First Name
* Last Name
* Email
* Department

Validation includes:

* Required fields
* Email format validation

---

# 📱 Responsive Design

The application is fully responsive.

### Desktop

* Responsive data table
* Pagination controls

### Tablet

* Adaptive layout
* Flexible search controls

### Mobile

* Mobile user cards
* Touch-friendly controls
* Responsive dialogs

---

# ⚠️ Error Handling

The application gracefully handles:

* API failures
* Network issues
* Invalid form inputs
* Empty search results

Dedicated UI components are displayed instead of application crashes.

---

# 🔄 CRUD Operations

Since JSONPlaceholder is a fake REST API:

* POST requests simulate user creation.
* PUT requests simulate updates.
* DELETE requests simulate deletions.

The UI updates local application state immediately to provide a realistic user experience.

---

# 🧠 React Concepts Used

* Functional Components
* Custom Hooks
* useState
* useEffect
* useMemo
* Props
* Component Composition
* Conditional Rendering

---

# 🎨 UI Highlights

* Modern dashboard layout
* Tailwind CSS utility-first styling
* Responsive design
* Toast notifications
* Modal dialogs
* Confirmation dialogs
* Empty state
* Loading state

---

# 🚀 Future Improvements

Potential enhancements include:

* Local Storage persistence
* Export users to CSV
* Advanced filter popup
* Skeleton loading
* Dashboard analytics
* Dark mode
* Framer Motion animations
* User profile drawer
* Unit testing with Jest
* End-to-end testing

---

# 📦 Dependencies

```json
React
Vite
Tailwind CSS
Axios
Lucide React
React Hot Toast
```

---

# 👨‍💻 Author

**Boda Vamshi Kumar**

GitHub: https://github.com/thvvamshi

---

# 📄 License

This project was developed as part of a Frontend Assignment for learning and evaluation purposes.
