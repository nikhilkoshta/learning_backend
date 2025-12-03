## 🚀 SuperTask: The Ultimate Todo App

**SuperTask** is a **clean, modern, and highly efficient** task management application designed to help you stay organized and boost your productivity. It uses a **real-time, cloud-based database (Firestore)** to ensure your tasks are always synced across devices and securely stored.

-----

### ✨ Features

  * **Real-time Synchronization:** Tasks update instantly across all active sessions using **Firestore**.
  * **Persistent Storage:** All tasks are securely saved in the cloud.
  * **User Authentication:** Secure access control for private task lists.
  * **Intuitive UI:** Clean and responsive design, optimized for both desktop and mobile.
  * **Task Management:**
      * Add, edit, and delete tasks.
      * Mark tasks as completed.
      * Filter tasks (**All**, **Active**, **Completed**).

-----

### 🛠️ Tech Stack

| Component | Technology | Purpose |
| :--- | :--- | :--- |
| **Frontend** | HTML5, **Tailwind CSS**, **JavaScript** (ES6+) | Modern, responsive styling and client-side logic. |
| **Database** | Google Cloud **Firestore** | Real-time, persistent storage. |
| **Authentication** | **Firebase Authentication** | Anonymous and Custom Token sign-in. |

-----

### ⚙️ Setup and Installation

This application is designed to run in a web environment with the necessary **Firebase configuration variables** provided.

#### Prerequisites

You must have the following global variables available in your execution environment:

  * `__app_id`: The unique ID for the application.
  * `__firebase_config`: A JSON string containing your Firebase project configuration.
  * `__initial_auth_token`: A custom Firebase token for initial user authentication.

#### Running Locally (Conceptual)

Since this app relies on specific environment variables (`__app_id`, `__firebase_config`, etc.) typically provided by a development platform, running it locally requires simulating this environment and having a valid Firebase project set up.

1.  Clone the repository (if applicable):
    ```bash
    git clone https://github.com/your-username/supertask.git
    cd supertask
    ```
2.  **Ensure Firebase SDKs are loaded:** The application uses CDN imports for Firebase modules (e.g., `firebasejs/11.6.1/firebase-app.js`).
3.  **Provide Environment Variables:** You would need to inject the three prerequisite variables into the JavaScript scope before the main application script runs.

-----

### 🚀 Usage

#### Authentication

The app automatically attempts to sign in the user using the provided `__initial_auth_token`. If the token is unavailable, it signs the user in **anonymously** to allow immediate use of the Firestore database.

#### Managing Tasks

  * **Adding a Task:** Type your task into the input field at the top and press **Enter** or click the "**Add Task**" button.
  * **Completing a Task:** Click the **checkbox** next to a task to mark it as completed.
  * **Deleting a Task:** Click the **'X'** button next to the task item.
  * **Filtering:** Use the buttons at the bottom of the list to switch between:
      * **All:** Show all tasks.
      * **Active:** Show only uncompleted tasks.
      * **Completed:** Show only completed tasks.

-----

### 📚 Code Structure

The entire application logic (HTML, CSS, and JavaScript) is intentionally contained within a single file for simplicity, following best practices for single-file web applications in certain environments.

  * **HTML:** Defines the structure (Task list, input, buttons).
  * **CSS (Tailwind):** Handled via the **Tailwind CDN** for all styling and responsiveness.
  * **JavaScript:** Manages the Firebase initialization, authentication, Firestore operations (`onSnapshot` for real-time updates), and DOM manipulation/event handling.

-----

### 🤝 Contribution

Contributions are welcome\! Please **fork the repository** and submit a **pull request** with your suggested improvements.