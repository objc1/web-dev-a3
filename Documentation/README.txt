Instruction:

1. npm install
2. npm run start



Description:

phase 2:

For this assignment I decided to modify my porject from assignment 1.
From the previous version I've inherited:

1. Layouts, header, and footer
2. CSS framewrok - Bootstrap
3. Pagination - from 11ty

As for the modifications, the main change is the file "ghost.js"
In this file I implemented Ghost CMS REST API calls to fetch data
from the CMS. I also slightly modified "start" script in package.json:
1. Load data from the CMS
2. Launch local website
I wouldn't call this the best solution because we need to rebuild the website
after we add new date on the CMS website. If I had more time I would think
about about fetching data in run-time. However, as per the assignment
requirements, fetching data in build-time is okay as well.

Ohh, and the JSON file where the posts are stored is "src/_data/posts.json".
I really like that this project is light-weight and I only spent like an hour
modifying the 1st assignment :)

phase 3:

For the assignment 3 I will continue working on the project from part 1 and 2.
I will add serverless functions using Netlify to dynamicaly fetch conetent from a CMS and dynamically show it on my website.