const fs = require('fs');

// 1. Update App.tsx
let app = fs.readFileSync('src/App.tsx', 'utf8');
const oldRouting = `      if (hash === 'study') {
        setCurrentView('study');
        setIsPoemModalOpen(false);
      } else if (hash === 'chapters') {
        // If we are currently in study view and open modal, we keep study view in background
        setIsPoemModalOpen(true);
      } else {
        setCurrentView('home');
        setIsPoemModalOpen(false);
      }`;
const newRouting = `      if (hash.startsWith('/study/')) {
        const poemId = hash.split('/study/')[1];
        if (poemId) {
          setSelectedPoemId(poemId);
        }
        setCurrentView('study');
        setIsPoemModalOpen(false);
      } else if (hash === 'study') {
        window.location.hash = \`#/study/\${selectedPoemId}\`;
      } else if (hash === 'chapters' || hash === '/chapters') {
        setIsPoemModalOpen(true);
      } else {
        setCurrentView('home');
        setIsPoemModalOpen(false);
      }`;
app = app.replace(oldRouting, newRouting);
fs.writeFileSync('src/App.tsx', app);

// 2. Update PoemSelectorModal.tsx
let modal = fs.readFileSync('src/components/PoemSelectorModal.tsx', 'utf8');
modal = modal.replace(/window\.location\.hash = 'study';/g, "window.location.hash = `#/study/${poem.id}`;");
fs.writeFileSync('src/components/PoemSelectorModal.tsx', modal);

// 3. Update HomeView.tsx
let home = fs.readFileSync('src/components/HomeView.tsx', 'utf8');
// Assuming HomeView has window.location.hash = 'chapters'
home = home.replace(/window\.location\.hash = 'chapters'/g, "window.location.hash = '#/chapters'");
fs.writeFileSync('src/components/HomeView.tsx', home);

console.log('Routing updated');
