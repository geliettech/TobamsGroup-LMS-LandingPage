# Tobams Group LMS Landing Page

A modern, responsive landing page for the **Tobams Group Learning Management System (LMS)**. The project is designed to provide learners with a clear introduction to the LMS, its learning offerings, and the value it provides.

- **[Figma Design](https://www.figma.com/design/wuqCLkK1feTgB6xxSRRwZu/Frontend-Intern-Assessment?node-id=0-1&p=f&t=qxnAKp4Ael8QtLYz-0)**
- **[Live Demo](https://tobamsgroup-lms-landingpage.vercel.app/)**
- **[GitHub Repo](https://github.com/geliettech/TobamsGroup-LMS-LandingPage)**

---

## 📌 Project Overview

The Tobams Group LMS Landing Page is a frontend implementation focused on creating a professional, accessible, and responsive experience for users discovering the learning platform.

The goal was to translate the provided design into a functional web interface while maintaining:

- Responsive behavior across different screen sizes
- Reusable and maintainable components
- Consistent visual hierarchy
- Clear navigation and calls to action
- Good performance and user experience
- Clean and scalable frontend architecture

---

## 🛠️ Tech Stack

### Frontend

- **Next.js** – Application framework and routing
- **TypeScript** – Static typing and improved developer experience
- **Tailwind CSS** – Utility-first styling and responsive design

### Development & Deployment

- **Git & GitHub** – Version control and source code management
- **Vercel** – Deployment and hosting

---

## 📂 Project Structure

```text
TobamsGroup-LMS-LandingPage/
├── public/
│   ├── images/
│   └── ...
│
├── src/
│   ├── app/
│   │   ├── layout.tsx
│   │   ├── page.tsx
│   │   └── ...
│   │
│   ├── components/
│   │   ├── header.tsx
│   │   ├── hero.tsx
│   │   ├── Footer.tsx
│   │   └── ...
│   │
│   └── ...
│
├── package.json
├── tsconfig.json
├── tailwind.config.ts
├── next.config.ts
└── README.md
```

> The exact structure may vary depending on the implementation and subsequent project updates.

---

## ⚙️ Setup & Installation

### Prerequisites

Make sure you have the following installed:

- Node.js 18+
- npm, yarn, pnpm, or another compatible package manager
- Git
  You can verify your Node.js installation with:

```bash
node -v
```


### 1. Clone the repository

```bash
git clone https://github.com/geliettech/TobamsGroup-LMS-LandingPage.git
```

## 2. Navigate into the project

```bash
cd TobamsGroup-LMS-LandingPage
```

## 3. Install dependencies

Using npm:

```bash
npm install
```

## 4. Start the development server

```bash
npm run dev
```

The application should now be available at:

```text
http://localhost:3000
```

---

## 🎨 Design Decisions

### Component-Based Architecture

The interface is broken into reusable React components rather than implementing the entire page as one large component.
This makes the codebase:

- Easier to maintain
- Easier to test and debug
- Easier to extend
- More consistent across sections
- Less prone to duplicated UI logic

### Responsive-First Design

The landing page was designed to work across:

- Mobile devices
- Tablets
- Laptops
- Desktop screens

Responsive Tailwind CSS utilities were used to adapt layouts, typography, spacing, and navigation according to the available screen size.

### Reusable UI Patterns

Repeated UI elements are implemented using reusable components and data-driven rendering where appropriate.

For example, instead of manually creating multiple similar Frame layout:

```tsx
<Frame
  heading="Capacity Development"
  wrapClassName="flex-row-reverse"
  src="/images/training_3.jpg"
  description="At Tobams Group, we empower individuals and organizations through tailored training programs, expert-led workshops, and personalized mentorship. We are committed to your success and growth. We are dedicated to providing a comprehensive suite of benefits designed to foster your development and success:"
  items={[
    "Tailored Training Programs",
    "Expert-Led Workshops",
    "Personalized Mentorship",
    "Technical Skills Enhancement",
    "Collaborative Learning Environment",
    "Ongoing Support and Resources",
  ]}
/>
```

This makes it easier to add, remove, or update content without modifying the underlying UI structure.

### TypeScript

TypeScript was used to provide stronger type safety and improve maintainability.

Using explicit types for component props and data structures helps:

- Catch errors during development
- Improve editor autocomplete
- Make component contracts clearer
- Reduce unexpected runtime errors

### Tailwind CSS

Tailwind CSS was selected for styling because it allows responsive designs to be built efficiently while keeping styles close to the components they affect.

It also helps maintain consistent:

- Spacing
- Typography
- Breakpoints
- Layout behavior
- Component styling

### Performance Considerations

The implementation considers frontend performance through:

- Optimized component structure
- Responsive image handling
- Avoiding unnecessary rendering
- Reusable components
- Production builds through Next.js
- Vercel deployment and CDN delivery

---

## 🐛 Known Issues

The current implementation is primarily focused on the landing-page experience.

Known limitations may include:

- Some CTA buttons may currently serve as visual/navigation elements rather than being connected to a complete LMS authentication or enrollment flow.
- Backend functionality is not included in this landing-page implementation.
- Course data is currently frontend-driven rather than retrieved from a production LMS API.
- Authentication and user account functionality are outside the current project scope.
- Some interactive functionality may require integration with the full LMS platform.

These can be addressed when the landing page is connected to the production LMS backend and APIs.

---

## 🔮 Future Improvements

Potential future improvements include:

- Integrating the landing page with the LMS backend/API
- Adding authentication and user onboarding
- Connecting course cards to actual course pages
- Adding course search and filtering
- Integrating enrollment functionality
- Adding analytics and conversion tracking
- Improving accessibility compliance
- Adding automated frontend testing
- Further optimizing images and assets
- Adding loading and error states for API-driven content

---

## 🔐 Security

Because this project is primarily a frontend landing page, there is currently no sensitive authentication or authorization logic implemented in the client.

When backend integrations are introduced, sensitive credentials and secrets should **never be exposed in client-side code**.

Environment variables should be used for configuration where appropriate:

```env
NEXT_PUBLIC_API_URL=your_public_api_url
```

> Private API keys, database credentials, authentication secrets, and other sensitive values should not use the `NEXT_PUBLIC_` prefix because Next.js exposes those variables to the browser.

---

## 📄 License

This project is intended for the Tobams Group LMS project Assessment.

---

## 👩🏽‍💻 Author

[@geliettech](https://github.com/geliettech)
