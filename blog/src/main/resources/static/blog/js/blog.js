;(function () {	// Document on load.

    var loadBlog = function () {
        $.ajax({
            url:"/article/all",
            contentType: "application/json",
            success:function(result){
                console.log(result);
                for (var item = 0; item < result.length; item ++){
                    var temp = '<div class="col-md-3 col-sm-6 col-padding" data-animate-effect="fadeInLeft">' +
                        '<div class="blog-entry">' +
                        '<a href="/static/blog/blogDetils.html?article='+result[item].id+'" class="blog-img"><img src="images/img-1.jpg" class="img-responsive" alt="Free HTML5 Bootstrap Template by FreeHTML5.co"></a>' +
                        '<div class="desc">' +
                        '<h3><a href="#">' + result[item].articleTitle + '</a></h3>' +
                        '<span><small>by Admin </small> / <small> Web Design </small> / <small> <i class="icon-comment"></i> 14</small></span>'+
                        '<p>' + result[item].articleInfo +'</p>'+
                        '<a href="/static/blog/blogDetils.html?article='+result[item].id+'" class="lead">Read More <i class="icon-arrow-right3"></i></a>'+
                        '</div>'+
                        '</div>'+
                        '</div>';
                    $('.row-bottom-padded-md').append(temp);
                }
            }});
    };
    $(function(){
        loadBlog();
    });


}());