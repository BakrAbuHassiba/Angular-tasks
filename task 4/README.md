# Angular Tasks — Task 4

This is **Task 4** of the Angular Tasks repository by **Bakr AbuHassiba**.  
In this task, the goal is to build a small Angular application with routing for **Home**, **About**, and **Contact Us** pages, and implement nested child routes and simple forms for contacting via email or mobile.

---

##  Features

- Navigation bar with routing (`Home`, `About`, `Contact Us`, etc.)
- **About** page with:
  - Hero section
  - Story / mission / vision sections  
  - Call-to-action to navigate to Contact Us
- **Contact Us** page with child routes:
  - `email` child route: simple email contact form
  - `mobile` child route: simple mobile contact form
- Use of **Bootstrap 5** for styling
- Responsive design

---

##  Project Structure

Here’s a simplified view of the important parts of the project:

task-4/
├── src/
│ ├── app/
│ │ ├── about/
│ │ │ ├── about.component.html
│ │ │ └── ...
│ │ ├── contact-us/
│ │ │ ├── contact-us.component.html
│ │ │ ├── email/
│ │ │ │ └── email.component.html
│ │ │ └── mobile/
│ │ │ └── mobile.component.html
│ │ ├── home/
│ │ └── app-routing.module.ts
│ └── styles.css
├── angular.json
└── README.md


- `about/` holds your About page component.
- `contact-us/` is the parent route with child routes `email` and `mobile`.
- Routing is configured so that navigating to `/contactus` shows the selection view, and clicking “Email” or “Mobile” loads its respective child component.
- Forms in the `email` and `mobile` components are simple, Bootstrap-styled forms (without backend integration in this task).

---

##  Getting Started

If someone wants to run your project locally, here are the steps:

1. Clone the repository:
   ```bash
   git clone https://github.com/BakrAbuHassiba/Angular-tasks.git
   cd Angular-tasks/task\ 4
2. Install dependencies:
   npm install
3. Serve the application:
    ng serve -o
