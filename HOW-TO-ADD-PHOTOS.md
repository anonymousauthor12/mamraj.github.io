# How to add or remove photos on the website

You do **not** need to edit any code. Each gallery section on the website
is simply a **folder** on GitHub. Whatever photos are in the folder are what
show on the website.

## The folders and the gallery sections they control

| Website section            | Folder to put photos in              |
| -------------------------- | ------------------------------------ |
| Main Gate                  | `images/maingate`                    |
| Main Building              | `images/mainbuilding`                |
| Classroom                  | `images/classroom`                   |
| Staff / Teaching Staff     | `images/staff`                       |
| Prayer Sabha               | `images/prayersabha`                 |
| Library                    | `images/library`                     |
| Science Lab                | `images/sciencelab`                  |
| Play Ground                | `images/playground`                  |
| Greenery                   | `images/greenery`                    |
| Extracurricular Activity   | `images/extracurricular_activity`    |

## To ADD a photo

1. Open the website's GitHub page in a browser and sign in.
2. Click the `images` folder, then open the section folder you want
   (for example `classroom`).
3. Click **Add file** → **Upload files**.
4. Drag your photos in (JPG or PNG), then scroll down and click
   **Commit changes**.
5. Open the website and refresh — the new photos appear automatically.

## To REMOVE a photo

1. Open the folder and click the photo you want to delete.
2. Click the **trash / delete** icon.
3. Click **Commit changes**.
4. Refresh the website — the photo is gone.

## Notes

- Photos show up in alphabetical order of their file name. If you want a
  certain order, name them `01-...`, `02-...`, and so on.
- It can take a minute for GitHub to publish the change before a refresh
  shows it. That is normal.
- Nothing else needs to change — no HTML, no code.

---

# Where the photos are stored (advanced)

By default the website reads photos from **this same repository**. But the
photos do **not** have to live here. They can live in **any public GitHub
account or repository** — for example a separate account that only holds
photos. This is handy if you want the people who manage photos to be
different from the people who manage the website.

## How it works

The website reads photos using two public GitHub services, with **no
password or token**:

1. It lists the files in the `images/<section>` folders using GitHub's
   public API.
2. It loads each image from `raw.githubusercontent.com`.

Because both are public, the repository that holds the photos **must be
public**. (Private repositories need a secret token, and a token cannot be
put in a public website safely — so private photo repos are not supported.)

## To keep photos in any public account

1. In that account, create (or pick) a **public** repository.
2. Inside it, create the same `images/<section>` folders shown in the table
   at the top of this file (`images/maingate`, `images/classroom`, and so
   on — the folder names must match **exactly**).
3. Upload photos into those folders, exactly like the steps above.

## What to change to fetch images from another GitHub account

Only **one line** needs to change, in the file **`pages/site.js`**, near the
top:

```js
const GALLERY_REPO = { owner: 'anonymousauthor12', repo: 'mamraj.github.io', branch: 'main' };
```

Change the three values to point at the account/repo that holds the photos:

- `owner`  — the GitHub **username or organisation** that owns the photos repo.
- `repo`   — the **repository name** that holds the `images/...` folders.
- `branch` — the branch the photos are on (usually `main`).

Example — photos live in a separate account `school-photos` in a repo
called `gallery`:

```js
const GALLERY_REPO = { owner: 'school-photos', repo: 'gallery', branch: 'main' };
```

Save and commit that one change. After that, every photo on the website is
read from the new repository, and the simple **Upload / Delete** steps above
are done in **that** repository instead.

### Checklist when switching accounts

- [ ] The new repository is **public**.
- [ ] It contains the `images/<section>` folders with the **exact** names
      from the table at the top.
- [ ] `owner`, `repo`, and `branch` in `pages/site.js` match the new repo.
- [ ] After committing, refresh the website (give it a minute to publish).

### Good to know

- The website logo also loads from the photos repo, so keep an
  `images/logo.jpg` in it too.
- GitHub allows about **60 folder-listing checks per hour** from one
  visitor without a login; the website already caches the listing for a
  couple of minutes so normal browsing stays well under that. The images
  themselves (from `raw.githubusercontent.com`) do **not** count toward
  that limit.
