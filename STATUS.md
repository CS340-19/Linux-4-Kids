# Linux-4-Kids: A Web-based Guided Learning Platform

Members: Alexis Engelvin-Grezes, David Wasilko, Jacob Samar, and Russell Derby
___

### Introduction

Samar - I will likely add my failed attempt to setup jenkins to automate
our build process thursday night.

hightlights of what was accomplished

overview of changes to requirements, design, major events

### Customer Value

As was stated in our project proposal, our goal is to provide an educational website to
teach children the basics of Linux, including things like standard usage, commonly used
software, and the history of the service. This is not a unique product. The main way we 
hope to distinguish our platform from others is in the interactive nature of the design, 
as well as by having games and activities throughout in order to make the program feel
more like fun that education.

Our goals in that regard have not changed. However, within the scope of our timeline and
considering the experience of our team members, the interactivity is more than likely what
will be lacking by the deadline. Much of our remaining time will be spent in polishing the
look and feel of the website and adding new features as well as content. So while our goals
have not changed, we are tempering our expectations.

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

Due in part to the fact that the majority of our experience is concentrated in only one of 
our team members, the project has not progressed as quickly as could be hoped. In particular, 
our user profile feature is well behind schedule, and will need significant progress to become 
functional. Despite this, we expect to have at least basic user profile functionality 
implemented by the time of our final presentation. In addition, our site is functional as a 
whole and there is a great framework for expanding on components such as lesson content, 
stylization, and interactive content such as the emulated Linux terminal and other games and 
activities.

Because of the wide scope of our project, as well as the fact that it could be continually 
added to and improved upon in dozens of ways, from the beginning we have been planning on 
simply taking the project as far as we could with the time and manpower that we have. And to
that end, we will continue to add and polish until the very end. Going forward our main goals
will be to continue to improve the look and feel of the site, implement the user profiles,
and continue to add to the lesson content.

### Reflection

Samar - After getting the framework working with the UI library and other
dependencies progress has been quicker. I can write about this later or someone
can BS, either way

For this iteration:
  - What went well
  - what didn't go well
  - what will you do differently in the next iteration
