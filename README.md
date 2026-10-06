# bb-pages — Boolean Boyz Frontend

The Boolean Boyz frontend, built as a GitHub Pages Jekyll site to support the **Friends of the Poway Library (FOPL)** web application. This repo is forked from the [Open Coding Society Pages starter](https://github.com/open-coding-society/pages) and customized for our class project.

## About This Project

This frontend was built by the Boolean Boyz team as part of an AP Computer Science Principles capstone project. It serves as the user-facing interface for the FOPL website, connecting to the [bb-flask](https://github.com/Boolean-Boyz/bb-flask) backend for all dynamic features. Future class cohorts are welcome and encouraged to build on this foundation.

The live site is available at: [fopl.opencodingsociety.com/home](https://fopl.opencodingsociety.com/home)

## FOPL Features

All FOPL pages live in the `FOTPL/` folder. The following features were built specifically for the Friends of the Poway Library:

- **Home & Homepage** — Landing pages for the FOPL site
- **Volunteer Apps** — Form and listing page for library volunteer applications
- **Book Scanner** — Frontend for scanning and looking up books
- **Book Catalog** — Browse the library's book collection
- **Book Trivia** — A trivia game using library books
- **Calendar** — View upcoming FOPL events
- **Face Match** — AI-powered face matching feature
- **Cover Guesser** — Guess a book from its cover art
- **Library Dodge / Library Shelf Run** — Interactive library mini-games
- **Word Scramble / Puzzles / Network Stack Game / OSI Layers RPG** — Educational games with a library twist
- **Newsletters** — Display FOPL newsletters
- **Profile** — User profile page
- **History & Timeline** — FOPL history and milestones
- **Contact** — Contact page for the library
- **FOPL Admin & Login** — Admin dashboard and login for library staff
- **Review Blog** — Community book reviews

## Project Structure

```
bb-pages/
├── FOTPL/                  # All FOPL-specific pages
│   ├── Images/             # Images for FOPL pages
│   ├── Notebooks/          # Jupyter notebooks
│   ├── home.md             # FOPL home page
│   ├── volunteer-apps.md   # Volunteer application page
│   ├── book-scan.md        # Book scanner
│   ├── catalog.md          # Book catalog
│   ├── calendar.md         # Events calendar
│   ├── facematch.md        # Face match feature
│   ├── puzzles.md          # Puzzles hub
│   ├── newsletters.md      # Newsletters
│   ├── fopl-admin.md       # Admin panel
│   └── ...                 # More FOPL pages
├── _posts/                 # General blog posts
├── _notebooks/             # Jupyter notebook pages
├── _layouts/               # Page layout templates
├── _includes/              # Reusable HTML components
├── _sass/                  # Styling (SASS/CSS)
├── _config.yml             # Jekyll site configuration
└── Makefile                # Local dev commands
```

## Getting Started

### Prerequisites

- Ruby and Bundler (for Jekyll)
- A terminal (macOS, WSL Ubuntu, or Linux)

### Setup

1. Clone the repository:

   ```bash
   git clone https://github.com/Boolean-Boyz/bb-pages.git
   cd bb-pages
   ```

2. Run the setup script for your OS:

   ```bash
   # macOS
   ./scripts/activate_macos.sh
   # Ubuntu/WSL
   ./scripts/activate_ubuntu.sh
   ```

3. Install Ruby dependencies:

   ```bash
   bundle install
   ```

4. Start the local dev server:

   ```bash
   make
   ```

   Then open `http://localhost:4500/bb-pages/` in your browser.

### Other Useful Commands

```bash
make stop     # Stop the local server
make clean    # Stop and clean all built files
make convert  # Test notebook conversions without starting server
```

## Contributing

This repo is designed to be picked up by future Boolean Boyz cohorts. FOPL pages go in the `FOTPL/` folder. To contribute:

1. Branch off `main` for your feature
2. Add or edit pages in `FOTPL/`
3. Open a pull request with a clear description of what you added or changed
4. Use the existing pages as a style reference, and make sure your pages connect to the correct bb-flask API endpoints.

## License

MIT License — see [LICENSE](LICENSE) for details.

## 2026–27 Capstone: Catalog Improvements

Raadin Ansari (@raadinansari-pixel) will improve catalog search and
filtering so FOPL customers can find books more easily.

Requirements:
- Search returns matching books.
- Filters show books in the selected category.
- Searches with no matches display a clear message.

Local testing: The frontend and Flask backend ran successfully,
and the catalog loaded books through /api/fopl/books.

Planned work: https://github.com/FOPL-Team-2026/bb-pages/issues/1