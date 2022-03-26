Ide untuk slide:

#### Perkenalan sekilas tentang saya

- Isinya nama doang aja, kan sekilas

#### 2022 kita cenderung ke tech stack

- Kasih gambar-gambar Next JS, Remix, Vue, Gatsby, Svelte
- Meskipun tech stack ya memang pengaruh secara performance, yang mana part of user experience
- Web Accessibility tuh juga sebenernya penting banget

### What is a11y

- The content should be available to everyone and the functionality is operated by anyone, literally that everyone should be able to access it

#### Why?

- Kasih quotes tentang semua orang berhak mengakses web dengan baik
- Orang-orang dengan disabilitas seperti buta warna sebagian, tuna netra, tuna rungu, tuna wicara, eh enggak ya tuna wicara harusnya enggak ada kesulitan untuk menikmati experience web
- Many website are visual in their nature and lack keyboard navigation which is essential for blind people to be able to navigate through the content
- When people talk about accessibility, we tend to think about blind people, but there's more about impairment, such user maybe only using keyboard, head trace, some people maybe have broken wrist, broken trackpad, or just shaking in the train.
- Ada juga user dengan cognitive impairment kaya dislexia, autism, ADD, user-user ini butuh a diverse accommodation such as zoom in the screen, minimal design to minimize distraction and cognitive load.
- In summary making a website accessible is really about making sure that the content and the website we create is usable to people with various impairments or abilities
- No matter what your product is there's a whole range of user out there.

### The Data

- Equal access to information for 22.8 mio+ people with dissability\*
- 3.5 mio visually impaired people
- 18.2 mio elders\*\*
- 0.6 mio deaf and unable to speak\*\*
- 0.6 mio motor impairment\*\*
- ?? Everyone in unfortunate future

Source: Indonesian difable according to BPS (12.5%), databooks, PERTUNI: Prevalensi kebutaan di Indonesia =3%, ILO, Kemenkes

### POUR (Perceivable, Operable, Understandable, Robust)

Prinsip accessibility: POUR

- Perceivable
  Tuna netra pake screen reader, tuna rungu baca caption, temen-temen dislexia dengan pilihan font, icon, dsb

- Operable
  Interfacenya bisa dioperasikan, misal enggak bisa diinput, diklik, dienter, dsb. Kaitannya pake input

- Understandable
  Kaitannya dengan bagaimana informasi dan instruksi di suatu elemen bisa dipahami oleh user, dari segi bahasa, tata letak, dsb. Ini lebih ke UI/UX nya, jadi bukan ke coding sih. Hehe

- Robust
  Bagaimana kita bikin elemen itu enggak cuman untuk suatu pengguna dengan cabang disabilitas tertentu atau assistive tech tertentu. Jadi bisa serve untuk semua user mau pake voice over, screen reader, ataupun pengguna biasa semua bisa mendapatkan experience yang sama.

Referensinya ke WCAG, A11yID

---

Accessibility itu bisa dari design, design yang accessible, terus juga code yang ngebikin dia accessible. Kita enggak bahas dari sisi design sih.

---

Bisa pake semantic tags, hierarchy html tags, bisa juga pake WAI-ARIA.

---

Accessibility is not just about screen reader

### Some rules

- If it's an image, put alt text
- If it's a text, it should be read
- If it's a button, put a label on it, don't just make button as a button
- Link shoud be descriptive
- The contrast should be enough for people with color blind (partially or total)
- Proper focus order
- Animasi/konten tidak menyebabkan kejang/kondisi disabilitas

### Some notes

- Accessibility itu proses, bukan di akhir, kalo diibaratkan bikin kue terus kurang bahan
- Website diharapkan punya level accessibility AA

### The tools

Explore

- Disability simulator -> Silktide, Read aloud

Planning

- Color contrast checker -> Figma
- Color contrast analyzer -> Mac, Windows

Evaluation -> tergantung dengan platformnya

- Web audit -> Lighthouse, Firefox accessibility properties
- 3rd party audit -> Wave (Web AIM), ax, ARC
- iOS audit

### Quotes

- Having empathy is huge part of creating an accessible product.

### Resource

- [WCAG](https://www.w3.org/WAI/standards-guidelines/wcag/)
- [WebAIM](https://webaim.org/standards/wcag/checklist)
- [WuhCag](https://www.wuhcag.com/)
- [MDN Accessibility](https://developer.mozilla.org/en-US/docs/Learn/Accessibility/What_is_accessibility)
