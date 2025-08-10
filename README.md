# 🚀 GitHub User Finder

A sleek and responsive web app to search for any GitHub user and instantly view their profile details — built with **HTML**, **Tailwind CSS**, and vanilla **JavaScript**.  
No frameworks, no unnecessary bloat — just fast and clean.

![Preview](./assets/images/preview.png) <!-- Optional: Add screenshot -->

---

## ✨ Features
- 🔍 Search by **GitHub username**
- 📸 Displays **avatar, name, and username**
- 📊 Shows **public repos, followers, and following count**
- 📝 Includes **bio, location, and blog/website link**
- 🎨 Modern **Tailwind CSS** UI with custom color palette
- ⚡ No libraries for JS — pure vanilla

---

## 📦 Tech Stack
- **HTML5**
- **Tailwind CSS** (via CDN)
- **JavaScript (Fetch API)**
- **GitHub REST API**

---

## 📂 Project Structure
```
github-user-finder/
├── assets/
│   └── images/
│       ├── preview.png
│       └── mobile-view.png
├── index.html
├── script.js
├── README.md
└── LICENSE
```

---

## 🛠 Setup & Usage

1. **Clone the repo**
   ```bash
   git clone https://github.com/your-username/github-user-finder.git
   cd github-user-finder
   ```

2. **Open `index.html` in your browser**  
   You can just double-click the file or use a local server:
   ```bash
   # Example with Python
   python -m http.server 8000
   # Open http://localhost:8000
   ```

3. **Search for any GitHub username**  
   - Enter a username in the input field  
   - Click **Search** to fetch and display user details

---

## 📌 API Reference
This project uses the [GitHub Users API](https://docs.github.com/en/rest/users/users?apiVersion=2022-11-28#get-a-user):

```http
GET https://api.github.com/users/{username}
```

Example response:
```json
{
  "login": "octocat",
  "avatar_url": "https://avatars.githubusercontent.com/u/583231?v=4",
  "public_repos": 8,
  "followers": 5689,
  "following": 9,
  "bio": "GitHub’s friendly mascot",
  "location": "San Francisco",
  "blog": "https://github.blog"
}
```

---

## 🖌 Customization
- **Colors & Theme** → Change Tailwind color classes in `index.html`
- **Dummy Profile** → Default profile before search is in the `#result` div
- **Styling** → Tailwind CDN makes it easy to tweak designs

---

## 💡 Future Improvements
- Add smooth **fade-in animations** when results load
- Implement **dark/light mode toggle**
- Show **recent repositories** of the searched user

---

## 📜 License
This project is licensed under the **MIT License** — feel free to modify and use it.

---

## 👨‍💻 Author
**Arunavo Bhowal**  
💌 Reach me at [arunavobhowal.work@gmail.com](arunavobhowal.work@gmail.com)  
🔗 [GitHub Profile](https://github.com/arunavo-bhowal)
