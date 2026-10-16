# Personal Portfolio — BIS Student

A responsive, dark-mode personal portfolio built with HTML, CSS, Bootstrap 5, and a small amount of JavaScript.

## Project structure

```text
professional_portfolio/
├── index.html
├── css/
│   └── style.css
├── js/
│   └── main.js
└── README.md
```

## Run locally

1. Download or clone this repository.
2. Open `index.html` in a modern browser.
3. Internet access is needed for the Bootstrap CDN and Google Fonts. The page structure and custom styles are in the local files.

For a convenient development workflow, open the folder in Visual Studio Code and use the Live Server extension if you have it installed.

## Personalize before submitting

- Add your name and update the hero introduction.
- Replace the sample email and GitHub/LinkedIn URLs in the Contact section.
- Update the skills to reflect what you can actually use.
- Replace project descriptions and links with your real work. Remove any example card that doesn't represent a project you have started.
- To add a profile photo, replace the `.photo-placeholder` block in `index.html` with an image such as:
  `<img src="images/profile.jpg" alt="Portrait of Your Name" class="profile-photo">`
  Create an `images` folder and add CSS for `.profile-photo` (for example, `width: 100%; height: 315px; object-fit: cover; border-radius: 12px;`).

## Publish on GitHub

1. Sign in at https://github.com and create a new repository, for example `my-portfolio`.
2. Keep it Public if your assignment needs a publicly accessible link. Do not upload passwords, API keys, or private data.
3. Upload the project files while preserving the `css` and `js` folders, or use Git commands from this folder:

   ```bash
   git init
   git add .
   git commit -m "Create personal portfolio"
   git branch -M main
   git remote add origin https://github.com/YOUR-USERNAME/my-portfolio.git
   git push -u origin main
   ```

   Replace `YOUR-USERNAME` with your GitHub username. If Git asks you to authenticate, follow GitHub's current sign-in instructions.

4. Open the repository on GitHub and copy its URL.
5. For a live website, open the repository's **Settings → Pages**, select **Deploy from a branch**, choose `main` and `/ (root)`, then save. After GitHub Pages publishes it, use the displayed website URL to test the live site.
6. Submit the repository URL in the assignment form: https://forms.gle/15qzygvKSq1Rjba78

## Before you submit

- [ ] Check the website on a phone and a computer.
- [ ] Check every navigation link.
- [ ] Replace sample contact information.
- [ ] Verify project descriptions and links are accurate.
- [ ] Confirm `index.html`, `css/style.css`, and `js/main.js` are in the repository.
- [ ] Submit before the deadline announced by your instructor.
