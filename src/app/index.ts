/*
NextJS uses a file-based routing system such that
every folder within the app folder
containing a 'page.tsx' file is treated a distinct route
with the folder path relative to 'app' being the route name and 
the 'page.tsx' rendering UI for that route.

There are also dynamic routes in which part(s) of the route can change
based on user input or data in place.
These can be handled in NextJS by having folder 
whose name starts & end square braces e.g. [user] 
while having its own 'page.tsx' file.

Folders starting & ending with parentheses 
will result in routes that exclude 
the folder name within the parentheses from route name.
These make them ideal for route grouping.

Care should be be taken when using route groups around 
parallel pages point to same path e.g. '/'.
*/
