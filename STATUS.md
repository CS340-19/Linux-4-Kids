# Linux-4-Kids: A Web-based Guided Learning Platform

Members: Alexis Engelvin-Grezes, David Wasilko, Jacob Samar, and Russell Derby
___

### Introduction

Samar - I will likely add my failed attempt to setup jenkins to automate
our build process thursday night.

hightlights of what was accomplished

overview of changes to requirements, design, major events

### Customer Value

Samar - I would say we likely fall under no changes unless you can think of something

Changes from the project proposal
  -date of Changes
  -motivation for Changes
  -description of change including implications
if no changes - note "no changes"


### Technology

Our project has made substantial progress in implementing a MVP of our website using
our selected tools. It has been created using Angular 7 and the Material 2 UI library.
The goal of our implementation has been to follow Angular's best practices as much as
we are able. What this entails is writing our code without using deprecated syntax,
implementing functions according to their standards, and most importantly compartmentalizing
and generalizing the components we use. That last bullet point means that we have
written much of our site in a way that doesn't require us to duplicate code. We have
used Angular's feature of transclusion to write the portions of the UI that are
persistent across the site (the top navigation bar, the sidebar, and the bottom bar)
only a single time. We have also created general components, such as our text-container
(which styles a title and packages a text body in a container), that we have been
able to use in many different locations. This reduces the amount of work we are
required to do, as well as keeping our styling consistent throughout the site.

We aimed to have the full UI completed at this point allowing us to focus on styling,
bug fixing, and implementing the more optional features of our project. We ever so
slightly missed that goal. We have a couple of more pages to complete before we can
transition to that portion of the project. Although we missed our goal, we are
satisfied with what we have created, so it is not lost time.

We have implemented a tree list for our lesson selection page that can accommodate
a variable number of lessons and sub-lessons.

![Tree List](src/assets/lesson-select.PNG)

Our sidebar navigation is well styled for the most part and correctly links to
different portions of our site.

![Sidebar](src/assets/sidebar.PNG)

Our lesson page takes information from our lesson objects array and dynamically
styles it according to its length and parts. All that is needed is to add another
lesson to our array and it will be populated onto our site. No hard coding each lesson.

![Text-lesson](src/assets/text-lesson.PNG)

Unfortunately, other than general navigation debugging and attempting to break our
site, we have done no tests. Automated testing is a priority as soon as the UI is finished.

As we have mentioned, our next goals are to style the application, create tests
for various portions of the site, and start adding our more optional features. We
have not decided the order, but our options include the following:
  - Adding mongoDb as our database to store user profiles and lesson progress
  - Creating a lesson creation page that would allow users (admin users as the
    next next feature) to create lessons without coding
  - Further implementing our terminal-lesson to better emulate Linux commands

### Team

Samar - I'd like to get the whole team working more on adding code Changes
to components and styling. I've set up most so far with a little help since I
have experience, but I should be able to outline specific tasks now that everyone
can do.

what roles did team members have for this iteration

do you expect team member roles to change going forward



### Project Managment

is the product on schedule

provide any updates to the schedule since the start of the semester


### Reflection

Samar - After getting the framework working with the UI library and other
dependencies progress has been quicker. I can write about this later or someone
can BS, either way

For this iteration:
  - What went well
  - what didn't go well
  - what will you do differently in the next iteration
