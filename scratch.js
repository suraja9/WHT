const fs = require('fs');
['blog1.html', 'blog2.html'].forEach(f => {
    let p = 'c:/Users/alisu/OneDrive/Desktop/WHT/wordpress/' + f;
    let content = fs.readFileSync(p, 'utf8');
    content = content.replace(/href="\/blog[12]\/[^"]+"/g, 'href="https://lightpink-jellyfish-915487.hostingersite.com/blog-page/"');
    fs.writeFileSync(p, content);
});
console.log('Done');
