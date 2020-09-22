[**counterCarbon**](https://isntlee.github.io/counterCarbon/)


# **counterCarbon** 

This site was created to fill a niche as there is no carbon tracker centred on the Irish consumer available. A key ambition of the project was to make this site better than the broad choice of carbon trackers, which are frustratingly detailed, often requiring precise input (.e.g. rate of heating oil use). The site is designed as an intuitive, user-friendly and encouraging introduction to a more carbon-conscious lifestyle. 



## **UX**

- The site is designed for people mostly unfamiliar with emissions tracking, and unfamiliar with broader climate-change questions. This site is designed as their introduction to the field. 

- These users would only access the site to learn about their CO2 emissions, and they are guided through several straight-forward questions that result in that user's total emissions, and what those emissions are in comparison to several national/supra-national averages. The emphasis is constantly on interaction and clarity; due to this focus the site is easier to navigate than its competitors such as [**the carbon footprint**](https://www.carbonfootprint.com/calculator.aspx), [**nature.org**](https://www.nature.org/en-us/get-involved/how-to-help/carbon-footprint-calculator) or the [**WWF**](https://footprint.wwf.org.uk/#/)

#### Wireframes: 

- The focus on clarity is made clear in the README wireframes, see. README folder. The initial wireframe sketch "counterCarbon(outline)" underscores the clean and well-spaced structure. This was chosen to minimise confusion as much as possible. 

- The same principles were maintained through the build, .e.g. README wireframe files "counterCarbon(desktop)" or "counterCarbon(mobile)". The questions are here outlined in a larger font and the emissions questions answered are immediately represented in an interactive bar-chart; both decisions taken to increase accessibility and broaden appeal. 

- Towards the end of the build, it was decided to add a "further action" section. As on discovering the user's emissions total they might consider donating to an organisation involved or perhaps volunteering; these reactions are then attended to in the final "Partners" section. 

#### User Stories: 

- As a site visitor, I can answer the set questions so that I will learn my total CO2 emissions. 

- As a child site visitor, I can answer the set questions so that I will learn my total CO2 emissions through diagrams/charts. 

- As a site visitor, I can learn my emissions total so that I can take a first step towards mitigating my impact on the climate.

- As a site visitor, I can contact green organisations through the site so that I can act on my emissions total. 

- As a member of a green organisation, I can direct the public here so that they can be introduced to the topic in an encouraging way.



## **Features**

- Navigation Menu: a visible and clear guide to the features of the site, each link directs to a named area of the site .

- Questions Sets: each set of straight-forward questions is contained within a topic, and the results are displayed on the related bar-charts.

- Bar-Charts: the bar-charts are interactive, responding in real-time to the answers offered by the user. These display clearly the user's emissions totals, and that total in comparison to select national/supra-national averages. The tool-tip function clearly marks the amount of emissions in metric tons. 

- Circle Pie-Chart: this is the total emissions display. The totals from each bar-chart are combined and compared to represent percentage totals of overall emissions visually. The tool-tip function allows further comparison by showing percentage of overall total emissions and that total in metric tons.

- Wind-Rose Chart: this is the final comparative display. It functions by comparing the user's overall total (built of the separate individual totals) to a range of national/supra-national averages. This was chosen as the clearest means of understanding an individual's impact in comparison to others.   

- Partners Section: this section was added to allow users to act on climate-change if they had the immediate impulse after viewing their total emissions. The separate logos are live links to the separate organisations' landing pages. 



## **Technologies Used**

- [HTML5](https://whatwg.org/): As the project was a website, HTML5 was necessary. It is crucial in arranging the separate elements necessary to build a site.

- [CSS](https://www.w3.org/Style/CSS/): CSS was necessary to apply stylistic changes to the core structural  elements introduced in HTML.

- [Javascript](https://www.javascript.com/): As this project would always require user interaction, Javascript was necessary to accommodate this interaction.

- [jQuery](https://jquery.com/): This is a JS library chosen to handle DOM manipulation in a simple and clear manner. It was used to implement changes in the CSS of the Navigation Bar.

- [Highcharts](https://www.highcharts.com/blog/products/highcharts/): The site was planned to be built around a series of charts to display the user's information. Highcharts is a SVG-based, multi-platform charting library used to make interactive charts.

- [Bootstrap](https://getbootstrap.com/docs/4.3/getting-started/introduction/): This is a front-end framework chosen to add specific stylistic aspects beyond CSS, especially useful in arranging lay-out columns.

- [Font Awesome](https://fontawesome.com/): A font toolkit based on CSS, that works with Bootstrap. This was used to add further font variety to the project.

- [GIMP](https://www.gimp.org/): A raster graphics editor used to alter/retouch the images used in this project.



## **Testing**

#### Features: 

- Navigation Links: On Desktop/laptop feature displays correctly, all links operate as designed by directing user to that section of the site.

- Question Sets: Displays correctly, and functions correctly with radio buttons registering input.

- Bar-Charts: Displays correctly, and displays question-input correctly. The bars display that section's summed-total correctly. The other three bars in each section display national/supra-national averages correctly. The tool-tip function also displays and behaves correctly in each.  

- Circle Pie-Chart: Displays correctly, and all input is summed correctly. The separate sections' totals compare in percentage terms correctly and this feature displays correctly. The tool-tip function behaves and displays correctly.

- Wind-Rose Chart: Displays correctly, and all user input is summed and displayed correctly. The tool-tip function behaves and displays correctly. Selecting a section total (e.g. Food) highlights the correct section in every national/supra-national slice; this functions as intended. 

- Partners Section: Displays correctly, and all links operate as designed by opening the link in a new tab. 

#### Browsers: 

- In testing, there has been one minor problem noted. In Chrome, the background animation "the breathe effect", can force the border of the initial/landing page to adjust very slightly to the left. This only ever occurs on refreshing the landing page alone. This phenomenon is only identified in Google Chrome. The problem has been termed an "obscure browser" problem as the animation resets on refresh, and animation states are not saved between page instances. This problem does not present itself in either Firefox or Internet Explorer. 

- In Firefox, the site functions absolutely perfectly. However, in Internet Explorer there are several questions with the display. The jQuery elements do not function and the scrolling action is severely disjointed. But, IE makes up a very small percentage of browsers in use and many popular technologies are not currently supported within IE. 

#### Screen Sizes:

- The site operates on all screen sizes between full desktop size and small mobile. However, it has been specifically set for 320px, 375px, 425px, 768px, 1024px and 1440px. At different screen sizes, features have been adapted to function correctly due to the different inputs or screen visibility.



## **Deployment** 

This particular project does not require any local deployment.

- Deployment and source control was entirely done via GitHub. My repository can be found [**here**](https://github.com/isntlee/counterCarbon).
I've published the source code built from the master branch using GitHub Pages.

- The live site can be found [**here**](https://isntlee.github.io/counterCarbon/).
There are no difference between the deployed version and the development version.



## **Credits**

### **Content**:

All "Partners" SVG links taken from "Partners" sites:  
- [Gold Standard](https://www.goldstandard.org/) 
- [Teamtrees](https://teamtrees.org/) 
- [Friends of the Earth](https://www.foe.ie/climatechange/) 
- [WWF](https://www.wwf.org.uk/what-we-do) 
- [Extinction Rebellion](https://rebellion.earth/the-truth/)

### **Media**:

[Sun breaking through the forest](https://www.google.com/search?q=sun+forest&tbm=isch&source=lnt&tbs=isz:l&sa=X&ved=0ahUKEwjvloTjvKTnAhXPgVwKHcNUAkUQpwUIJA&biw=1366&bih=69&dpr=1#imgr=EdjZ9kQ0RibLPM:) was taken from a Google search

### **Acknowledgements**: 

- Question format, and topics inspired by [WWF site](https://footprint.wwf.org.uk/#/)

- Site structure, and question phrasing inspired by [MyClimate.org](https://co2.myclimate.org/en/footprint_calculators/new)

**All data taken from**: 

- [IEA](http://dx.doi.org/10.1787/data-00430-en.) (2015), "CO2 emissions by product and flow", IEA CO2 Emissions from Fuel Combustion Statistics (database).
- [OECD](http://dx.doi.org/10.1787/data-00594-en) (2014), "Greenhouse gas emissions by source", OECD Environment Statistics (database).
- [OWID](https://ourworldindata.org/grapher/co-emissions-per-capita) (2017) based on the Global Carbon Project; Carbon Dioxide Information Analysis Centre (CDIAC); Gapminder and UN population estimates. 

