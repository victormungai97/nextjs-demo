/*
This folder holds React components, not pages, 
hence should be outside 'app' folder.

Some of these components are client components
i.e components that require browser interactivity 
e.g clicking, page navigation, form submission etc
and hence need to be rendered on the client (browser).

To use them as client components, 
there needs to be a 'use client' directive at top of component.

These components will be pre-rendered on the server 
i.e parts not requiring browser / reactivity will be render & rest left as placeholders
then hydrated on the browser for final functionality
*/
