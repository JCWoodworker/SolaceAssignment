# Discussion Items

## What would I add if I had more time?

### 1️⃣2️⃣3️⃣ Pagination Upgrades

- User can choose how many entries to return from a dropdown
- Utilize `skip` and `limit` from response object instead of writing extra logic on the frontend to update state
- Return a count of total entries from the backend and allow user to see a list of page numbers to skip instead of having to click next over and over

### 📊 Table and Search Updates

- Enhanced search/filtering
  - Create advanced filtering dialog/modal.
  - User can multi select from all available elements
    - example ... multiple specialties, multiple degrees, etc ...
  - A comprehensive, user-friendly, filtering feature can drastically reduces the user's need to type in the search bar.
- Styling!!
  - ShadCN and Tailwind were used to get a baseline on styling and help with responsiveness
  - This, however, is not the most asthetic table on earth.
  - There are other options for data table components from open source libraries that automically add sorting and other functionality.  Notably Tanstack Data Table
- Loading / Caching
  - My personal favorite librariy for client & server management is Tanstack Query (React Query)
  - It comes out of the box with loading/error states, caching, and more.  LOTS more.
  - We should be showing a loading state while awaiting the fetch to return a response
    - We COULD add infinite scrolling, where we load a paginated response and append it to the cache AS the user scrolls.  That way scrolling backward will instantly show results.
      - This works well with pagination too - returning to a previous page just reads from cache instead of fetching

### 💻 Backend Updates

- We could have more enhanced GET requests that allow and of the elements that show for each column to be passed as query params.
  - `/api/advocates/?specialties={specialtyOne}%20{specialtyTwo}?degrees={md}%20{phd}
  - etc...
  - This doubles as a quick way for a user to return to a specific search filter simply from bookmarks, AND they could quickly share their filter by simply sending the URL to someone else
- I would have LOVED more time to spin up a Nest.js/TypeORM backend
  - I have been a huge fan of Nest.js for over 3 years at this point and was hoping to showcase my skills

### 🎨 DESIGN

- I was able to replicate the green-to-black background, and some of the color in the "reset search" button, but I would have also liked to add the Solace logo somewhere
- I would've liked to use a better font, preferably what is used at solace.health
- This is admittedly a small weakness when working with a very short timeframe
  - I like to constantly change my mind while deciding how I want things to look until I feel it's right
- I did not spend nearly enough time working on making this a more aesthetically pleasing site, although there is some responsiveness with the search component, and some built-in responsiveness thanks to ShadCN components
- I HAVE in fact put together a well-designed, asthetically pleasing, user friendly UI for a company I am currently contracted with, and would love the opportunity to showcase what I can really do given more time to accomplish.  It is behind an admin login so I would have to share a screen, but it is not a secret software project, and there is ZERO conflict of interest here, so showing it off will not be an issue.
  - It utilized ShadCN, Radix UI, and Tailwind so it's right on par with your stack