(function(){
    const navLinks = $('nav ul li a');
    const navH = $('nav').height();
    const section = $('article')
    const documentEl = $(document);

    documentEl.on('scroll', function(){
        const currentScrollPos = documentEl.scrollTop();
        section.each(function(){
            const self = $(this);
            if(self.offset().top < (currentScrollPos + navH) && (currentScrollPos + navH) < (self.offset().top + self.outerHeight())){
                const targetclass = '.' + self.attr('class') + '-marker'
                navLinks.removeClass('active');
                $(targetclass).addClass('active')
            }
            
        })
    })

})();