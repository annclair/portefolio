((app) => {
    'use strict'

    app.component("portefolioArticle", {
        templateUrl: 'js/components/portefolio/portefolioArticle.html',
        controller: ['portefoliosService', 'commentsService', '$state', 'usersService', function (portefoliosService, commentsService, $state, usersService) {
            angular.extend(this, {
                $onInit() {
                    this.websiteID = $state.params.id;
                    this.getUser();
                    this.getComment();
                    this.get(this.websiteID);
                    this.modeEdit=false;
                    
                },
                getUser() {
                    usersService.getCurrent().then((user) => {
                        this.user = user
                    })
                },
                get(selectedWebsiteId) {
                    portefoliosService.getById(selectedWebsiteId).then((res) => {
                        this.website = res.data
                    })
                    
                },
                getComment() {
                    commentsService.get().then((res) => {
                        this.comments = []
                        res.data.forEach((el) => { (el.websiteId === this.websiteID ? this.comments.push(el) : false)})
                    })
                },
                close() {
                    $state.go('app.portefolioList')
                },
                editWebsite(){
                    this.modeEdit = true;
                },
                cancel() {
                    this.modeEdit = false;
                },
                update(website) {
                    portefoliosService.update(website).then((res) => {
                        this.cancel();
                    })
                },
                delete(website) {
                    portefoliosService.delete(website).then((res) => {
                        this.close()
                    })
                },
                submitForm(form, website) {
                    if (form.$valid) {
                        this.update(website);
                    }
                },
                submitCommentForm(form, comment) {
                    if (form.$valid) {
                        this.addComment(comment);
                    }
                },
                addComment(comment) {
                    comment.websiteId = this.websiteID;
                    commentsService.add(comment).then((res) => {
                        this.comment = {};
                        this.getComment();
                    })
                },
                cancelComment(){
                    this.comment = {};
                }
            })
        }]
    })
})(require('angular').module('app.portefolio'))