# Feed Reader

View this project [here](http://abustamam.github.io/feedreader)

The purpose of this project is to learn TDD using Jasmine. 

In order to run the tests, simply click [here](http://abustamam.github.io/feedreader) or clone the project and open `index.html` in your favorite browser. 

There are several tests for this project, which are listed below. 

    RSS Feeds
        are defined
        have URLs
        have names

    The menu
        is hidden by default
        when clicked
            is displayed 
            is hidden when clicked again

    Initial Entries
        should be loaded
        should have a subtitle

    New Feed Selection
        should change the feed
        should be loaded

Note: The `Initial Entries should have a subtitle` is a failing test as the feature has not yet been added. Adding this feature is outside the scope of this project, but it is something to think about for future commits!

The test checks that the `.header-subtitle` element is `truthy`. By default, it is empty, and therefore `falsy`, so when it is properly populated, it should be `truthy`. This may lead to false positives, for example, if it loaded raw AJAX, so perhaps adding `subtitle` to the `allFeeds` object would allow for this test to be more accurate. 

## Resources

[Jasmine Docs](http://jasmine.github.io/2.1/introduction.html)
[jQuery Docs](http://www.jquery.com)
[Try jQuery](http://try.jquery.com)