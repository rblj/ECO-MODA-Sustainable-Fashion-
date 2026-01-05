<div align="center">

<h1>🌱 Sustainable Fashion E-Commerce</h1>


<p>A frontend-only fashion e-commerce website designed for the <strong>IT-101: Human–Computer Interaction (HCI) Final Project</strong>, focusing on usability, accessibility, responsive design, and sustainable fashion with clothing recycling concepts.</p>

<br /><br />

<strong>Developed by <em>dev!lee</em></strong>

</div>

---

## 📌 Project Overview

This project is a **frontend-only e-commerce web application** that simulates a modern fashion retail platform while promoting **responsible consumption and clothing recycling**. The design strictly follows **Human–Computer Interaction (HCI) principles** and prioritizes user-centered design.

⚠️ **Note:** No backend services, authentication, or real payment processing are included.

---

## 🎯 Objectives

* Apply HCI principles in a real-world web interface
* Design an intuitive and accessible e-commerce experience
* Demonstrate proper navigation, feedback, and error prevention
* Promote sustainability and recycling awareness through UI/UX
* Ensure full responsiveness across devices

---

## 🧠 HCI Principles Applied

* **Consistency** – Uniform design system across all pages
* **Visibility of System Status** – Cart indicators, disabled states
* **User Feedback** – Hover effects, active states, UI responses
* **Error Prevention** – Disabled actions, form hints, validation cues
* **User Control and Freedom** – Editable cart, clear navigation
* **Accessibility** – Proper contrast, readable fonts, touch-friendly buttons
* **Minimalist Design** – Clean layout with strong visual hierarchy

---

## 📄 Pages & Features

### 🏠 Home Page

* Sustainability-focused hero section
* Featured fashion collections
* Clothing recycling awareness section
* Clear call-to-action buttons

### 🛍 Product Listing Page

* Responsive grid-based layout
* Product cards with eco-tags
* Visual hover feedback

### 👕 Product Details Page

* Detailed product view
* Sustainability information per item
* Size and quantity selection (UI only)
* Add to Cart validation

### 🛒 Shopping Cart

* View, update, and remove items
* Subtotal calculation (frontend only)

### 💳 Checkout Page (UI Only)

* Shipping information form
* Order summary
* Input guidance and validation hints

### 🧭 Navigation & Footer

* Clear navigation links
* Cart icon with item count
* Sustainability messaging

---

## ♻️ Sustainability & Recycling Concept

The platform integrates sustainability through:

* Eco-friendly product labels
* Educational UI sections about clothing recycling
* Conceptual eco-points and responsible fashion messaging

All features are UI-based and intended for educational use only.

---

## 🛠 Technologies Used

### Core Framework & Language

* **React 19 (Latest Stable)** – Used to build a component-based, declarative user interface. It manages dynamic UI states such as the shopping cart and seamless page transitions.
* **TypeScript** – Provides strict type definitions (e.g., `types.ts`) to ensure code reliability, reduce runtime errors, and improve maintainability—supporting high code quality standards.

### Styling & UI/UX

* **Tailwind CSS (via CDN)** – Utility-first CSS framework used for rapid, responsive styling. Ensures visual consistency and performance without external CSS files.
* **Headless UI Principles** – Custom, minimalist editorial-style design using neutral earth tones (Stone, Emerald, Bone) to reinforce the sustainability theme.
* **Google Fonts (Inter)** – A modern, highly legible sans-serif font selected to meet HCI accessibility and readability standards.

### Navigation & State Management

* **React Router 7** – Manages SPA routing using `HashRouter` for compatibility with static hosting platforms such as Vercel and GitHub Pages.
* **React Hooks (`useState`, `useEffect`, `useMemo`)** – Handles application logic including:

  * Cart logic (quantity and total calculations)
  * Real-time product filtering and sorting
  * State persistence using the **LocalStorage API** to maintain cart data across refreshes (HCI: visibility of system status)

### Asset & Module Management

* **ESM.sh (ES Modules)** – Uses browser-native ES Modules instead of a traditional `node_modules` setup, enabling a fast, no-build architecture suitable for instant deployment.
* **Lucide-style SVG Icons** – Inline SVG icons (Cart, Arrow, Trash) ensure scalability, accessibility, and reduced external asset requests.

### HCI Integration Tools

* **ARIA Attributes & Semantic HTML** – Integrated to improve accessibility and comply with HCI and accessibility rubrics.
* **Native Browser APIs** – Utilizes standard Form APIs for checkout simulation and prepares metadata with `navigator.mediaDevices` for future extensibility.

---

## 📱 Responsiveness

The website is optimized for:

* Mobile devices
* Tablets
* Desktop screens

---

## 🚀 Deployment

* **GitHub Repository:** Public repository with clean, structured code
* **Vercel Deployment:** Live and accessible frontend version

---

## 📚 Academic Disclaimer

This project was created solely for educational purposes as part of the **IT-101: Human–Computer Interaction course**. All data used are dummy data, and no real transactions occur.

---
<div align="center">
🌿 "Wear responsibly. Design thoughtfully."
</div>
