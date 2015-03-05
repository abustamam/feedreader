/* We're placing all of our tests within the $() function,
 * since some of these tests may require DOM elements. We want
 * to ensure they don't run until the DOM is ready.
 */
$(function() {
    describe('RSS Feeds', function() {
        it('are defined', function() {
            expect(allFeeds).toBeDefined();
            expect(allFeeds.length).not.toBe(0);
        });

        /* TODO: Write a test that loops through each feed
         * in the allFeeds object and ensures it has a URL defined
         * and that the URL is not empty.
         */

        it('have URLs', function() {
            for (var i = 0; i < allFeeds.length; i++){
                expect(allFeeds[i]['url']).toBeDefined();
                expect(allFeeds[i]['url'].length).not.toBe(0);
            }
        });


        /* TODO: Write a test that loops through each feed
         * in the allFeeds object and ensures it has a name defined
         * and that the name is not empty.
         */

         it('have names', function() {
            for (var i = 0; i < allFeeds.length; i++){
                expect(allFeeds[i]['name']).toBeDefined();
                expect(allFeeds[i]['name'].length).not.toBe(0);
            }
        });

    });

    /* TODO: Write a new test suite named "The menu" */

    describe('The menu', function() {
        var body = $('body');

        it('is hidden by default', function() {
            expect(body.hasClass('menu-hidden')).toBeTruthy();
        });

         /* TODO: Write a test that ensures the menu changes
          * visibility when the menu icon is clicked. This test
          * should have two expectations: does the menu display when
          * clicked and does it hide when clicked again.
          */

        describe('when clicked', function() {
            var menuIcon = $('.menu-icon-link');
            beforeEach(function() {
                menuIcon.trigger('click');
            });
            it ('is displayed ', function() { 
                expect(body.hasClass('menu-hidden')).toBeFalsy();
            });

            it ('is hidden when clicked again', function() {
                expect(body.hasClass('menu-hidden')).toBeTruthy();
            });

        });
    });

    /* TODO: Write a new test suite named "Initial Entries" */

    describe('Initial Entries', function() {
        /* TODO: Write a test that ensures when the loadFeed
         * function is called and completes its work, there is at least
         * a single .entry element within the .feed container.
         * Remember, loadFeed() is asynchronous so this test wil require
         * the use of Jasmine's beforeEach and asynchronous done() function.
         */

         beforeEach(function(done) {
            // Load first feed, call done() when done
            loadFeed(0, done);
         });

         it ('should be loaded', function() {
            expect($('.feed').children().length).toBeGreaterThan(0);
         });

    });

    /* TODO: Write a new test suite named "New Feed Selection" */

    describe('New Feed Selection', function() {
        /* TODO: Write a test that ensures when a new feed is loaded
         * by the loadFeed function that the content actually changes.
         * Remember, loadFeed() is asynchronous.
         */

         var title;

         beforeEach(function(done){
            // Store blog title,
            title = $('.header-title').text();
            loadFeed(0,done);
         });

         it ('should change the feed', function(done) {
            expect($('.header-title').text()).not.toBe(title);
         });

    });

}());
