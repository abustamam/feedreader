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

        it('have URLs', function() {
            for (var i = 0; i < allFeeds.length; i++){
                expect(allFeeds[i]['url']).toBeDefined();
                expect(allFeeds[i]['url'].length).not.toBe(0);
            }
        });

        it('have names', function() {
            for (var i = 0; i < allFeeds.length; i++){
                expect(allFeeds[i]['name']).toBeDefined();
                expect(allFeeds[i]['name'].length).not.toBe(0);
            }
        });

    });

    describe('The menu', function() {
        var body = $('body');

        it('is hidden by default', function() {
            expect(body.hasClass('menu-hidden')).toBeTruthy();
        });

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

    describe('Initial Entries', function() {
         beforeEach(function(done) {
            // Load first feed, call done() when done
            loadFeed(0, done);
         });

         it ('should be loaded', function() {
            expect($('.feed').children().length).toBeGreaterThan(0);
         });

        /* TODO: Add .header-subtitle to template, populate with 
         * feed meta such as description and author. 
         * The .header-subtitle should be empty initially (i.e. falsy),
         * therefore when it is populated it should be truthy.
         */

         it ('should have a subtitle', function() {
            expect($('.header-subtitle').text()).toBeTruthy();
         });

    });

    describe('New Feed Selection', function() {
         beforeEach(function(done){
            loadFeed(1,done);
         });

         it ('should change the feed', function() {
            // Expect .header-title to change text to be the name of the feed. 
            // Default .header-title text is 'feed' so this will only pass if names match
            expect($('.header-title').text()).toBe(allFeeds[1]['name']);
         });

         it ('should be loaded', function() {
            expect($('.feed').children().length).toBeGreaterThan(0);
         })

         // Return to default value
         afterEach(function(done){
            loadFeed(0,done);
         });
    });



}());
