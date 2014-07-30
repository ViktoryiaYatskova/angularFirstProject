function MainCtrl($scope, $rootScope){
    $rootScope.posts = [
    {"author": "Somebody1",
     "title": "Poem1",
     "text":"I've never been to Athens and I've never been to Rome,\n\
I've only seen the Pyramids in picture books at home,\n\
I've never sailed across the sea or been inside a plane,\n\
I've always spent my holidays in Brighton in the rain.\n\
\n\
I've never eaten foreign food or drunk in a foreign bar,\n\
I've never kissed a foreign girl or driven a foreign car,\n\
I've never had to find my way in a country I don't know,\n\
I've always known just where I am and where I'll never go.",
            "date": "2012-10-16T17:57:28"
        },
    {"author": "Somebody2",
     "title": "Poem2",
     "text":"I've read travel books by writers who have been to Pakistan,\n\
I've heard people telling stories of adventures in Iran,\n\
I've watched TV documentaries about China and Brazil,\n\
But I've never been abroad myself; it's making me feel ill.\n\
\n\
I've studied several languages like Hindi and Malay,\n\
I've learned lots of useful sentences I've never been able to say,\n\
The furthest place I've ever been was to the Isle of Man\n\
And that was full of tourists from Jamaica and Japan." ,
            "date": "2012-10-16T17:57:28"
        }
    ];
    $('.modal')[0].hide();
}
function NewPostCtrl($scope, $rootScope){
    $scope.submit = function(){
        this.post.date = new Date();
        $rootScope.posts.push(this.post);
        this.post = {};
        $('#btn-close').click();
    };
    $scope.showNewPostForm = function(){
        $('.modal')[0].modal('show');
    }
}
