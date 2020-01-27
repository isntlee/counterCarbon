
Site Address: https://isntlee.github.io/counterCarbon/


#counterCarbon

This site was created due to the fact that there is no carbon tracker centred on the Irish consumer available to use. The central ambition of the project was to make this site unlike the broad choice of carbon trackers, which are frustratingly detailed, often requiring precise input (.e.g. rate of heating oil use). The site is designed as an intuitive, user-friendly and encouraging introduction to a more carbon-conscious lifestyle. 


##UX

The site is designed for people mostly unfamiliar with emissions tracking, and with broader climate-change questions. This site is designed as their introduction to the field. 

These users only access the site to learn about their CO2 emissions, and they are guided through several straight-forward questions that result in that user's total emissions, and what those emissions are in comparison to several national averages. The emphasis is constantly on interaction and clarity; due to this focus the site is easier to navigate than its competitors such as (a) https://www.carbonfootprint.com/calculator.aspx (b) https://www.nature.org/en-us/get-involved/how-to-help/carbon-footprint-calculator/ (c) https://footprint.wwf.org.uk/#/

The focus on clarity is made clear in the README wireframes, see. README folder. The initial wireframe sketch "counterCarbon(outline)" underscores the clean and well-spaced structure. This was chosen to make the presentation as unconfusing as possible. 

The same principles were maintained through the build, .e.g. README wireframe files "counterCarbon(desktop)" or "counterCarbon(mobile)". The questions are here outlined in a larger font and the emissions questions answered are immediately represented in an interactive bar-chart; both decisions taken to increase accessibility and broaden appeal. 

Towards the end of the build, it was decided to add a "further action" section. As on discovering the user's emissions total they might consider donating to a organisation involved or perhaps volunteering; these reactions are then attended to in the final "Partners" section. 


User Stories: 

(a) As a site visitor, I can answer the set questions so that I will learn my total CO2 emissions. 

(b) As a child site visitor, I can answer the set questions so that I will learn my total CO2 emissions through diagram/chart. 

(c) As a site visitor, I can learn my emissions total so that I can take a first step towards mitigating my impact on the climate.

(d) As a site visitor, I can contact green organisations through the site so that I can act on my emissions total. 

(e) As a member of a green organisation, I can direct the public here so that they can be introduced to the topic in an encouraging way.


##Features

a) Navigation Menu: a visible and clear guide to the features of the site, each link directs to a named area of the site .

b) Questions Sets: each set of straight-forward questions is contained within a topic, and the results are displayed on the related bar-charts.

c) Bar-Charts: the bar-charts are interactive, responding in real-time to the answers offered by the user. These display clearly the user's emissions totals, and that total in comparison to select national/supra-national averages. The tool-tip function clearly marks the amount of emissions in metric tons. 

d) Circle Pie-Chart: this is the total emissions display. The totals from each bar-chart are combined and compared to represent percentage totals of overall emissions visually. The tool-tip function allows further comparison by showing percentage of overall total emissions and that total in metric tons.

e) Wind-Rose Chart: this is the final comparative display. It functions by comparing the user's overall total (built of the separate individual totals) to a range of national/supra-national averages. This was chosen as the clearest means of understanding an individual's impact in comparison to others.   

f) Partners Section: this section was added to allow users to act on climate-change if they had the immediate impulse after viewing their total emissions. The separate logos are live links to the separate organisations' landing pages. 


##Technologies Used

HTML5: As the project was a website, HTML5 was necessary. It is crucial in arranging the separate elements necessary to build a site. Link: https://whatwg.org/

CSS: Again, as this was a website, CSS was necessary to apply stylistic changes to the core elements introduced in HTML. Link: https://www.w3.org/Style/CSS/

Javascript: As this project would always require user interaction, Javascript was necessary to accommodate the changes this interaction would create. Link: https://www.javascript.com/

jQuery: This is a JS library chosen to handle change events in a simple and clear manner. It was used to implement changes in the CSS of the Navigation Bar. Link: https://jquery.com/

Highcharts: The site was planned to be built around a series of charts to display the user's information. Highcharts is a SVG-based, multi-platform charting library used to make interactive charts. Link: https://www.highcharts.com/blog/products/highcharts/

Bootstrap: This is a front-end framework chosen to add specific stylistic aspects beyond CSS, especially useful in arranging lay-out columns. Link: https://getbootstrap.com/docs/4.3/getting-started/introduction/

Font Awesome: A font toolkit based on CSS, that works with Bootstrap. This was used to add further font variety to the project. Link: https://fontawesome.com/

GIMP: A raster graphics editor used to alter/retouch the images used in this project. Link: https://www.gimp.org/
