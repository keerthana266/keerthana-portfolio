# Keerthana's Editable Portfolio

A Next.js portfolio recreated from the supplied screen-recording reference, with the reference's dark navy layout, cyan/green accents, rounded cards, project sections, experience cards, timeline, resume area, contact cards and responsive navigation.

## Run locally

```powershell
npm install
npm run dev
```

Open http://localhost:3000

## Edit your matter

All main portfolio content is at the top of:

`src/app/page.tsx`

Look for `EDITABLE CONTENT` and edit:

- `site` — name, role, email, phone, location, GitHub, LinkedIn, resume and profile image
- `about` — About section paragraphs
- `education` — education cards
- `experience` — experience cards
- `projects` — project cards
- `solutions` — AI/ML/software solution cards
- `skills` — skills groups
- `community` — leadership/community cards

## Photo

Replace `public/profile-placeholder.svg` with your own image, or change `profileImage` in `site` to `/your-photo.jpg`.

## Resume

Your supplied resume is already copied to `public/resume.pdf`. Replace it with an updated PDF when needed.

## Important

The layout is recreated from the reference video. Reference-only claims/projects that were not present in your resume were not copied into your content; the corresponding sections use your actual resume information.
