const fs = require('fs');

let content = fs.readFileSync('index.html', 'utf-8');

// Replace the missing flaticons with verified Font Awesome 5 Free classes
content = content.replace('flaticon-art-and-design', 'icon fas fa-pencil-ruler');
content = content.replace('flaticon-settings-1', 'icon fas fa-tools');
content = content.replace('flaticon-development', 'icon fas fa-lightbulb');
content = content.replace('flaticon-laptop', 'icon fas fa-drafting-compass');
content = content.replace('flaticon-search', 'icon fas fa-truck');
content = content.replace('flaticon-customer-service', 'icon fas fa-tasks');

// Add the 'icon' class to all fas fa- occurrences in the new section just in case
// Replace all `<i class="fas fa-*">` with `<i class="icon fas fa-*">` to inherit correct styling
content = content.replace(/class="fas fa-/g, 'class="icon fas fa-');

// But make sure we don't accidentally get 'icon icon fas' if some already had it
content = content.replace(/class="icon icon fas/g, 'class="icon fas');

fs.writeFileSync('index.html', content, 'utf-8');
console.log('Icons fixed successfully!');
